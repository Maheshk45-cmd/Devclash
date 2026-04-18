import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import Input from '../../components/ui/Input'
import AuthPageLayout from './AuthPageLayout'

export default function LoginPage() {
  return (
    <AuthPageLayout
      title="Login to HireX"
      subtitle="Access verified networking, opportunities, and AI support."
    >
      <Card>
        <form className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="login-identifier" className="text-sm font-medium">
            Email or phone number
          </label>
          <Input id="login-identifier" type="text" placeholder="name@domain.com or +91..." />
        </div>
        <div className="space-y-1">
          <label htmlFor="login-password" className="text-sm font-medium">
            Password
          </label>
          <Input id="login-password" type="password" placeholder="Enter your password" />
        </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        <p className="text-sm text-app-muted">
          New here?{' '}
          <a href="#/signup" className="font-medium text-app-fg underline">
            Create your account
          </a>
        </p>
        </form>
      </Card>
    </AuthPageLayout>
  )
}
