'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import UpcomingProject from '@/components/projects/UpcomingProject'
import IntroSection from '@/components/IntroSection'
import FounderVision from '@/components/FounderVision'
import ProjectsShowcase from '@/components/projects/ProjectsShowcase'
import Clubhouse from '@/components/Clubhouse'
import FullParallax from '@/components/FullParallax'
import Location from '@/components/Location'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function Home() {
  return (
    <>
      <Header />
      <ScrollAnimations />
      <main>
        <Hero />
        <UpcomingProject />
        <IntroSection />
        <ProjectsShowcase />
        <FounderVision />
        <Clubhouse />
        <FullParallax />
        <Location />
        <ContactForm />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
