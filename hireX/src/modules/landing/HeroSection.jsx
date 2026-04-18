import Button from '../../components/ui/Button'
import Container from '../../components/ui/Container'
import Badge from '../../components/ui/Badge'
import Headline from './Headline'
import Subtext from './Subtext'

export default function HeroSection() {
  return (
    <section className="border-b py-14 sm:py-16">
      <Container className="space-y-6">
        <Badge>Identity Verified Ecosystem</Badge>
        <Headline />
        <Subtext />
        <div className="flex flex-wrap items-center gap-3">
          <Button>Get Started</Button>
          <Button variant="outline">Explore Platform</Button>
        </div>
      </Container>
    </section>
  )
}
