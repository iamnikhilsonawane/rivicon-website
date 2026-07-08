import { ShieldCheck, Factory, Award, Truck } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const pillars = [
  {
    icon: <ShieldCheck size={28} />,
    title: "Certified Quality",
    description:
      "ISO 9001:2015 and ISO 13485:2016 certified. Every batch undergoes rigorous quality checks before leaving our facility.",
  },
  {
    icon: <Factory size={28} />,
    title: "In-House Manufacturing",
    description:
      "Fully equipped manufacturing unit in Vapi GIDC with controlled environment production lines ensuring consistent sterility.",
  },
  {
    icon: <Award size={28} />,
    title: "Made in India",
    description:
      "Proudly Indian. We manufacture domestically to keep quality high, costs competitive, and supply chains short.",
  },
  {
    icon: <Truck size={28} />,
    title: "Reliable Supply",
    description:
      "Consistent stock levels and B2B-focused logistics support for hospitals, distributors, and healthcare institutions.",
  },
];

export default function WhyRivicon() {
  return (
    <section className="section-py bg-gray-50 dark:bg-gray-900">
      <div className="container-padded">
        <AnimateOnScroll>
          <div className="text-center mb-14">
            <div className="section-label justify-center">
              Why Choose Us
            </div>
            <h2 className="section-heading">
              Quality You Can{" "}
              <span className="text-brand-orange">Trust</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              We combine rigorous manufacturing standards with the agility of a
              focused, specialist team — delivering reliability at scale.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.1}>
              <div className="card p-6 h-full flex flex-col gap-4 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange-muted dark:bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                  {pillar.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
