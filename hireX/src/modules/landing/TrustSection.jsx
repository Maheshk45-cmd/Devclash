import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'

export default function TrustSection() {
  return (
    <section id="trust" className="border-b py-12">
      <Container>
        <Card className="space-y-3">
          <Badge>Trust Layer</Badge>
          <h2 className="text-2xl font-semibold">Verification is not optional</h2>
          <p className="max-w-3xl text-sm text-app-muted sm:text-base">
            Profiles, communities, and listings are reviewed so interactions start
            from trust. This cuts noise, fake accounts, and low-signal outreach.
          </p>
        </Card>
      </Container>
    </section>
  )
}
