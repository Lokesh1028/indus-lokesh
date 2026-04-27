import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollAnimations from '@/components/ScrollAnimations'

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ScrollAnimations />
      <main className="project-page">{children}</main>
      <Footer />
      <BackToTop />
    </>
  )
}
