import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "./courses";

export const Route = createFileRoute("/become-a-tutor")({
  head: () => ({ meta: [{ title: "Become a Tutor — Interval Learning" }] }),
  component: () => (
    <SimplePage
      title="Become a Tutor"
      subtitle="Join 2,000+ educators changing how children learn."
      body="If you love teaching and want flexible, remote work with a global student base, Interval is hiring. Apply with your subject expertise and we'll get back to you with our onboarding process."
    />
  ),
});
