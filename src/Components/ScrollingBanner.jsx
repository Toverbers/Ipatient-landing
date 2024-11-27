import { useEffect, useRef, useState } from 'react'

export default function ScrollingBanner() {
  const [isInView, setIsInView] = useState(false)
  const bannerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) {
      observer.observe(bannerRef.current)
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={bannerRef}
      className="relative flex overflow-hidden bg-[#0D4A42] py-3 md:-mx-4"
      aria-hidden="true"
    >
      {/* First scroll container */}
      <div
        className={`flex min-w-full shrink-0 items-center justify-center gap-4 ${
          isInView ? 'animate-scroll' : ''
        }`}
      >
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-white">
            <span className="whitespace-nowrap text-lg font-medium">
              Download Now
            </span>
            <div className="h-2 w-2 rotate-45 transform bg-emerald-400" />
          </div>
        ))}
      </div>
      {/* Duplicate for seamless loop */}
      <div
        className={`flex min-w-full shrink-0 items-center justify-center gap-4 ${
          isInView ? 'animate-scroll' : ''
        }`}
      >
        {[...Array(7)].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-white">
            <span className="whitespace-nowrap text-lg font-medium">
              Download Now
            </span>
            <div className="h-2 w-2 rotate-45 transform bg-emerald-400" />
          </div>
        ))}
      </div>
    </div>
  )
}

