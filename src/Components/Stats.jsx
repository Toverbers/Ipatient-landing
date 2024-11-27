export default function Stats() {
    return (
      <section className="mx-auto py-24">
        <div className="grid gap-24 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="text-sm font-medium text-emerald-500">HEADING</span>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales 
              diam ac ex semper blandit. Vestibulum eget odio consectetur, pellentesque elit 
              id, maximus quam. Nullam felis turpis, tempor id quam et, maximus 
              elementum odio
            </p>
            <div className="grid gap-12 pt-8 sm:grid-cols-2">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-500">+10 yrs</div>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac ex
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-500">+232K</div>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales diam ac
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl bg-gray-50" />
        </div>
      </section>
    )
  }
  
  