export default function AppShowcase() {
    return (
      <section className="mx-auto py-24">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex semper 
            blandit. Vestibulum eget odio consectetur, pellentesque elit id, maximus quam. Nullam felis
          </p>
        </div>
  
        {/* Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Column - Two Cards */}
          <div className="space-y-8 lg:col-span-3">
            {/* First Card */}
            <div className="flex flex-col rounded-3xl  bg-gray-50 p-8 lg:flex-row-reverse lg:items-center lg:gap-8">
              <div className="order-2 lg:order-1 lg:flex-1">
                <h3 className="mb-4 text-2xl font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing e
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex 
                  semper blandit. Vestibulum eget odio consectetur, pellentesque elit id,
                </p>
              </div>
              <div className="mb-6 flex justify-center lg:mb-0 lg:w-[45%]">
                <img
                  src="/Iphone front view.png"
                  alt="Spin the wheel game interface"
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
  
            {/* Second Card */}
            <div className="flex flex-col rounded-3xl bg-gray-50 p-8 lg:flex-row lg:items-center lg:gap-8">
              <div className="relative mb-6 flex justify-center lg:mb-0 lg:w-[45%]">
                <div 
                  className="absolute -left-4 bottom-4 h-20 w-20 rounded-full bg-yellow-200/80" 
                  aria-hidden="true"
                />
                <img
                  src="/running.png"
                  alt="Fitness challenge interface"
                  className="relative z-10 h-auto w-full rounded-xl"
                />
              </div>
              <div className="lg:flex-1">
                <h3 className="mb-4 text-2xl font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing e
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex 
                  semper blandit. Vestibulum eget odio consectetur, pellentesque elit id,
                </p>
              </div>
            </div>
          </div>
  
          {/* Right Column - Single Card */}
          <div className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-3xl bg-gray-50 p-8">
              <div className="mb-8 lg:mb-auto">
                <h3 className="mb-4 text-2xl font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing e
                </h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex 
                  semper blandit. Vestibulum eget odio consectetur, pellentesque elit id,
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/IphoneHunt.png"
                  alt="Treasure hunt game interface"
                  className="h-auto w-full max-w-[280px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  