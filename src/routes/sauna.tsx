import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy path — the page is now /spa. */
export const Route = createFileRoute("/sauna")({
  beforeLoad: () => {
    throw redirect({ to: "/spa", statusCode: 301 });
  },
});
