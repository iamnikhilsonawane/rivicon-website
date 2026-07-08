import { Award, ShieldCheck } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { company } from "@/lib/company";

export default function Certifications() {
  return (
    <section className="section-py bg-white dark:bg-gray-950">
      <div className="container-padded">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <AnimateOnScroll direction="left">
            <div className="section-label">
              <Award size={14} /> Certifications
            </div>
            <h2 className="section-heading mb-4">
              Standards That{" "}
              <span className="text-brand-orange">Define Us</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
              Our manufacturing processes and quality management systems are independently
              audited and certified to international standards — ensuring every product
              we deliver is safe, sterile, and reliable.
            </p>

            <div className="space-y-4">
              {company.certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{cert.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{cert.description}</div>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/50">
                    Certified
                  </span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Right — visual */}
          <AnimateOnScroll direction="right">
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light p-10 text-white">
                <div className="text-sm font-bold uppercase tracking-widest text-brand-orange-light mb-6">
                  Our Commitment
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Every unit we ship meets international sterility and quality standards.
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-8">
                  From raw material procurement to final packaging, our processes are designed
                  around patient safety and product integrity — no exceptions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Quality Management", value: "ISO 9001:2015" },
                    { label: "Medical Devices QMS", value: "ISO 13485:2016" },
                    { label: "Sterilization", value: "EO Sterilized" },
                    { label: "Manufacturing", value: "GIDC, Vapi" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-xl p-4">
                      <div className="text-xs text-gray-400 mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative dot grid */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle, #E8521A 1.5px, transparent 1.5px)",
                  backgroundSize: "12px 12px",
                }}
                aria-hidden="true"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
