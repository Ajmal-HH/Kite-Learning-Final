import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/become-a-tutor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/become-a-tutor"!</div>
}
