import Footer from '../../components/layout/Footer'
import Navbar from '../../components/layout/Navbar'
import PageWrapper from '../../components/layout/PageWrapper'
import AISection from './AISection'
import CTASection from './CTASection'
import EventsPreview from './EventsPreview'
import FeatureGrid from './FeatureGrid'
import HeroSection from './HeroSection'
import OpportunitiesPreview from './OpportunitiesPreview'
import TrustSection from './TrustSection'

export default function LandingPage() {
  return (
    <PageWrapper>
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <TrustSection />
        <OpportunitiesPreview />
        <EventsPreview />
        <AISection />
        <CTASection />
      </main>
      <Footer />
    </PageWrapper>
  )
}
