import { Resend } from 'resend'

export const config = { runtime: 'edge' }

// Convert an ArrayBuffer to a base64 string without relying on Node Buffer (Edge-safe)
function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  const chunkSize = 0x8000
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize))
  }
  return btoa(binary)
}

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const contentType = req.headers.get('content-type') || ''

  let name, email, topic, budget, timeline, message, attachment

  try {
    if (contentType.includes('multipart/form-data')) {
      const fd = await req.formData()
      name     = fd.get('name')
      email    = fd.get('email')
      topic    = fd.get('topic')
      budget   = fd.get('budget')
      timeline = fd.get('timeline')
      message  = fd.get('message')
      const file = fd.get('attachment')
      // Files arrive as File/Blob objects in Edge runtime
      if (file && typeof file === 'object' && 'arrayBuffer' in file && file.size > 0) {
        attachment = file
      }
    } else {
      const body = await req.json()
      ;({ name, email, topic, budget, timeline, message } = body)
    }
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Server-side validation
  if (!name || !email || !budget || !timeline || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Server-side file size guard (1 MB)
  if (attachment && attachment.size > 1_000_000) {
    return new Response(JSON.stringify({ error: 'Attachment too large' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  // Build internal-email attachment payload (only attach to the internal notification,
  // not to the customer confirmation)
  let internalAttachments
  if (attachment) {
    const buf = await attachment.arrayBuffer()
    internalAttachments = [{
      filename: attachment.name || 'attachment',
      content: arrayBufferToBase64(buf),
    }]
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await Promise.all([
      // Mail 1 — Bestätigung an den Kunden
      resend.emails.send({
        from: 'hello@daelionlabs.com',
        to: email,
        subject: 'Deine Anfrage ist angekommen — wir melden uns bald 👋',
        text: `Hey ${name},\n\ndanke für deine Anfrage — sie ist bei uns eingegangen.\n\nIch persönlich schaue sie mir an und melde mich innerhalb von 24 Stunden bei dir.\n\nBis gleich,\nViktor\nDaelion Labs\nhello@daelionlabs.com`,
      }),

      // Mail 2 — Benachrichtigung intern (mit optionalem Anhang)
      resend.emails.send({
        from: 'hello@daelionlabs.com',
        to: 'hello@daelionlabs.com',
        reply_to: email,
        subject: `Neue Anfrage von ${name} — ${budget}`,
        text: `Name: ${name}\nE-Mail: ${email}\nThema: ${topic || '—'}\nBudget: ${budget}\nZeitrahmen: ${timeline}\nAnhang: ${attachment ? `${attachment.name} (${attachment.size} B)` : '—'}\n\nNachricht:\n${message}`,
        ...(internalAttachments ? { attachments: internalAttachments } : {}),
      }),
    ])

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    console.error('Resend error:', err)
    return new Response(JSON.stringify({ error: 'Email send failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
