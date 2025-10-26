import CustomerService from '@/features/customer-service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customerservice/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CustomerService />
}
