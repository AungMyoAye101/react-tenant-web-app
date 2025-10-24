import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/sigup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/sigup"!</div>
}
