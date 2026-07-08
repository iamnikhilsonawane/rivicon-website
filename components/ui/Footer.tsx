import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { company } from "@/lib/company";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const addr = company.address;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy dark:bg-gray-950 text-white">
      {/* Top section */}
      <div className="container-padded py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/images/logo-icon.png" alt="" width={40} height={40} className="h-10 w-auto brightness-0 invert opacity-90" />
              <div className="leading-none">
                <span className="text-xl font-black tracking-tight text-white block" style={{fontFamily:"var(--font-plus-jakarta)"}}>
                  RIVICON
                </span>
                <span className="text-[10px] font-bold tracking-[0.18em] text-gray-400 uppercase">
                  MEDPACK SOLUTIONS
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              ISO certified medical device manufacturer based in Vapi, Gujarat.
              Delivering sterile, precision-engineered healthcare consumables — Made in India.
            </p>
            <div className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <span
                  key={cert.name}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-gray-300 border border-white/10"
                >
                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-brand-orange transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-brand-orange transition-colors group"
                >
                  <Mail size={15} className="mt-0.5 shrink-0 text-brand-orange" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone.replace(/\s/g,"")}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-brand-orange transition-colors"
                >
                  <Phone size={15} className="shrink-0 text-brand-orange" />
                  Call Us
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-gray-300">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-brand-orange" />
                  <address className="not-italic leading-relaxed">
                    {addr.line1},<br />
                    {addr.line2},<br />
                    {addr.city}, {addr.state} – {addr.pin}
                  </address>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal / Registration */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-5">
              Registration
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <span className="block text-xs text-gray-500 mb-1">GSTIN</span>
                <span className="font-mono text-gray-300 tracking-wide">{company.gst}</span>
              </li>
              <li>
                <span className="block text-xs text-gray-500 mb-1">Firm Type</span>
                <span className="text-gray-300 text-xs">{company.firmType}</span>
              </li>
              <li className="pt-2">
                <a
                  href={`https://wa.me/${company.whatsapp.replace(/[^0-9]/g,"")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-sm font-medium transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.104.549 4.076 1.506 5.789L0 24l6.384-1.493A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.72.87.937-3.628-.234-.373A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-padded py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made in India
            <span className="ml-1">🇮🇳</span>
            &nbsp;·&nbsp; Manufactured at Vapi, Gujarat
          </p>
        </div>
      </div>
    </footer>
  );
}
