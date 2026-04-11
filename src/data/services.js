/**
 * Premium Shopify agency services — copy + structure for index + detail pages.
 */

const processStepsDefault = [
  {
    step: 1,
    title: "Discovery",
    description:
      "We audit your brand, catalog complexity, and growth goals — then align on IA, conversion priorities, and technical constraints.",
  },
  {
    step: 2,
    title: "Design",
    description:
      "Wireframes and high-fidelity UI in your brand system. Mobile-first layouts, PDP storytelling, and checkout clarity baked in early.",
  },
  {
    step: 3,
    title: "Development",
    description:
      "Clean Liquid, OS 2.0 sections, performant assets, and accessible components — built for merchandising teams, not one-off hacks.",
  },
  {
    step: 4,
    title: "QA",
    description:
      "Cross-browser testing, speed budgets, payment flows, and edge-case catalog scenarios before you ever see a broken launch.",
  },
  {
    step: 5,
    title: "Launch",
    description:
      "Cutover planning, redirects, analytics, and post-launch monitoring — plus a handoff your team can operate with confidence.",
  },
];

export const SERVICES = [
  {
    slug: "web-design",
    shortLabel: "Web Design",
    listEyebrow: "Brand & storefront",
    fullTitle: "Shopify Web Design Service",
    heroKicker: "Shopify Plus–grade craft",
    heroTitle: "Shopify web design that converts browsers into buyers.",
    heroSubtitle:
      "Editorial layouts, disciplined typography, and product storytelling — engineered for DTC and luxury brands that cannot afford generic templates.",
    painIntro:
      "If your storefront looks like everyone else’s, you are paying for traffic that never trusts the purchase. We design Shopify experiences that feel bespoke, load fast, and guide shoppers to checkout with quiet confidence.",
    benefits: [
      "Conversion-led UX: hierarchy, spacing, and PDP flows tuned for AOV and clarity — not decoration.",
      "Brand-native UI: custom sections and art direction that match your guidelines across every breakpoint.",
      "Mobile-first luxury: thumb-friendly navigation, sticky CTAs, and imagery that sells without slowing the page.",
      "Merchandiser-ready: layouts your team can update in the theme editor without breaking the design system.",
    ],
    processPreview:
      "Discovery workshops, Figma systems, Liquid implementation, QA, and launch — with a single creative thread from concept to cart.",
    heroImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&h=900&fit=crop&q=82",
    whatWeDoTitle: "What we do",
    whatWeDoLead:
      "We translate brand strategy into a Shopify storefront that performs — combining editorial art direction with ruthless clarity at the moments that matter: collection discovery, PDP evaluation, and checkout trust.",
    whatWeDoBody:
      "Whether you are replatforming to Shopify, refreshing a legacy theme, or launching a new house of brands, we build a visual system that scales: reusable section patterns, consistent spacing rhythm, and motion that supports — never distracts from — revenue.",
    included: {
      turnaround: "Typical engagements: 6–10 weeks from kickoff to launch-ready theme, depending on catalog depth and custom sections.",
      tools: "Figma, Shopify OS 2.0, Liquid, Theme Check, Lighthouse, GA4 / pixel instrumentation patterns.",
      groups: [
        {
          title: "Deliverables",
          items: [
            "Creative direction & UX audit of your current funnel",
            "High-fidelity desktop + mobile UI for core templates",
            "Design system tokens (type scale, color, spacing, buttons)",
            "Section library spec for dev handoff or in-house build",
          ],
        },
        {
          title: "Platforms",
          items: ["Shopify Online Store 2.0", "Shopify Plus (B2B, expansion) where applicable", "Headless-ready component thinking"],
        },
      ],
    },
    processSteps: processStepsDefault,
    results: [
      { title: "Conversion optimization", body: "Clear hierarchy and PDP storytelling reduce bounce and lift add-to-cart rates on cold traffic." },
      { title: "Premium perception", body: "Luxury-grade typography and whitespace signal quality before the first scroll completes." },
      { title: "Better UX", body: "Predictable navigation, accessible contrast, and frictionless filters keep shoppers in flow." },
      { title: "Mobile optimization", body: "Thumb zones, legible type, and image discipline keep LCP and CLS inside healthy budgets." },
      { title: "Trust & credibility", body: "Policy pages, guarantees, and social proof blocks are designed — not bolted on as afterthoughts." },
      { title: "Speed as a feature", body: "Lightweight hero treatments and lazy media strategy protect Core Web Vitals under real catalog weight." },
    ],
    testimonial: {
      quote:
        "They didn’t just skin our store — they rebuilt how we present the collection. Our mobile conversion lifted materially within the first month post-launch.",
      name: "Elena Marchetti",
      role: "Founder",
      company: "Maison Orta",
    },
    faqs: [
      {
        q: "Do you only design, or do you build in Shopify too?",
        a: "We deliver production-ready themes or partner with your dev team. Most clients choose end-to-end: design through Liquid implementation and QA.",
      },
      {
        q: "Can you match our existing brand guidelines?",
        a: "Yes. We work from your brand book, motion rules, and accessibility standards — extending them into commerce-specific patterns.",
      },
      {
        q: "How do you handle large catalogs?",
        a: "We design filter UX, collection templates, and search-friendly layouts that stay fast with thousands of SKUs.",
      },
      {
        q: "What if we need Shopify Plus features?",
        a: "We design for Plus workflows — B2B portals, expansion stores, and checkout extensibility — without compromising the brand layer.",
      },
      {
        q: "What’s required from our team?",
        a: "A dedicated stakeholder for approvals, product photography direction, and timely copy. We run workshops so nothing is guessed late.",
      },
    ],
    finalCtaEyebrow: "Ready when you are",
    finalCtaTitle: "Let’s Build Your Shopify Store",
    finalCtaBody: "Book a strategy call — we’ll review your goals, timeline, and the fastest path to a storefront that sells like your brand deserves.",
  },
  {
    slug: "theme-customization",
    shortLabel: "Theme Customization",
    listEyebrow: "Extend without breaking",
    fullTitle: "Shopify Theme Customization Service",
    heroKicker: "OS 2.0 native",
    heroTitle: "Theme customization that preserves upgrade paths.",
    heroSubtitle:
      "We extend premium Shopify themes with custom sections, metafields, and integrations — clean Liquid, no brittle hacks, no fork you cannot maintain.",
    painIntro:
      "Off-the-shelf themes get you 80% there — then your brand stalls on the last 20%. We customize the right foundation so you keep merchant-friendly editing and stay aligned with Shopify’s roadmap.",
    benefits: [
      "Custom sections & blocks that feel native to the theme editor — your team ships campaigns without tickets.",
      "Metafield-driven PDPs, compare modules, and storytelling components built for scale.",
      "Third-party app styling and placement so extensions look intentional, not bolted on.",
      "Performance guardrails: we profile before/after and refuse changes that tank Core Web Vitals.",
    ],
    processPreview:
      "Code audit, scoped backlog, component build, theme-check clean QA, and documented handoff — so future you still understands the codebase.",
    heroImage:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&h=900&fit=crop&q=82",
    whatWeDoTitle: "What we do",
    whatWeDoLead:
      "We treat your theme like product software: versioned changes, reusable snippets, and naming conventions your developers will thank you for.",
    whatWeDoBody:
      "From bespoke landing templates to subscription widgets and internationalized content, we implement with OS 2.0 patterns — JSON templates, app blocks where appropriate, and schema that keeps the editor approachable for merchandisers.",
    included: {
      turnaround: "Small customizations: 1–3 weeks. Multi-template builds: 4–8 weeks depending on QA surface area.",
      tools: "Shopify CLI, Theme Check, Git, Lighthouse, optional Storybook for section previews.",
      groups: [
        {
          title: "Deliverables",
          items: [
            "Technical discovery & diff review against parent theme",
            "Custom Liquid, CSS, and JS scoped to sections",
            "Metafield definitions & storefront filtering patterns",
            "Changelog + rollback notes for each release",
          ],
        },
        {
          title: "Platforms",
          items: ["Shopify OS 2.0 themes", "Hydrogen references on request", "ReCharge, Klaviyo, reviews stacks (common pairings)"],
        },
      ],
    },
    processSteps: processStepsDefault,
    results: [
      { title: "Conversion optimization", body: "Section-level tests and clearer PDP modules lift engagement without a full redesign." },
      { title: "Premium storefront", body: "Custom art direction inside trusted theme architecture — polish without platform risk." },
      { title: "Higher speed", body: "Lazy media, critical CSS discipline, and lean JS keep scores healthy after customization." },
      { title: "Better trust", body: "Returns, warranties, and UGC blocks match your brand voice and reduce support load." },
      { title: "Mobile optimization", body: "Touch targets and sticky buy boxes tuned for thumb-first checkout journeys." },
      { title: "ROI discipline", body: "We prioritize backlog items by revenue impact — not vanity features that decay in six months." },
    ],
    testimonial: {
      quote:
        "Finally a team that could extend our theme without forking us into maintenance hell. Their documentation is better than most agencies we’ve hired.",
      name: "James Okonkwo",
      role: "Head of Engineering",
      company: "Northline Supply",
    },
    faqs: [
      {
        q: "Will customizations break theme updates?",
        a: "We isolate changes in child-friendly patterns and document parent theme version compatibility. Major upgrades get a scoped retest quote.",
      },
      {
        q: "Can you work with our in-house developers?",
        a: "Yes — we ship PR-style handoffs, README notes, and pairing sessions so your team owns the merge confidently.",
      },
      {
        q: "Do you customize third-party apps?",
        a: "We style and position app blocks; deeper app logic stays with the vendor — we integrate at the theme boundary.",
      },
      {
        q: "How do you price customization?",
        a: "Fixed-scope phases after audit — you always know what ships in each milestone.",
      },
    ],
    finalCtaEyebrow: "Scope your build",
    finalCtaTitle: "Let’s Build Your Shopify Store",
    finalCtaBody: "Send your theme link and wishlist — we’ll return a prioritized plan with timelines and tradeoffs spelled out clearly.",
  },
  {
    slug: "store-setup",
    shortLabel: "Store Setup",
    listEyebrow: "Launch-ready",
    fullTitle: "Shopify Store Setup Service",
    heroKicker: "Zero-drama go-live",
    heroTitle: "Shopify store setup from blank canvas to confident launch.",
    heroSubtitle:
      "Markets, taxes, shipping, payments, policies, and catalog structure — orchestrated so your first sale is boring (in the best way).",
    painIntro:
      "Launch delays usually aren’t design — they’re configuration debt, messy data, and unknown unknowns in checkout. We run a disciplined setup program so your team focuses on product while we harden the rails.",
    benefits: [
      "Store architecture: collections, navigation, tagging strategy, and SEO-friendly URL patterns from day one.",
      "Markets & tax sanity: regions, duties messaging, and payment localization aligned with your fulfillment model.",
      "Checkout trust: policies, contact flows, transactional email alignment, and post-purchase tracking basics.",
      "Operational readiness: staff accounts, permissions, and simple SOPs so support isn’t guessing on day two.",
    ],
    processPreview:
      "Kickoff checklist, data migration plan, configuration sprints, UAT scripts, and launch-window war room — then a clean handoff.",
    heroImage:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&h=900&fit=crop&q=82",
    whatWeDoTitle: "What we do",
    whatWeDoLead:
      "We stand up Shopify as a revenue-ready channel — not a sandbox. That means correct fundamentals: shipping profiles that match reality, inventory locations that reconcile, and analytics that actually fire.",
    whatWeDoBody:
      "Ideal for brands migrating from WooCommerce / Magento / custom stacks, or new ventures that want enterprise hygiene without enterprise bloat. We coordinate with your 3PL, ERP connector, and marketing stack so launch week isn’t whack-a-mole.",
    included: {
      turnaround: "Standard setups: 3–6 weeks. Migrations with data cleansing: 6–12+ depending on SKU and history depth.",
      tools: "Shopify admin, Matrixify / import scripts, Search Console, GA4, optional ERP consult partners.",
      groups: [
        {
          title: "Deliverables",
          items: [
            "Store settings audit & configuration workbook",
            "Collection + navigation IA aligned to merchandising",
            "Shipping, tax, and markets configuration",
            "Launch QA checklist + rollback plan",
          ],
        },
        {
          title: "Platforms",
          items: ["Shopify / Plus", "Global-e, Tax services, common 3PL integrations (scoped per stack)"],
        },
      ],
    },
    processSteps: processStepsDefault,
    results: [
      { title: "Premium storefront", body: "Launch with a polished baseline theme configured — ready for design upgrades later without rework." },
      { title: "Better UX", body: "Navigation and collection logic that match how shoppers search — fewer dead ends, fewer tickets." },
      { title: "Higher speed", body: "Image pipeline, font loading, and app discipline established before traffic hits." },
      { title: "Trust", body: "Policies, contact paths, and order communications that feel intentional — not default boilerplate." },
      { title: "Conversion optimization", body: "Checkout instrumentation and trust badges placed where they statistically help — not everywhere." },
      { title: "Mobile optimization", body: "Admin-tested mobile flows for your highest-traffic templates before you invite the world." },
    ],
    testimonial: {
      quote:
        "They caught shipping edge cases we didn’t know we had. Launch weekend was quieter than our last Black Friday on the old platform.",
      name: "Priya Nandakumar",
      role: "COO",
      company: "Veldt Athletics",
    },
    faqs: [
      {
        q: "Do you migrate product data?",
        a: "Yes — we plan imports, metafield mapping, redirects, and SEO preservation. Complex ERP syncs may involve partner specialists we coordinate with.",
      },
      {
        q: "Can you train our team?",
        a: "Live walkthroughs plus Loom library on catalog ops, discounts, and fulfillment exceptions.",
      },
      {
        q: "What about subscriptions or pre-orders?",
        a: "We configure supported patterns and validate app choices against your fulfillment constraints.",
      },
      {
        q: "Do you handle DNS and domain cutover?",
        a: "We provide a cutover runbook and can execute alongside your IT — timing matters for zero-downtime moves.",
      },
      {
        q: "What if we’re Shopify Plus?",
        a: "We enable Plus-only workflows — checkout branding, scripts governance, and organization-level settings where needed.",
      },
    ],
    finalCtaEyebrow: "Plan your launch",
    finalCtaTitle: "Let’s Build Your Shopify Store",
    finalCtaBody: "Tell us your target date and current stack — we’ll respond with a phased plan and what “ready” actually means.",
  },
  {
    slug: "performance",
    shortLabel: "Speed & Performance",
    listEyebrow: "Core Web Vitals",
    fullTitle: "Shopify Speed & Performance Optimization Service",
    heroKicker: "Measured, not guessed",
    heroTitle: "Performance optimization that protects revenue and SEO.",
    heroSubtitle:
      "We profile real templates with your apps and catalog weight — then ship prioritized fixes that move LCP, INP, and CLS without sacrificing brand.",
    painIntro:
      "Slow stores tax every channel: paid social gets more expensive, organic slips, and mobile shoppers bounce before they ever see your product story. We treat speed as a product surface — benchmarked, sequenced, and verified after every change.",
    benefits: [
      "Field-tested audits: Lighthouse + WebPageTest + real device passes on your worst-case PDPs.",
      "Image & video pipeline: responsive srcsets, lazy boundaries, and hero discipline that designers still love.",
      "JavaScript diet: defer, split, and remove redundant app payloads; negotiate with vendors when needed.",
      "Ongoing guardrails: performance budgets in CI and launch checklists so regressions don’t creep back.",
    ],
    processPreview:
      "Baseline capture, bottleneck map, prioritized fix list, implementation sprints, and post-deploy verification — with before/after reporting leadership can read.",
    heroImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400&h=900&fit=crop&q=82",
    whatWeDoTitle: "What we do",
    whatWeDoLead:
      "We connect lab metrics to business outcomes: where milliseconds correlate with bounce, where INP hurts add-to-cart, and where SEO crawlers see your content too late.",
    whatWeDoBody:
      "Optimizations span Liquid structure, CSS delivery, font strategy, third-party scripts, and CDN/cache behavior. For Plus merchants, we also review checkout extensibility impact — because the fastest storefront still fails if checkout stutters.",
    included: {
      turnaround: "Audit + quick wins: 1–2 weeks. Deep remediation across templates: 3–6+ weeks depending on app stack entanglement.",
      tools: "Chrome DevTools, Shopify Theme Inspector, WebPageTest, SpeedCurve / CrUX where available, Theme Check.",
      groups: [
        {
          title: "Deliverables",
          items: [
            "Performance audit deck with annotated filmstrips",
            "Prioritized backlog (impact × effort)",
            "Implemented theme changes with PR notes",
            "Before/after lab + field summary for stakeholders",
          ],
        },
        {
          title: "Platforms",
          items: ["Shopify Online Store", "Hydrogen performance consults (scoped)", "Headless CDN patterns"],
        },
      ],
    },
    processSteps: processStepsDefault,
    results: [
      { title: "Higher speed", body: "Meaningful LCP/INP improvements on PDP and collection templates under real app load." },
      { title: "SEO resilience", body: "Crawl budget and render timing improve when bots hit lighter, clearer HTML sooner." },
      { title: "Conversion optimization", body: "Faster first interaction correlates with higher engagement — especially on cold paid traffic." },
      { title: "Mobile optimization", body: "Low-end device passes so international and commuter traffic still converts." },
      { title: "Trust", body: "A fast store reads as well-run — especially for premium price points and first-time visitors." },
      { title: "Better UX", body: "Perceived performance matters: skeleton states, progressive disclosure, and reduced layout shift polish the journey." },
    ],
    testimonial: {
      quote:
        "They found script bloat we’d accepted as ‘normal.’ INP dropped hard and our paid landing bounce finally matched our brand quality.",
      name: "Marcus Lee",
      role: "Growth Lead",
      company: "Cinder & Co.",
    },
    faqs: [
      {
        q: "Can you guarantee Core Web Vitals passing?",
        a: "We guarantee a rigorous methodology and measurable improvement against your baseline. Pass/fail also depends on third-party scripts outside our control — we document those tradeoffs clearly.",
      },
      {
        q: "Will this hurt our apps?",
        a: "We optimize loading order and footprint first. If an app is the bottleneck, we provide vendor-ready evidence and alternatives.",
      },
      {
        q: "Do you optimize checkout?",
        a: "On Plus we review extensibility; on standard checkout we focus on what Shopify allows — pre-checkout UX is often the bigger win anyway.",
      },
      {
        q: "How do you prevent regressions?",
        a: "Performance budgets, PR review rules, and quarterly health checks — optional retainer.",
      },
    ],
    finalCtaEyebrow: "Benchmark your store",
    finalCtaTitle: "Let’s Build Your Shopify Store",
    finalCtaBody: "Share your storefront URL and heaviest traffic templates — we’ll return a prioritized diagnosis within days, not weeks.",
  },
  {
    slug: "support-maintenance",
    shortLabel: "Support & Maintenance",
    listEyebrow: "Always-on",
    fullTitle: "Shopify Support & Maintenance Service",
    heroKicker: "Partner, not ticket queue",
    heroTitle: "Support & maintenance for stores that cannot go dark.",
    heroSubtitle:
      "Proactive monitoring, theme hygiene, campaign launches, and incident response — with senior Shopify engineers who understand your stack.",
    painIntro:
      "Peak season is not the time to discover nobody owns your theme. We provide structured retainers: SLAs, office hours, and a backlog rhythm so improvements ship continuously instead of accumulating as “someday tech debt.”",
    benefits: [
      "Incident response: checkout issues, app conflicts, and theme regressions triaged with clear communication.",
      "Monthly hygiene: dependency/app updates, broken link scans, and performance spot checks.",
      "Campaign support: landing sections, promo bars, and A/B-ready modules shipped on deadline.",
      "Roadmap partnership: quarterly planning that balances brand, conversion, and platform changes.",
    ],
    processPreview:
      "Onboarding audit, runbook creation, Slack / email channel, monthly cadence calls, and reporting your finance team can budget against.",
    heroImage:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1400&h=900&fit=crop&q=82",
    whatWeDoTitle: "What we do",
    whatWeDoLead:
      "We operate as an extension of your team — documenting decisions, versioning releases, and keeping Shopify’s evolving platform from surprising you.",
    whatWeDoBody:
      "Retainers include a pool of hours for fixes and enhancements, plus optional dedicated windows for launches. We coordinate with your agencies, freelancers, and internal devs so ownership is never ambiguous when something breaks at 10pm.",
    included: {
      turnaround: "Onboarding: 1–2 weeks. Ongoing: rolling monthly cycles with agreed SLAs for P1/P2 issues.",
      tools: "Shopify admin, Git, CI where available, status page templates, incident retrospectives.",
      groups: [
        {
          title: "Deliverables",
          items: [
            "Runbooks for launch, rollback, and common app failures",
            "Monthly report: shipped changes, risks spotted, next-quarter recommendations",
            "Office hours for merchandising + dev questions",
            "Access to senior Shopify engineers (not a revolving door)",
          ],
        },
        {
          title: "Platforms",
          items: ["Shopify / Plus", "Common app stacks (reviews, subscriptions, search)", "ERP edge cases via partner network"],
        },
      ],
    },
    processSteps: processStepsDefault,
    results: [
      { title: "Trust", body: "Predictable response times and transparent updates — leadership sleeps better during BFCM." },
      { title: "Better UX", body: "Small friction fixes compound: size charts, filters, and PDP clarity improved month over month." },
      { title: "Conversion optimization", body: "Rapid iteration on tests and merchandising requests without waiting for a net-new project quote." },
      { title: "Higher speed", body: "Ongoing performance watch catches app bloat before it becomes an SEO crisis." },
      { title: "Premium storefront", body: "Seasonal refreshes and editorial modules stay on-brand because we already know your system." },
      { title: "Mobile optimization", body: "Device passes after OS updates and app changes — not once a year when someone complains." },
    ],
    testimonial: {
      quote:
        "Having a team that actually remembers our theme architecture saved us during a checkout incident. They were calm, fast, and honest.",
      name: "Sofia Andersson",
      role: "Director of Ecommerce",
      company: "Fjord Home",
    },
    faqs: [
      {
        q: "What SLAs do you offer?",
        a: "Tiered by retainer — P1 triage windows are defined in writing. Exact numbers depend on coverage hours and stack complexity.",
      },
      {
        q: "Can we roll unused hours?",
        a: "Typically a capped rollover month-to-month — we’ll align in the SOW so finance has clarity.",
      },
      {
        q: "Do you support Plus-only features?",
        a: "Yes — scripts, checkout, organization settings, and B2B workflows are in scope for appropriate retainers.",
      },
      {
        q: "What if we need a big project mid-retainer?",
        a: "We carve fixed-scope projects alongside the retainer so roadmap bets don’t starve maintenance.",
      },
      {
        q: "How do we cancel?",
        a: "30-day notice standard — with full documentation handoff so the next team isn’t starting blind.",
      },
    ],
    finalCtaEyebrow: "Protect uptime",
    finalCtaTitle: "Let’s Build Your Shopify Store",
    finalCtaBody: "Tell us your peak dates and current pain points — we’ll propose a retainer tier that matches real risk, not generic hours.",
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getAllServiceSlugs() {
  return SERVICES.map((s) => s.slug);
}
