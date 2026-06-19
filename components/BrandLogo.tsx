import Image from 'next/image'

type BrandLogoProps = {
  className?: string
  priority?: boolean
  variant?: 'nav' | 'hero' | 'footer'
}

const variantClasses = {
  nav: 'h-14 w-14',
  hero: 'h-48 w-48 sm:h-56 sm:w-56',
  footer: 'h-16 w-16',
}

const imageSizes = {
  nav: '3.5rem',
  hero: '(max-width: 640px) 12rem, 14rem',
  footer: '4rem',
}

export default function BrandLogo({
  className = '',
  priority = false,
  variant = 'nav',
}: BrandLogoProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_14px_32px_rgba(18,189,180,0.18)] ${variantClasses[variant]} ${className}`}
    >
      <Image
        src="/tiny-leaders-logo.png"
        alt="თაინი ლიდერსის ლოგო"
        width={1254}
        height={1254}
        priority={priority}
        sizes={imageSizes[variant]}
        className="h-full w-full object-contain"
      />
    </div>
  )
}
