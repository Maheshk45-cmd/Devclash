import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Grid from '../../components/ui/Grid'
import { opportunities } from '../../lib/constants'

export default function OpportunitiesPreview() {
  return (
    <section id="opportunities" className="border-b py-12">
      <Container className="space-y-5">
        <Badge>Opportunities</Badge>
        <h2 className="text-2xl font-semibold">Curated roles that match your goals</h2>
        <Grid>
          {opportunities.map((item) => (
            <Card key={item.title} className="space-y-2">
              <h3 className="text-base font-medium">{item.title}</h3>
              <p className="text-sm text-app-muted">{item.type}</p>
              <p className="text-sm text-app-muted">{item.location}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
