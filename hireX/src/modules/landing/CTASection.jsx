import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'

export default function CTASection() {
  return (
    <section className="py-12">
      <Container>
        <Card className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold">Ready to build with verified trust?</h2>
          <p className="text-sm text-app-muted sm:text-base">
            Join HireX today and move faster with authentic people and real
            outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button>Join Now</Button>
            <Button variant="outline">Book a Demo</Button>
          </div>
        </Card>
      </Container>
    </section>
  )
}
