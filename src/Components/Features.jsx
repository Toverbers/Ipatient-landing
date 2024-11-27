import { Button } from './ui/button'

export default function Features() {
  return (
    <section className="mx-auto py-24 w-[100%]">
      <div className="mb-16 flex items-start justify-between">
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <Button 
          variant="default" 
          className="bg-[#0D4A42] text-white hover:bg-[#0D4A42]/90"
        >
          CTA
        </Button>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* First Card */}
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam
          </p>
        </div>

        {/* Middle Card */}
        <div className="rounded-3xl bg-[#0D4A42] p-8 text-white">
          <h3 className="mb-4 text-xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h3>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam
          </p>
          <div className="mt-8 aspect-square w-full rounded-xl bg-white" />
        </div>

        {/* Third Card */}
        <div className="rounded-3xl bg-gray-50 p-8">
          <h3 className="mb-4 text-xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h3>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam
          </p>
        </div>
      </div>
    </section>
  )
}

