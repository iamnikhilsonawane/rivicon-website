"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-900"
            : "bg-transparent"
        )}
      >
        <div className="container-padded">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3" aria-label="Rivicon Medpack Solutions Home">
              <Image
                src="/images/logo-icon.png"
                alt=""
                width={48}
                height={48}
                priority
                className="h-12 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black tracking-tight text-brand-orange" style={{fontFamily:"var(--font-plus-jakarta)"}}>
                  RIVICON
                </span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 dark:text-gray-400 uppercase mt-0.5">
                  MEDPACK SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-brand-orange bg-brand-orange-muted dark:bg-brand-orange/10"
                      : "text-gray-600 dark:text-gray-400 hover:text-brand-orange hover:bg-brand-orange-muted dark:hover:bg-brand-orange/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-brand-orange hover:border-brand-orange transition-colors"
              >
                <Phone size={15} />
                Call
              </a>
              <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                Request a Quote
              </Link>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-brand-orange hover:bg-brand-orange-muted dark:hover:bg-brand-orange/10 transition-all"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 dark:border-gray-900 bg-white dark:bg-gray-950">
            <nav className="container-padded py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    pathname === link.href
                      ? "text-brand-orange bg-brand-orange-muted dark:bg-brand-orange/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-brand-orange hover:bg-brand-orange-muted dark:hover:bg-brand-orange/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 dark:border-gray-900 mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-orange transition-colors"
                >
                  <Phone size={15} />
                  Call Us
                </a>
                <Link href="/contact" className="btn-primary mx-4 justify-center">
                  Request a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer so content doesn't hide under fixed nav */}
      <div className="h-20 lg:h-24" />
    </>
  );
}
