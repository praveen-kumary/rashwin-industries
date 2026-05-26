import { createFileRoute, Outlet } from "@tanstack/react-router";
import { products } from "@/data/products";

export const Route = createFileRoute("/products/$categorySlug/$seriesSlug")({
  loader: ({ params }) => {
    const category = products.find((c) => c.slug === params.categorySlug);
    if (!category) {
      throw new Error("Category not found");
    }
    const series = category.series.find((s) => s.slug === params.seriesSlug);
    if (!series) {
      throw new Error("Series not found");
    }
    return { category, series };
  },
  component: () => <Outlet />,
});
