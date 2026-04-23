import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/online-tuition')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/online-tuition"!</div>
}
