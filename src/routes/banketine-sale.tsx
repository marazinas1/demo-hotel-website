import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy path — the page is now /renginiai. */
export const Route = createFileRoute("/banketine-sale")({
  beforeLoad: () => {
    throw redirect({ to: "/renginiai", statusCode: 301 });
  },
});
