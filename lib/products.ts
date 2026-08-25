export interface Product {
  id: string;
  name: string;
  brandName: string;
  slug: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  features: string[];
  packSizes: string[];
  sterilization: string;
  storageCondition: string;
  forExternalUse?: boolean;
}

export const products: Product[] = [
  {
    id: "swab-alcohol-prep-pad",
    name: "Sterile Alcohol Prep Pad",
    brandName: "Swab R",
    slug: "swab-alcohol-prep-pad",
    category: "Antiseptics & Wound Care",
    tagline: "Sterile. Reliable. Ready.",
    description:
      "A non-woven sterile pad saturated with 70% v/v Isopropyl Alcohol for effective pre-injection skin antisepsis. Individually sealed for maximum sterility and convenience.",
    image: "/images/swab-product.png",
    specs: [
      { label: "Active Ingredient", value: "70% v/v Isopropyl Alcohol" },
      { label: "Pad Size", value: "65mm × 30mm (approx.)" },
      { label: "Material", value: "Non-woven fabric" },
      { label: "Sterility", value: "Gamma Radiation Sterilized" },
      { label: "Shelf Life", value: "3 Years" },
      { label: "Pack Size", value: "100 Units / box" },
    ],
    features: [
      "Individually foil-sealed for guaranteed sterility",
      "70% IPA formulation — clinically proven antiseptic concentration",
      "Fast-drying, lint-free non-woven pad",
      "Latex-free and skin-friendly",
      "Ideal for pre-injection, capillary blood sampling, and wound prep",
    ],
    packSizes: ["100 Units / box"],
    sterilization: "Gamma Radiation",
    storageCondition: "Store at room temperature, away from direct sunlight",
    forExternalUse: true,
  },
  {
    id: "blood-lancet",
    name: "Blood Lancet",
    brandName: "Riviprick",
    slug: "blood-lancet",
    category: "Diagnostics & Blood Collection",
    tagline: "Precision at Every Prick.",
    description:
      "A sterile, single-use safety blood lancet designed for capillary blood sampling. The twist-off cap activates a retractable tri-bevel needle engineered for minimal pain and maximum sample reliability.",
    image: "/images/lancet-product.png",
    specs: [
      { label: "Needle Type", value: "Tri-bevel, retractable" },
      { label: "Gauge", value: "Available in multiple gauges" },
      { label: "Activation", value: "Twist-off cap" },
      { label: "Sterility", value: "Gamma Radiation Sterilized" },
      { label: "Shelf Life", value: "5 Years" },
      { label: "Pack Size", value: "10 Units / box" },
    ],
    features: [
      "Safety retractable mechanism — single-use only, prevents needle-stick injury",
      "Tri-bevel ultra-sharp needle for near-painless sampling",
      "Consistent penetration depth for reliable sample volume",
      "Colour-coded by gauge for easy identification",
      "Compliant with applicable Indian medical device regulations",
    ],
    packSizes: ["10 Units / box"],
    sterilization: "Gamma Radiation",
    storageCondition: "Store at room temperature in a dry place",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
