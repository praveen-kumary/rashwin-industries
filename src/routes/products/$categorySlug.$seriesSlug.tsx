import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$categorySlug/$seriesSlug")({
  component: () => <Outlet />,
});
