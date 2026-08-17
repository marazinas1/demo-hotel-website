import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy path — the page is now /restoranas. */
export const Route = createFileRoute("/restobaras")({
  beforeLoad: () => {
    throw redirect({ to: "/restoranas", statusCode: 301 });
  },
});
