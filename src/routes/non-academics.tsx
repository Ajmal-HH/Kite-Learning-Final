import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "./courses";

export const Route = createFileRoute("/non-academics")({
  head: () => ({ meta: [{ title: "Non-Academic Courses — Interval Learning" }] }),
  component: () => (
    <SimplePage
      title="Non Academic Courses"
      subtitle="Art, music, coding, public speaking and more."
      body="Help your child build confidence and explore their passions outside the textbook. Our non-academic programs include phonics, spoken English, German, Hindi, Arabic and creative skill-building electives."
    />
  ),
});
