import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Grid from '../../components/ui/Grid'
import Badge from '../../components/ui/Badge'
import { featureItems } from '../../lib/constants'

export default function FeatureGrid() {
  return (
    <section id="features" className="border-b py-12">
      <Container className="space-y-5">
        <Badge>Feature Grid</Badge>
        <h2 className="text-2xl font-semibold">Everything to grow on one platform</h2>
        <Grid>
          {featureItems.map((feature) => (
            <Card key={feature.title} className="space-y-2">
              <h3 className="text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-app-muted">{feature.description}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
