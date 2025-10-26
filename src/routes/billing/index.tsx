import Billing from '@/features/billing'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/billing/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Billing />
}
