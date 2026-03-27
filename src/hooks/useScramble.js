import { useEffect, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567!?§$%#@'

/**
 * Scrambles text on mount then resolves character by character.
 * @param {string} text  — final text to display
 * @param {object} opts
 *   startDelay  — ms before scrambling begins
 *   tickMs      — ms per interval tick
 *   resolveEvery — resolve one char every N ticks
 */
export function useScramble(text, { startDelay = 0, tickMs = 35, resolveEvery = 2 } = {}) {
  const [output, setOutput] = useState(() =>
    text
      .split('')
      .map((c) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
      .join('')
  )

  useEffect(() => {
    let resolved = 0
    let frame = 0
    let interval

    const run = () => {
      interval = setInterval(() => {
        frame++

        // Advance resolved index every N frames, skipping spaces
        if (frame % resolveEvery === 0 && resolved < text.length) {
          while (resolved < text.length && text[resolved] === ' ') resolved++
          if (resolved < text.length) resolved++
        }

        setOutput(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' '
              if (i < resolved) return char
              return CHARS[Math.floor(Math.random() * CHARS.length)]
            })
            .join('')
        )

        if (resolved >= text.length) clearInterval(interval)
      }, tickMs)
    }

    const timer = setTimeout(run, startDelay)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [text, startDelay, tickMs, resolveEvery])

  return output
}
