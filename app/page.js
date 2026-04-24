import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import StandoutDishes from '@/components/StandoutDishes'
import Testimonials from '@/components/Testimonials'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <StandoutDishes />
      <Testimonials />
      <Services />
      <Footer />
    </main>
  )
}
