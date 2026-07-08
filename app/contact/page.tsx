import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact & Enquiry",
  description:
    "Contact Rivicon Medpack Solutions for product enquiries, bulk orders, or distributor partnerships. Based in Vapi, Gujarat.",
};

const contactItems = [
  {
    icon: <Phone size={20} />,
    label: "Phone / WhatsApp",
    value: "Call or WhatsApp us",
    href: `tel:${company.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: <MapPin size={20} />,
    label: "Address",
    value: `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state} – ${company.address.pin}`,
    href: `https://www.google.com/maps/search/?api=1&query=Rivicon+Medpack+Solutions+Vapi+GIDC`,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 lg:py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container-padded">
          <AnimateOnScroll>
            <div className="section-label">
              <MessageSquare size={14} /> Get in Touch
            </div>
            <h1 className="section-heading max-w-xl">
              Request a Quote or{" "}
              <span className="text-brand-orange">Send an Enquiry</span>
            </h1>
            <p className="section-subheading">
              Whether you're a hospital, distributor, pharmacy, or procurement team —
              we'd love to hear from you. We typically respond within one business day.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main contact section */}
      <section className="section-py bg-white dark:bg-gray-950">
        <div className="container-padded">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left — contact info */}
            <div className="lg:col-span-1 space-y-8">
              <AnimateOnScroll direction="left">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Details
                </h2>

                <div className="space-y-5">
                  {contactItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-orange-muted dark:bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all duration-200">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-brand-orange transition-colors leading-relaxed">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello, I'd like to enquire about your medical products.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors mt-4"
                >
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.549 4.076 1.506 5.789L0 24l6.384-1.493A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.72.87.937-3.628-.234-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">Chat on WhatsApp</div>
                    <div className="text-xs text-gray-500">{company.whatsapp}</div>
                  </div>
                </a>

                {/* GST info */}
                <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">Business Registration</div>
                  <div className="space-y-1.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">GSTIN</span>
                      <span className="font-mono text-gray-900 dark:text-white text-xs tracking-wide">{company.gst}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">State</span>
                      <span className="text-gray-900 dark:text-white text-xs">Gujarat (24)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Firm Type</span>
                      <span className="text-gray-900 dark:text-white text-xs">{company.firmType}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              <AnimateOnScroll direction="right">
                <EnquiryForm />
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
