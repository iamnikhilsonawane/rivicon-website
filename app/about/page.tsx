import type { Metadata } from "next";
import { Factory, Award, Users, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { company } from "@/lib/company";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rivicon Medpack Solutions — ISO 9001:2015 & ISO 13485:2016 certified manufacturer, supplier and exporter of sterile medical consumables from GIDC Vapi, Gujarat, India.",
};

const timeline = [
  {
    year: "2024",
    title: "Founded in Vapi, Gujarat",
    desc: "Rivicon Medpack Solutions established its manufacturing unit at GIDC, Vapi — one of India's key industrial corridors.",
  },
  {
    year: "2024",
    title: "ISO 9001:2015 Certified",
    desc: "Achieved ISO 9001:2015 certification for our Quality Management System — establishing a foundation of documented, audited quality.",
  },
  {
    year: "2024",
    title: "ISO 13485:2016 Certified",
    desc: "Received ISO 13485:2016 — the international standard specifically for medical device quality management systems.",
  },
  {
    year: "2025",
    title: "First Product Lines Launched",
    desc: "Commercially launched Swab R (Sterile Alcohol Prep Pad) and Riviprick (Blood Lancet) — beginning supply to Indian healthcare providers.",
  },
];

const values = [
  { icon: <ShieldCheck size={24} />, title: "Patient Safety First", desc: "Every decision we make is anchored in patient safety. No compromises on sterility, quality, or traceability." },
  { icon: <Award size={24} />, title: "International Standards", desc: "We hold ourselves to ISO 13485:2016 — the same quality standard demanded by global regulators." },
  { icon: <Factory size={24} />, title: "Indian Manufacturing", desc: "Proudly Made in India. We believe world-class healthcare products can and should be manufactured here." },
  { icon: <Users size={24} />, title: "Long-Term Partnerships", desc: "We work as a dependable supply partner — not just a vendor — for hospitals, distributors, and healthcare networks." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container-padded">
          <AnimateOnScroll>
            <div className="max-w-3xl">
              <div className="section-label">
                <Factory size={14} /> Our Story
              </div>
              <h1 className="section-heading">
                About{" "}
                <span className="text-brand-orange">Rivicon</span>
              </h1>
              <p className="section-subheading">
                We are an ISO 9001:2015 &amp; ISO 13485:2016 certified manufacturer, supplier and exporter
                of sterile, single-use medical consumables — built with a single purpose: to deliver
                consistent quality and dependable supply to healthcare providers across India and beyond.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-py bg-white dark:bg-gray-950">
        <div className="container-padded">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimateOnScroll direction="left">
              <div className="section-label">Our Mission</div>
              <h2 className="section-heading mb-4">
                Accessible Quality,{" "}
                <span className="text-brand-orange">At Scale</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                Rivicon Medpack Solutions exists to make internationally certified medical
                consumables accessible across India — without compromising on sterility,
                precision, or reliability.
              </p>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                We are building the infrastructure, certifications, and supplier relationships
                today so we can be a dependable long-term partner to India's growing healthcare
                system tomorrow.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right">
              <div className="section-label">Our Vision</div>
              <h2 className="section-heading mb-4">
                A Trusted Name in{" "}
                <span className="text-brand-orange">Indian Healthcare</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                To become one of India's most trusted manufacturers of disposable medical
                devices — known for consistent quality, transparent operations, and
                a product portfolio that grows with the needs of the market.
              </p>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-orange-muted dark:bg-brand-orange/10 border border-brand-orange/20">
                <MapPin size={18} className="text-brand-orange mt-0.5 shrink-0" />
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Manufactured at:</span>{" "}
                  {company.address.line1}, {company.address.line2},{" "}
                  {company.address.city}, {company.address.state} – {company.address.pin}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-py bg-gray-50 dark:bg-gray-900">
        <div className="container-padded">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Our Values</div>
              <h2 className="section-heading">
                What Guides{" "}
                <span className="text-brand-orange">Everything We Do</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 0.1}>
                <div className="card p-6 h-full flex flex-col gap-4 group hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange-muted dark:bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                    {v.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{v.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-py bg-white dark:bg-gray-950">
        <div className="container-padded max-w-3xl">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <div className="section-label justify-center">Our Journey</div>
              <h2 className="section-heading">
                Milestones{" "}
                <span className="text-brand-orange">So Far</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-orange via-brand-orange/30 to-transparent" aria-hidden="true" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.title} delay={i * 0.1}>
                  <div className="flex gap-8 pl-16 relative">
                    {/* Dot */}
                    <div className="absolute left-0 top-0.5 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-orange">
                      {item.year.slice(2)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-brand-orange mb-1">{item.year}</div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
