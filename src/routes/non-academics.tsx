import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/non-academics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/non-academics"!</div>
}
