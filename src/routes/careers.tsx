import { createFileRoute } from "@tanstack/react-router";
import { SimplePage } from "./courses";

export const Route = createFileRoute("/careers")({
  head: () => ({ meta: [{ title: "Careers — Interval Learning" }] }),
  component: () => (
    <SimplePage
      title="Careers at Interval"
      subtitle="Build the future of personalized learning with us."
      body="We're a fast-growing edtech team based in Kerala, serving families across 30+ countries. We hire across product, engineering, content, operations and student success. Send your CV to careers@intervaledu.com."
    />
  ),
});
