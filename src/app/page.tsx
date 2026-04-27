'use client'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ProjectsShowcase from '@/components/projects/ProjectsShowcase'
import Clubhouse from '@/components/Clubhouse'
import ImageGallery from '@/components/ImageGallery'
import FullParallax from '@/components/FullParallax'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <ScrollAnimations />
      <main>
        <Hero />
        <IntroSection />
        <ProjectsShowcase />
        <Clubhouse />
        <ImageGallery />
        <FullParallax />
        <Amenities />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
