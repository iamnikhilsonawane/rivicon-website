import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { company } from "@/lib/company";

export default function CTABanner() {
  return (
    <section className="section-py bg-gray-50 dark:bg-gray-900">
      <div className="container-padded">
        <AnimateOnScroll>
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-orange to-brand-orange-dark overflow-hidden p-10 lg:p-16 text-white text-center">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, white 1px, transparent 1px), radial-gradient(circle at 70% 50%, white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-sm font-semibold mb-6">
                <Mail size={14} /> Get in Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Let's build a sterile, certified,<br className="hidden sm:block" /> export-ready partnership.
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Whether you're a hospital, clinic, pharmacy chain, distributor, or international buyer —
                we'd love to discuss your requirements and provide a competitive quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-orange font-bold text-sm hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Request a Quote <ArrowRight size={16} />
                </Link>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/50 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  <Mail size={16} />
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
