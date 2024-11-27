import AppShowcase from '@/Components/AppShowcase'
import Features from '@/Components/Features'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import ScrollingBanner from '@/Components/ScrollingBanner'
import Stats from '@/Components/Stats'
import Testimonials from '@/Components/Testimonials'
import WhyChooseUs from '@/Components/WhyChooseUs'



function Homepage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="w-full px-4 sm:px-6 lg:px-8 mt-6">
        <Hero />
        <Features />
        <WhyChooseUs />
        <Stats />
        <AppShowcase />
        <Testimonials />
        <ScrollingBanner />
      </main>
       <Footer />
    </div>
  )
}

export default Homepage