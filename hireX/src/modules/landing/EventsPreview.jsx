import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Grid from '../../components/ui/Grid'
import { events } from '../../lib/constants'

export default function EventsPreview() {
  return (
    <section id="events" className="border-b py-12">
      <Container className="space-y-5">
        <Badge>Events</Badge>
        <h2 className="text-2xl font-semibold">Events with practical outcomes</h2>
        <Grid className="lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.name} className="space-y-2">
              <h3 className="text-base font-medium">{event.name}</h3>
              <p className="text-sm text-app-muted">{event.date}</p>
              <p className="text-sm text-app-muted">{event.mode}</p>
            </Card>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
