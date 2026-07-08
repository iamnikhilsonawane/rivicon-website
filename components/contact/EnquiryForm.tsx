"use client";
import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { products } from "@/lib/products";

type Status = "idle" | "loading" | "success" | "error";

export default function EnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const e: Record<string, string> = {};
    if (!data.get("name")) e.name = "Name is required.";
    if (!data.get("email") || !/\S+@\S+\.\S+/.test(String(data.get("email"))))
      e.email = "A valid email is required.";
    if (!data.get("phone") || String(data.get("phone")).replace(/\D/, "").length < 10)
      e.phone = "A valid 10-digit phone number is required.";
    if (!data.get("message")) e.message = "Please describe your requirement.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/xjgqqvyv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card p-10 flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Enquiry Sent!</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
          Thank you for reaching out to Rivicon Medpack Solutions. We'll get back to you
          within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary text-sm mt-2"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="card p-8">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Send an Enquiry</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Fill in the form below and we'll respond within one business day.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {/* Name */}
          <Field id="name" label="Full Name" required error={errors.name}>
            <input
              id="name" name="name" type="text" autoComplete="name"
              placeholder="Your full name"
              className={inputClass(!!errors.name)}
            />
          </Field>

          {/* Company */}
          <Field id="company" label="Organisation / Company">
            <input
              id="company" name="company" type="text" autoComplete="organization"
              placeholder="Hospital, clinic, distributor…"
              className={inputClass(false)}
            />
          </Field>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Email */}
          <Field id="email" label="Email Address" required error={errors.email}>
            <input
              id="email" name="email" type="email" autoComplete="email"
              placeholder="you@company.com"
              className={inputClass(!!errors.email)}
            />
          </Field>

          {/* Phone */}
          <Field id="phone" label="Phone Number" required error={errors.phone}>
            <input
              id="phone" name="phone" type="tel" autoComplete="tel"
              placeholder="+91 9XXXXXXXXX"
              className={inputClass(!!errors.phone)}
            />
          </Field>
        </div>

        {/* Product interest */}
        <Field id="product" label="Product of Interest">
          <select id="product" name="product" className={inputClass(false)}>
            <option value="">— Select a product (optional) —</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.brandName} — {p.name}
              </option>
            ))}
            <option value="multiple">Multiple Products</option>
            <option value="other">Other / General Enquiry</option>
          </select>
        </Field>

        {/* Message */}
        <Field id="message" label="Your Requirement" required error={errors.message}>
          <textarea
            id="message" name="message" rows={5}
            placeholder="Describe your requirement — quantities, delivery location, product specifications, or any questions…"
            className={inputClass(!!errors.message) + " resize-none"}
          />
        </Field>

        {/* GSTIN (optional, B2B) */}
        <Field id="gstin" label="Your GSTIN (optional)">
          <input
            id="gstin" name="gstin" type="text"
            placeholder="For GST invoice — 15-digit GSTIN"
            className={inputClass(false)}
            maxLength={15}
          />
        </Field>

        {status === "error" && (
          <p className="text-sm text-red-500 bg-red-50 dark:bg-red-950/30 px-4 py-3 rounded-lg">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full justify-center py-3.5"
        >
          {status === "loading" ? (
            <><Loader2 size={16} className="animate-spin" /> Sending…</>
          ) : (
            <><Send size={16} /> Send Enquiry</>
          )}
        </button>

        <p className="text-xs text-center text-gray-400">
          By submitting, you agree that we may contact you regarding your enquiry.
          We do not share your information with third parties.
        </p>
      </form>
    </div>
  );
}

function Field({
  id, label, required, error, children,
}: {
  id: string; label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}{required && <span className="text-brand-orange ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    "w-full px-4 py-3 rounded-xl border text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-900",
    "placeholder:text-gray-400 dark:placeholder:text-gray-600",
    "transition-colors duration-150 outline-none",
    "focus:ring-2 focus:ring-brand-orange focus:border-brand-orange",
    hasError
      ? "border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-950/20"
      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
  ].join(" ");
}
