import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Navbar from "../components/premium/Navbar.jsx";
import Footer from "../components/premium/Footer.jsx";
import ServiceHero from "../components/services/ServiceHero.jsx";
import ProcessTimeline from "../components/services/ProcessTimeline.jsx";
import FAQAccordion from "../components/services/FAQAccordion.jsx";
import TestimonialCard from "../components/services/TestimonialCard.jsx";
import CTASection from "../components/services/CTASection.jsx";
import StickyServiceCTA from "../components/services/StickyServiceCTA.jsx";
import { getServiceBySlug } from "../data/services.js";

function ResultsGrid({ items }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm transition duration-300 hover:border-neutral-300 hover:shadow-md"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
            <Sparkles className="h-4 w-4" strokeWidth={2} aria-hidden />
          </div>
          <h3 className="mt-4 font-display text-lg tracking-tight text-neutral-950 sm:text-xl">{item.title}</h3>
          <p className="mt-2 font-sans text-sm leading-relaxed text-neutral-600 sm:text-[0.95rem]">{item.body}</p>
        </motion.li>
      ))}
    </ul>
  );
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-[#f5f5f3]"
    >
      <Navbar />
      <main>
        <ServiceHero
          kicker={service.heroKicker}
          title={service.heroTitle}
          subtitle={service.heroSubtitle}
          imageSrc={service.heroImage}
          imageAlt={service.fullTitle}
        />

        {/* What we do */}
        <section className="border-b border-neutral-200/50 bg-[#f5f5f3] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500"
            >
              Pain → solution
            </motion.p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl">
              {service.whatWeDoTitle}
            </h2>
            <p className="mt-6 font-sans text-lg font-medium leading-relaxed text-neutral-800 sm:text-xl">
              {service.whatWeDoLead}
            </p>
            <p className="mt-5 font-sans text-base leading-relaxed text-neutral-600 sm:text-lg">{service.whatWeDoBody}</p>
          </div>
        </section>

        {/* What's included */}
        <section className="border-b border-neutral-200/50 bg-[#f0f0ec] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">Scope</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl">What’s included</h2>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
              {service.included.groups.map((group, gi) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: gi * 0.06 }}
                  className="rounded-3xl border border-neutral-200/90 bg-white p-7 shadow-sm sm:p-8"
                >
                  <h3 className="font-display text-xl text-neutral-950 sm:text-2xl">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3 font-sans text-sm leading-relaxed text-neutral-700 sm:text-base">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700/90" strokeWidth={2} aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 font-sans text-sm leading-relaxed text-neutral-600 sm:grid-cols-2 sm:text-base lg:mt-12">
              <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Turnaround</p>
                <p className="mt-2 text-neutral-800">{service.included.turnaround}</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-white/80 p-6 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Tools & platforms</p>
                <p className="mt-2 text-neutral-800">{service.included.tools}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="border-b border-neutral-200/50 bg-[#f5f5f3] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">How we work</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl">Our process</h2>
            <p className="mt-4 font-sans text-base text-neutral-600 sm:text-lg">
              A repeatable framework — tuned per engagement — so stakeholders always know what happens next.
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-3xl px-5 sm:px-8 lg:px-10">
            <ProcessTimeline steps={service.processSteps} />
          </div>
        </section>

        {/* Results */}
        <section className="border-b border-neutral-200/50 bg-[#f0f0ec] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">Outcomes</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl">
              Results your leadership team can feel
            </h2>
            <p className="mt-4 max-w-2xl font-sans text-base text-neutral-600 sm:text-lg">
              Conversion, UX, trust, and speed — orchestrated so improvements compound instead of conflicting.
            </p>
            <div className="mt-12">
              <ResultsGrid items={service.results} />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-b border-neutral-200/50 bg-[#f5f5f3] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
            <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">
              Client voice
            </p>
            <div className="mt-8">
              <TestimonialCard
                quote={service.testimonial.quote}
                name={service.testimonial.name}
                role={service.testimonial.role}
                company={service.testimonial.company}
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-b border-neutral-200/50 bg-[#f0f0ec] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.26em] text-neutral-500">FAQ</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-neutral-950 sm:text-4xl">Questions, answered</h2>
            <div className="mt-10">
              <FAQAccordion items={service.faqs} />
            </div>
          </div>
        </section>

        <CTASection
          eyebrow={service.finalCtaEyebrow}
          title={service.finalCtaTitle}
          body={service.finalCtaBody}
        />
      </main>
      <Footer />
      <StickyServiceCTA />
    </motion.div>
  );
}
