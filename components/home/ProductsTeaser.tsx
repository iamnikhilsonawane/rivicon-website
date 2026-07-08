import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { products } from "@/lib/products";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function ProductsTeaser() {
  return (
    <section className="section-py bg-white dark:bg-gray-950">
      <div className="container-padded">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <div className="section-label justify-center">
              <ShieldCheck size={14} /> Our Products
            </div>
            <h2 className="section-heading">
              Sterile. Precise.{" "}
              <span className="text-brand-orange">Dependable.</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              Every product we make meets exacting sterility and quality standards — from raw
              material to finished, individually sealed unit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={i * 0.1}>
              <Link
                href={`/products#${product.slug}`}
                className="card group p-0 overflow-hidden flex flex-col h-full hover:-translate-y-1"
              >
                {/* Product image area */}
                <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <ShieldCheck size={48} className="text-brand-orange opacity-60" />
                    </div>
                  )}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-gray-900 text-brand-orange border border-brand-orange/20 shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-1 text-xs font-bold uppercase tracking-widest text-brand-orange">
                    {product.brandName}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Key specs */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.specs.slice(0, 3).map((spec) => (
                      <span
                        key={spec.label}
                        className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700"
                      >
                        <span className="font-medium">{spec.label}:</span> {spec.value}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange group-hover:gap-2.5 transition-all">
                    View Product Details <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.2}>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-secondary">
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
