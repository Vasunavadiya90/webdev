import { U } from "./shopifyThemes.js";

/**
 * Only uses the same `U()` helper as theme assets — photo IDs are reused from proven theme gallery URLs.
 * Each section rotates through `images` — unique per slot in this file.
 */
export const STACKED_STORY_SECTIONS = [
  {
    id: "story-merch",
    eyebrow: "Merchandising",
    title: "Layouts that let products breathe",
    body: "Editorial grids, generous whitespace, and PDP clarity tuned for scroll depth — so browsers become buyers without noisy chrome.",
    images: [
      { src: U("photo-1441986300917-64674bd600d8", 1200, 900), alt: "Bright retail floor and clothing displays" },
      { src: U("photo-1555529669-e69e935aa740", 1200, 900), alt: "Shopping bags in daylight" },
      { src: U("photo-1445205170230-053b83016050", 1200, 900), alt: "Fashion accessories flat lay" },
    ],
    imageLeft: true,
    surface: "white",
  },
  {
    id: "story-mobile",
    eyebrow: "Mobile commerce",
    title: "Thumbs-first journeys",
    body: "Touch targets, thumb zones, and checkout steps that stay coherent on small screens — the same story from hero to thank-you page.",
    images: [
      { src: U("photo-1511707171634-5f897ff02aa9", 1200, 900), alt: "Hands holding a phone in a bright workspace" },
      { src: U("photo-1519389950473-47ba0277781c", 1200, 900), alt: "Team collaboration over devices" },
      { src: U("photo-1556228453-efd6c1ff04f6", 1200, 900), alt: "Skincare products in soft daylight" },
    ],
    imageLeft: false,
    surface: "mist",
  },
  {
    id: "story-speed",
    eyebrow: "Performance",
    title: "Fast feels premium",
    body: "Lightweight sections, tuned imagery, and OS 2.0 patterns that keep Largest Contentful Paint in check while visuals stay bold.",
    images: [
      { src: U("photo-1460925895917-afdab827c52f", 1200, 900), alt: "Laptop on a clean desk with analytics" },
      { src: U("photo-1551288049-bebda4e38f71", 1200, 900), alt: "Data dashboard on screen" },
      { src: U("photo-1523275335684-3783b10efa80", 1200, 900), alt: "Minimal product still life" },
    ],
    imageLeft: true,
    surface: "white",
  },
  {
    id: "story-brand",
    eyebrow: "Brand systems",
    title: "Typography that carries tone",
    body: "Pairings and scales that flex across campaigns — from launch lookbooks to evergreen catalog pages — without breaking rhythm.",
    images: [
      { src: U("photo-1556742049-0cfed4f6a45d", 1200, 900), alt: "Retail counter with point of sale in daylight" },
      { src: U("photo-1490481651871-ab68de25d43d", 1200, 900), alt: "Fashion editorial styling" },
      { src: U("photo-1469334031218-e382a71b716b", 1200, 900), alt: "Outdoor lifestyle catalog scene" },
    ],
    imageLeft: false,
    surface: "mist",
  },
  {
    id: "story-launch",
    eyebrow: "Launch ready",
    title: "Ship once, iterate with confidence",
    body: "Presets, sections, and documentation structured so your team can evolve the storefront as offers change — not rebuild from zero.",
    images: [
      { src: U("photo-1596462502278-27bfdc403348", 1200, 900), alt: "Beauty and cosmetics flat lay" },
      { src: U("photo-1607082348824-0aad98f51801", 1200, 900), alt: "Workspace celebration moment" },
      { src: U("photo-1618221195710-dd6b41faaea6", 1200, 900), alt: "Calm interior living space" },
    ],
    imageLeft: true,
    surface: "white",
  },
];
