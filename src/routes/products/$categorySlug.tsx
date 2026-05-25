import { createFileRoute, Outlet } from "@tanstack/react-router";

function getCategoryName(slug: string) {
  const titles: Record<string, string> = {
    "industrial-pc": "Industrial PC",
    "industrial-rackmount-pc": "Industrial Rackmount PC & Workstation PC",
    "industrial-touch-screen-display": "Industrial Touch Screen Display",
    "industrial-data-communication": "Industrial Data Communication Products",
    "industrial-ethernet-switches": "Industrial Ethernet Switches",
  };
  return titles[slug] || "Industrial Solutions";
}

// This file is a LAYOUT route for /products/$categorySlug and all its children.
// It renders <Outlet /> so child routes ($seriesSlug, etc.) display correctly.
// The actual category listing page lives in $categorySlug.index.tsx.
export const Route = createFileRoute("/products/$categorySlug")({
  head: ({ params }) => ({
    meta: [
      { title: `${getCategoryName(params.categorySlug)} — Rashwin Industries` },
      {
        name: "description",
        content: `Explore our premium range of ${getCategoryName(params.categorySlug)} solutions, designed for extreme durability and industrial automation.`,
      },
    ],
  }),
  component: () => <Outlet />,
});
