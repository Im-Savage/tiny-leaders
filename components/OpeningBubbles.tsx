import type { CSSProperties } from 'react'

type Bubble = {
  left: string
  size: number
  delay: number
  duration: number
  drift: number
  color: string
  shadow: string
}

const bubbles: Bubble[] = [
  { left: '3%', size: 34, delay: 0, duration: 4.8, drift: 26, color: 'rgba(18, 189, 180, 0.2)', shadow: 'rgba(18, 189, 180, 0.14)' },
  { left: '9%', size: 18, delay: 0.28, duration: 4.1, drift: -14, color: 'rgba(52, 152, 216, 0.18)', shadow: 'rgba(52, 152, 216, 0.12)' },
  { left: '15%', size: 48, delay: 0.62, duration: 5.2, drift: 22, color: 'rgba(248, 189, 8, 0.18)', shadow: 'rgba(248, 189, 8, 0.12)' },
  { left: '23%', size: 24, delay: 0.12, duration: 4.5, drift: -22, color: 'rgba(139, 197, 63, 0.18)', shadow: 'rgba(139, 197, 63, 0.12)' },
  { left: '44%', size: 22, delay: 0.48, duration: 4.4, drift: -18, color: 'rgba(255, 97, 82, 0.14)', shadow: 'rgba(255, 97, 82, 0.1)' },
  { left: '73%', size: 28, delay: 0.08, duration: 4.6, drift: -24, color: 'rgba(52, 152, 216, 0.18)', shadow: 'rgba(52, 152, 216, 0.12)' },
  { left: '82%', size: 42, delay: 0.68, duration: 5.1, drift: 18, color: 'rgba(248, 189, 8, 0.18)', shadow: 'rgba(248, 189, 8, 0.12)' },
  { left: '90%', size: 22, delay: 0.22, duration: 4.3, drift: -20, color: 'rgba(18, 189, 180, 0.2)', shadow: 'rgba(18, 189, 180, 0.14)' },
  { left: '96%', size: 52, delay: 0.82, duration: 5.5, drift: -30, color: 'rgba(255, 97, 82, 0.14)', shadow: 'rgba(255, 97, 82, 0.1)' },
]

export default function OpeningBubbles() {
  return (
    <div aria-hidden="true" className="opening-bubbles pointer-events-none fixed inset-0 z-30 overflow-hidden">
      <div className="opening-brand-caption absolute inset-x-4 top-1/2 z-10 -translate-y-1/2 text-center">
        <p className="brand-rainbow-text text-5xl font-bold leading-none sm:text-7xl">
          Tiny Leaders
        </p>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.24em] text-ink/68 sm:text-base">
          სწავლა · განვითარება · შემოქმედება
        </p>
      </div>
      {bubbles.map((bubble, index) => (
        <span
          key={`${bubble.left}-${bubble.size}`}
          className="opening-bubble absolute bottom-[-7rem] rounded-full border"
          style={{
            '--bubble-delay': `${bubble.delay}s`,
            '--bubble-duration': `${bubble.duration}s`,
            '--bubble-drift': `${bubble.drift}px`,
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            background: `radial-gradient(circle at 34% 28%, rgba(255, 255, 255, 0.96) 0 18%, ${bubble.color} 52%, rgba(255, 255, 255, 0.2) 100%)`,
            borderColor: 'rgba(255, 255, 255, 0.78)',
            boxShadow: `inset -10px -12px 22px ${bubble.shadow}, 0 14px 34px rgba(21, 49, 59, 0.12)`,
          } as CSSProperties}
        >
          <span
            className="absolute left-[22%] top-[18%] block h-[22%] w-[22%] rounded-full bg-white/80"
            style={{ transform: `rotate(${index * 18}deg)` }}
          />
        </span>
      ))}
    </div>
  )
}
