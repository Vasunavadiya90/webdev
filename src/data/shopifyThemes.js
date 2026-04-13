/**
 * Premium Shopify theme marketplace data (listing + detail).
 * @see https://archetypethemes.co/
 */

/** Stable Unsplash URL — explicit dimensions + quality for crisp, bright loads. */
export const U = (photoId, w, h) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=88`;

/** Primary fallback — bright retail (widely cached on Unsplash CDN). */
export const THEME_IMAGE_FALLBACK = U("photo-1556742049-0cfed4f6a45d", 1600, 1000);
/** Secondary / tertiary fallbacks — different scenes so cascade never repeats the same pixels. */
export const THEME_IMAGE_FALLBACK_ALT = U("photo-1563013544-824ae1b704d3", 1600, 1000);
export const THEME_IMAGE_FALLBACK_3 = U("photo-1441986300917-64674bd600d8", 1600, 1000);

/** Detail page — shared feature list. */
export const THEME_MARKET_FEATURES = [
  "Storytelling design",
  "Conversion optimized",
  "Mobile-first",
  "Fast loading",
  "Premium typography",
  "Flexible sections",
];

/** Detail page — industries / use cases. */
export const THEME_MARKET_USE_CASES = ["Fashion", "Beauty", "Electronics", "Furniture", "Luxury"];

/**
 * @param {string} label
 * @param {string} photoId
 * @param {number} w
 * @param {number} h
 * @param {"wide" | "tall"} frame
 */
const galleryShot = (label, photoId, w, h, frame) => ({
  label,
  src: U(photoId, w, h),
  frame,
});

/**
 * @type {Array<{
 *   slug: string;
 *   name: string;
 *   tag: string;
 *   blurb: string;
 *   cardSummary: string;
 *   href: string;
 *   heroAlt: string;
 *   preview: { mobile: string; desktop: string };
 *   cardImage: string;
 *   heroImage: string;
 *   gallery: Array<{ label: string; src: string; frame: "wide" | "tall" }>;
 * }>}
 */
export const SHOPIFY_THEME_SHOWCASE = [
  {
    slug: "cello",
    name: "Cello",
    tag: "Electronics · Fashion",
    blurb: "Elegant design for modern brands with rich product storytelling.",
    cardSummary: "Minimal structure, maximum clarity — built for tech and style-led catalogs.",
    href: "https://themes.shopify.com/themes/cello/presets/cello",
    heroAlt: "Cello theme — electronics and lifestyle retail",
    preview: {
      desktop: U("photo-1551288049-bebda4e38f71", 1920, 1080),
      mobile: U("photo-1519389950473-47ba0277781c", 900, 1500),
    },
    cardImage: U("photo-1551288049-bebda4e38f71", 1200, 1500),
    heroImage: U("photo-1551288049-bebda4e38f71", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1551288049-bebda4e38f71", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1460925895917-afdab827c52f", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1519389950473-47ba0277781c", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1523275335684-3783b10efa80", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1556742049-0cfed4f6a45d", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1563013544-824ae1b704d3", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1555529669-e69e935aa740", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "veena",
    name: "Veena",
    tag: "Luxury · Beauty",
    blurb: "Refined layouts built for conversions and premium presentation.",
    cardSummary: "Editorial luxury for beauty, fragrance, and high-consideration purchases.",
    href: "https://themes.shopify.com/themes/veena/presets/veena",
    heroAlt: "Veena theme — luxury beauty retail",
    preview: {
      desktop: U("photo-1596462502278-27bfdc403348", 1920, 1080),
      mobile: U("photo-1612817288484-6f916006741a", 900, 1500),
    },
    cardImage: U("photo-1596462502278-27bfdc403348", 1200, 1500),
    heroImage: U("photo-1596462502278-27bfdc403348", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1596462502278-27bfdc403348", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1570172619643-d9fcde7dacd2", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1612817288484-6f916006741a", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1620916566398-39f1143ab7be", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1596755094514-87b3e39931ed", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1556228453-efd6c1ff04f6", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1522338242992-e1a54906a8da", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "poco",
    name: "Poco",
    tag: "Grocery · Food",
    blurb: "Crafted for seamless shopping and fresh, appetizing merchandising.",
    cardSummary: "Warm, appetizing layouts for food, beverage, and everyday essentials.",
    href: "https://themes.shopify.com/themes/poco/presets/poco",
    heroAlt: "Poco theme — fresh food and grocery",
    preview: {
      desktop: U("photo-1542838132-29c01a3b8f49", 1920, 1080),
      mobile: U("photo-1488459716781-31db52582fe9", 900, 1500),
    },
    cardImage: U("photo-1542838132-29c01a3b8f49", 1200, 1500),
    heroImage: U("photo-1542838132-29c01a3b8f49", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1542838132-29c01a3b8f49", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1504674900247-0877df9cc836", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1488459716781-31db52582fe9", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1490818387583-1baba5e638af", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1490474418585-ba9bad8fd0ea", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1543163521-1bf539c55dd2", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1606787366850-de6330122589", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "viola",
    name: "Viola",
    tag: "Fashion · Jewelry",
    blurb: "Editorial grids that spotlight detail, shine, and silhouette.",
    cardSummary: "High-fashion grids for jewelry, accessories, and statement collections.",
    href: "https://themes.shopify.com/themes/viola/presets/viola",
    heroAlt: "Viola theme — jewelry and fashion",
    preview: {
      desktop: U("photo-1515562141207-7a88fb7ce338", 1920, 1080),
      mobile: U("photo-1535632066927-ab7c9ab60908", 900, 1500),
    },
    cardImage: U("photo-1515562141207-7a88fb7ce338", 1200, 1500),
    heroImage: U("photo-1515562141207-7a88fb7ce338", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1515562141207-7a88fb7ce338", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1441986300917-64674bd600d8", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1535632066927-ab7c9ab60908", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1617038260897-41a1f14a8ca0", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1469334031218-e382a71b716b", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1434389677669-e08b4cac3105", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1490481651871-ab68de25d43d", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "piano",
    name: "Piano",
    tag: "Kids · Creative",
    blurb: "Playful sections with room for color, story, and imagination.",
    cardSummary: "Color-forward storytelling for kids, toys, and imaginative brands.",
    href: "https://themes.shopify.com/themes/piano/presets/piano",
    heroAlt: "Piano theme — kids and creative retail",
    preview: {
      desktop: U("photo-1503454537195-1dcabb73ffb9", 1920, 1080),
      mobile: U("photo-1516627145497-ae6968895b74", 900, 1500),
    },
    cardImage: U("photo-1503454537195-1dcabb73ffb9", 1200, 1500),
    heroImage: U("photo-1503454537195-1dcabb73ffb9", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1503454537195-1dcabb73ffb9", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1515488042361-ee00e0ddd4f4", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1516627145497-ae6968895b74", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1587654780297-9c705be6d8e6", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1602810318383-e386cc2a3ccf", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1566576912321-d58ddd7a6088", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1502086223501-7ea6ecd7936d", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "koto",
    name: "Koto",
    tag: "Furniture · Decor",
    blurb: "Spacious layouts for lookbooks, room sets, and large catalogs.",
    cardSummary: "Room-scale imagery and calm typography for furniture and home decor.",
    href: "https://themes.shopify.com/themes/koto/presets/koto",
    heroAlt: "Koto theme — furniture and interiors",
    preview: {
      desktop: U("photo-1618221195710-dd6b41faaea6", 1920, 1080),
      mobile: U("photo-1616486338812-3dadae4b4ace", 900, 1500),
    },
    cardImage: U("photo-1618221195710-dd6b41faaea6", 1200, 1500),
    heroImage: U("photo-1618221195710-dd6b41faaea6", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1618221195710-dd6b41faaea6", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1615876234884-f4029b7d7c3c", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1616486338812-3dadae4b4ace", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1615529328331-f8917597711f", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1586023492125-27b2c045efd7", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1618214626217-bd38fd7300d5", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1617806118233-18e1de227200", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "flute",
    name: "Flute",
    tag: "Skincare · Wellness",
    blurb: "Soft typography and calm flows for self-care and rituals.",
    cardSummary: "Spa-quiet rhythm for skincare, wellness, and ritual-led brands.",
    href: "https://themes.shopify.com/themes/flute/presets/flute",
    heroAlt: "Flute theme — skincare and wellness",
    preview: {
      desktop: U("photo-1556228578-0d85b1a4d571", 1920, 1080),
      mobile: U("photo-1570194065650-d99fb4b38b15", 900, 1500),
    },
    cardImage: U("photo-1556228578-0d85b1a4d571", 1200, 1500),
    heroImage: U("photo-1556228578-0d85b1a4d571", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1556228578-0d85b1a4d571", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1556228453-efd6c1ff04f6", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1570194065650-d99fb4b38b15", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1571781926291-c477ebfd024b", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1505944270255-72b8c68c6b69", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1515377905703-c4788e51af15", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1540555700478-4be289fbecef", 1920, 1080, "wide"),
    ],
  },
  {
    slug: "lyra",
    name: "Lyra",
    tag: "Clothing · Lifestyle",
    blurb: "Streamlined shopping for contemporary apparel and drops.",
    cardSummary: "Editorial pace for apparel drops, lookbooks, and lifestyle labels.",
    href: "https://themes.shopify.com/themes/lyra/presets/lyra",
    heroAlt: "Lyra theme — apparel and lifestyle",
    preview: {
      desktop: U("photo-1445205170230-053b83016050", 1920, 1080),
      mobile: U("photo-1469334031218-e382a71b716b", 900, 1500),
    },
    cardImage: U("photo-1445205170230-053b83016050", 1200, 1500),
    heroImage: U("photo-1445205170230-053b83016050", 2400, 1200),
    gallery: [
      galleryShot("Homepage", "photo-1445205170230-053b83016050", 1920, 1080, "wide"),
      galleryShot("Desktop storefront", "photo-1490481651871-ab68de25d43d", 1920, 1080, "wide"),
      galleryShot("Mobile experience", "photo-1469334031218-e382a71b716b", 900, 1500, "tall"),
      galleryShot("Product page", "photo-1434389677669-e08b4cac3105", 1600, 1000, "wide"),
      galleryShot("Collection grid", "photo-1441986300917-64674bd600d8", 1920, 1080, "wide"),
      galleryShot("Cart & checkout", "photo-1555529669-e69e935aa740", 1600, 1000, "wide"),
      galleryShot("Brand story", "photo-1483985988355-759733651d71", 1920, 1080, "wide"),
    ],
  },
];

/** @param {string} slug */
export function getThemeBySlug(slug) {
  return SHOPIFY_THEME_SHOWCASE.find((t) => t.slug === slug) ?? null;
}
