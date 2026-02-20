'use client'
import dynamic from 'next/dynamic'
import Preloader from '@/components/Preloader'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HeroVideo from '@/components/HeroVideo'
import IntroSection from '@/components/IntroSection'
import ImageGallery from '@/components/ImageGallery'
import FullParallax from '@/components/FullParallax'
import Amenities from '@/components/Amenities'
import Clubhouse from '@/components/Clubhouse'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'

const HorizontalScroll = dynamic(() => import('@/components/HorizontalScroll'), { ssr: false })
const OutdoorSlider = dynamic(() => import('@/components/OutdoorSlider'), { ssr: false })

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <ScrollAnimations />
      <main>
        <Hero />
        <HeroVideo />
        <div className="section-divider" />
        <IntroSection />
        <ImageGallery />
        <FullParallax />
        <Amenities />
        <Clubhouse />
        <HorizontalScroll />
        <OutdoorSlider />
        <div className="section-divider" />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
