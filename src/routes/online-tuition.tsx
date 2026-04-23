import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "./courses";

export const Route = createFileRoute("/online-tuition")({
  head: () => ({ meta: [{ title: "Online Tuition — Interval Learning" }] }),
  component: () => (
    <SimplePage
      title="Online One-on-One Tuition"
      subtitle="Live, individualized classes that fit around your child's schedule."
      body="Every Interval tuition session is 1:1, syllabus-aligned and led by trained subject experts. We focus on weak areas, run regular evaluations and share progress with parents after each class."
    />
  ),
});
