import fs from 'fs';

const content = fs.readFileSync('src/data/products.ts', 'utf-8');

let newContent = content.replace(
  /export interface SubProduct \{[\s\S]*?\}/,
  `export interface ProductItem {
  slug: string;
  title: string;
}

export interface ProductSeries {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  items: ProductItem[];
}`
);

newContent = newContent.replace(
  'subProducts: SubProduct[];',
  'series: ProductSeries[];'
);

newContent = newContent.replace(/subProducts:/g, 'series:');

const industrialEdgeItems = [
  { slug: "nuc-mini-pc", title: "NUC Mini PC" },
  { slug: "celeron-cpu-industrial-embedded-box-pc", title: "Celeron CPU-Industrial Embedded Box PC" },
  { slug: "core-i3-industrial-embedded-box-pc", title: "Core i3-Industrial Embedded Box PC" },
  { slug: "core-i5-industrial-embedded-box-pc", title: "Core-i5 Industrial Embedded Box PC" },
  { slug: "core-i7-industrial-embedded-box-pc", title: "Core i7-Industrial Embedded Box PC" },
  { slug: "digital-signage-ops-pc", title: "Digital Signage OPS PC" },
  { slug: "industrial-ai-embedded-box-pc-with-graphics-card", title: "Industrial Al Embedded Box PC With Graphics Card" },
  { slug: "core-i9-industrial-embedded-box-pc", title: "Core i9-Industrial Embedded Box PC" },
  { slug: "jetson-nvidia-mini-ai-edge-computing", title: "JETSON-NVIDIA MINI AI Edge Computing" }
];

const touchPanelItems = [
  { slug: "industrial-touch-panel-pc-r", title: "Industrial Touch Panel PC R" },
  { slug: "flame-proof-panel-pc", title: "Flame Proof Panel PC" },
  { slug: "industrial-waterproof-touch-panel-pc", title: "Industrial Waterproof Touch Panel PC" },
  { slug: "industrial-touch-panel-pc-8k-series", title: "Industrial Touch Panel PC 8K Series" }
];

// Instead of regex, we can just parse it if it was JSON, but it's a TS file.
// We'll use a regex to inject `items: []` into every series, then manually replace the specific two.
// A series object ends with `    },` for the `specifications` object.
newContent = newContent.replace(/specifications: \{([\s\S]*?)\},\n/g, (match, p1) => {
  return `specifications: {${p1}}, items: [],\n`;
});

// Now inject the specific items for industrial-edge-computing
newContent = newContent.replace(
  /slug: "industrial-edge-computing"([\s\S]*?)items: \[\],/g,
  `slug: "industrial-edge-computing"$1items: ${JSON.stringify(industrialEdgeItems, null, 10)},`
);

// Now inject the specific items for industrial-touch-panel-pc
newContent = newContent.replace(
  /slug: "industrial-touch-panel-pc"([\s\S]*?)items: \[\],/g,
  `slug: "industrial-touch-panel-pc"$1items: ${JSON.stringify(touchPanelItems, null, 10)},`
);

fs.writeFileSync('src/data/products.ts', newContent);
console.log('Transformation complete!');
