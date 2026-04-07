import { Resend } from 'resend'

export const config = { runtime: 'edge' }

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  let body
  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const { name, email, topic, budget, timeline, message } = body

  // Server-side validation
  if (!name || !email || !budget || !timeline || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
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

      // Mail 2 — Benachrichtigung intern
      resend.emails.send({
        from: 'hello@daelionlabs.com',
        to: 'hello@daelionlabs.com',
        subject: `Neue Anfrage von ${name} — ${budget}`,
        text: `Name: ${name}\nE-Mail: ${email}\nThema: ${topic || '—'}\nBudget: ${budget}\nZeitrahmen: ${timeline}\nNachricht: ${message}`,
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
