import AvatarGroup from './AvatarGroup'
import { Button } from './ui/button'

export default function Hero() {
    const avatars = [
        { src: "/Avatar/avatar 4.png", alt: "AvatarA" },
        { src: "/Avatar/avatar 5.png", alt: "AvatarB" },
        { src: "/Avatar/avatar 6.png", alt: "AvatarC" },
        { src: "/Avatar/avatar 7.png", alt: "AvatarD" },
        { src: "/Avatar/avatar 8.png", alt: "AvatarE" },
        { src: "/Avatar/avatar 9.png", alt: "AvatarF" },
      
    ]

  return (
    <section className="w-full py-12 md:py-24">
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2 py-8">
        <div>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
            Lorem ipsum dolor sit am, consectetur adipi.
          </h1>
        </div>
        <div className="flex flex-col justify-start space-y-8">
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex semper blandit. Vestibulum eget odio consectetur, pellentesque elit id, maximus quam. Nullam felis turpis, tempor id quam et, maximus elementum odio
          </p>
          <div className="flex items-center gap-4">
            <Button 
              size="lg"
              className="bg-[#0D4A42] text-white hover:bg-[#0D4A42]/90"
            >
              Download App
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-[#0D4A42] hover:text-[#0D4A42]/90"
            >
              CTA 2
            </Button>
          </div>
        </div>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 items-end">
        {/* Left Column */}
        <div className='flex md:flex-row flex-col gap-2'>
        <div className="space-y-4">
          <div className="flex items-baseline">
            <span className="text-6xl font-bold">10</span>
            <span className="text-4xl font-bold text-emerald-500">+</span>
          </div>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex semper blandit.
          </p>
        </div>

        {/* Center Column */}
        <div className="space-y-4">
          <div className="flex items-center">
            <AvatarGroup avatars={avatars}/>
            <span className="ml-2 rounded-full bg-emerald-500 px-2 py-1 text-xs text-white">
              +1k
            </span>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-semibold">Lorem ipsum</h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex semper blandit.
            </p>
          </div>
        </div>
        </div>
        {/* Right Column - Phone Mockup Container */}
        <div className="relative min-h-[200px]">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url("/Sign in.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 0.7
            }}
            aria-hidden="true"
          />
          <img
            src="/Iphone mockup.png"
            alt="App interface preview"
            className="relative z-10 mx-auto h-auto  w-[500px]  object-cover"
          />
        </div>
      </div>
    </section>
  )
}

