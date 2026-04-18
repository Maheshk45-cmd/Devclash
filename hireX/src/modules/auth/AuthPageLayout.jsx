import Footer from '../../components/layout/Footer'
import PageWrapper from '../../components/layout/PageWrapper'
import Avatar from '../../components/ui/Avatar'
import Container from '../../components/ui/Container'
import Toggle from '../../components/ui/Toggle'

export default function AuthPageLayout({ title, subtitle, children }) {
  return (
    <PageWrapper>
      <header className="border-b">
        <Container className="flex items-center justify-between py-3">
          <a href="#/" className="inline-flex items-center gap-2">
            <Avatar name="HireX" />
            <span className="text-sm font-semibold">HireX</span>
          </a>
          <div className="flex items-center gap-2">
            <Toggle />
            <a
              href="#/"
              className="inline-flex rounded-sm border px-3 py-2 text-sm hover:bg-app-fg/5"
            >
              Back to home
            </a>
          </div>
        </Container>
      </header>

      <main className="py-12">
        <Container className="max-w-xl space-y-3">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <p className="text-sm text-app-muted sm:text-base">{subtitle}</p>
          {children}
        </Container>
      </main>
      <Footer />
    </PageWrapper>
  )
}
