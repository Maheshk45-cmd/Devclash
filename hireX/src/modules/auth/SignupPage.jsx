import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import AuthPageLayout from './AuthPageLayout'

export default function SignupPage() {
  return (
    <AuthPageLayout
      title="Create your HireX account"
      subtitle="Sign up with verified identity details to unlock trusted access."
    >
      <Card>
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="signup-name" className="text-sm font-medium">
              Full name
            </label>
            <Input id="signup-name" type="text" placeholder="Your full name" required />
          </div>

          <div className="space-y-1">
            <label htmlFor="signup-email" className="text-sm font-medium">
              Email address
            </label>
            <Input id="signup-email" type="email" placeholder="name@domain.com" required />
          </div>

          <div className="space-y-1">
            <label htmlFor="signup-phone" className="text-sm font-medium">
              Phone number
            </label>
            <Input id="signup-phone" type="tel" placeholder="+91 90000 00000" required />
          </div>

          <div className="rounded-sm border p-3">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium">Face verification</p>
                <p className="text-xs text-app-muted">
                  Future ML liveness check via camera video capture.
                </p>
              </div>
              <span className="rounded-sm border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-app-muted">
                Not Verified
              </span>
            </div>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              disabled
              aria-label="Face verification coming soon"
            >
              Open Camera & Verify Face (Coming Soon)
            </Button>
          </div>

          <label
            htmlFor="facial-consent"
            className="flex items-start gap-2 rounded-sm border p-3 text-sm"
          >
            <input
              id="facial-consent"
              type="checkbox"
              className="mt-0.5 size-4 rounded-sm border"
              required
            />
            <span>
              I agree to the mandatory facial feature extraction process for identity
              verification and fraud prevention.
            </span>
          </label>

          <Button type="submit" className="w-full">
            Create account
          </Button>
          <p className="text-sm text-app-muted">
            Already registered?{' '}
            <a href="#/login" className="font-medium text-app-fg underline">
              Login
            </a>
          </p>
        </form>
      </Card>
    </AuthPageLayout>
  )
}
