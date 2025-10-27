
import Contract from '@/features/contract'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contract/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Contract />
}
