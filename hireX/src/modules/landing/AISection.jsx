import Badge from '../../components/ui/Badge'
import Card from '../../components/ui/Card'
import Container from '../../components/ui/Container'
import Divider from '../../components/ui/Divider'

const suggestions = [
  'Suggest 3 outreach messages for product managers.',
  'Identify my strongest role based on profile experience.',
  'Create a 7-day networking plan for startup jobs.',
]

export default function AISection() {
  return (
    <section id="ai" className="border-b py-12">
      <Container className="space-y-5">
        <Badge>AI Assistance</Badge>
        <h2 className="text-2xl font-semibold">Focused suggestions, not noise</h2>
        <Card className="space-y-3">
          {suggestions.map((text, index) => (
            <div key={text} className="space-y-3">
              <p className="text-sm">{text}</p>
              {index < suggestions.length - 1 ? <Divider /> : null}
            </div>
          ))}
        </Card>
      </Container>
    </section>
  )
}
