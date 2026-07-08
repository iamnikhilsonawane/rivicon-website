import type { Metadata } from "next";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Rivicon Medpack Solutions' range of sterile medical consumables — Blood Lancets (Riviprick) and Sterile Alcohol Prep Pads (Swab R). ISO 13485:2016 certified.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container-padded">
          <AnimateOnScroll>
            <div className="section-label">
              <ShieldCheck size={14} /> Our Products
            </div>
            <h1 className="section-heading max-w-2xl">
              Precision Medical{" "}
              <span className="text-brand-orange">Consumables</span>
            </h1>
            <p className="section-subheading">
              ISO certified, EO sterilized, individually sealed — every product built to
              the standards that patient care demands.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products */}
      <section className="section-py bg-white dark:bg-gray-950">
        <div className="container-padded">
          <div className="space-y-20">
            {products.map((product, i) => (
              <AnimateOnScroll key={product.id} delay={0.05}>
                <div
                  id={product.slug}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image panel */}
                  <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-100 dark:border-gray-800 h-80 lg:h-[420px] overflow-hidden group">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
                      />
                    )}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-gray-900 text-brand-orange border border-brand-orange/20 shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-2">
                      {product.brandName}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h2>
                    <p className="text-brand-orange font-medium mb-4">{product.tagline}</p>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-7">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={16} className="text-brand-orange mt-0.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* Specs grid */}
                    <div className="grid grid-cols-2 gap-3 mb-7">
                      {product.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
                        >
                          <div className="text-[11px] text-gray-400 uppercase tracking-wide font-semibold mb-0.5">
                            {spec.label}
                          </div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Storage */}
                    <div className="text-xs text-gray-400 dark:text-gray-500 mb-7 flex items-start gap-2">
                      <span className="font-semibold text-gray-500 dark:text-gray-400 shrink-0">Storage:</span>
                      {product.storageCondition}
                    </div>

                    {product.forExternalUse && (
                      <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-5">
                        ⚠ For External Use Only
                      </p>
                    )}

                    <Link href="/contact" className="btn-primary">
                      Request a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
