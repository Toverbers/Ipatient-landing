import { Logo } from '@/icons/Logo'
import { Button } from './ui/button'

export default function Footer() {
  return (
    <footer className="border-t px-4 bg-muted/40">
      <div className="py-16">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Lorem ipsum dolor sit am, consectetur adipi.</h2>
            <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <Button className="bg-[#0D4A42] text-white hover:bg-[#0D4A42]/90">Download App</Button>
        </div>
        <div className="mt-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Logo />
            <span className="font-bold">iPatient.ng</span>
          </a>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="#">CTA 1</a>
            <a href="#">CTA 2</a>
            <a href="#">CTA 3</a>
            <a href="#">CTA 4</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

