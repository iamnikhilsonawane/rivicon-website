"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";
import { company } from "@/lib/company";

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-pattern dark:bg-hero-pattern-dark">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#1E3A5F 1px, transparent 1px), linear-gradient(90deg, #1E3A5F 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Orange glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] dark:opacity-[0.09] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #E8521A, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-padded relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="section-label">
              <ShieldCheck size={14} />
              ISO 9001:2015 &amp; ISO 13485:2016 Certified
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-[1.1] mb-6"
            >
              Medical Devices
              <br />
              <span className="text-brand-orange">Made in India.</span>
              <br />
              <span className="text-gray-500 dark:text-gray-400 text-3xl sm:text-4xl xl:text-5xl font-semibold">
                Built for the World.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg">
              {company.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Request a Quote
              </Link>
            </motion.div>

            {/* Trust chips */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {[
                { icon: <Award size={14} />, label: "ISO 13485:2016" },
                { icon: <ShieldCheck size={14} />, label: "Sterile Certified" },
                { icon: <span className="text-xs">🇮🇳</span>, label: "Made in India" },
                { icon: <span className="text-xs">🌐</span>, label: "Export Ready" },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {chip.icon}
                  {chip.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — product showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            {/* Background blob */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-orange-muted to-blue-50 dark:from-brand-orange/5 dark:to-brand-navy/20" aria-hidden="true" />

            {/* Product image container — floating animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-8"
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-card-hover p-6 flex flex-col gap-4">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-1">
                  Featured Products
                </div>

                {/* Product tiles */}
                {[
                  {
                    name: "Swab R",
                    desc: "Sterile Alcohol Prep Pad",
                    tag: "Antiseptic",
                    color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400",
                  },
                  {
                    name: "Riviprick",
                    desc: "Blood Lancet",
                    tag: "Diagnostics",
                    color: "bg-orange-50 dark:bg-orange-950/30 text-brand-orange",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-orange-muted dark:bg-brand-orange/10 flex items-center justify-center">
                      <ShieldCheck size={22} className="text-brand-orange" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 dark:text-white text-sm">{p.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{p.desc}</div>
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${p.color}`}>
                      {p.tag}
                    </span>
                  </div>
                ))}

                {/* ISO badges */}
                <div className="flex gap-2 pt-1">
                  {company.certifications.map((c) => (
                    <div
                      key={c.name}
                      className="flex-1 text-center py-2 rounded-lg bg-brand-navy/5 dark:bg-brand-navy/20 border border-brand-navy/10"
                    >
                      <div className="text-xs font-bold text-brand-navy dark:text-blue-300">{c.name}</div>
                      <div className="text-[10px] text-gray-400">{c.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
