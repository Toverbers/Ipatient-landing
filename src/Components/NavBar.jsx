import { Button } from './ui/button'
import { Logo } from '@/icons/Logo'

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white">
        <nav className="mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold">Ipatient.ng</span>
            </a>
          </div>
          <div className="flex items-center gap-8">
            <div className="hidden gap-6 md:flex">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">CTA 1</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">CTA 2</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">CTA 3</a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary">CTA 4</a>
            </div>
            <Button variant="default" className="bg-[#0D4A42] text-white hover:bg-[#0D4A42]/90">
                Download App
            </Button>
            </div>
        </nav>
      </header>
  )
}

export default NavBar