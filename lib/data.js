export const services = [
  { id: "cut", name: "Signature Cut & Style", price: 60, mins: 60, desc: "Consultation, wash, cut and blow-dry." },
  { id: "color", name: "Color & Gloss Package", price: 140, mins: 150, desc: "Full color, toner and gloss treatment." },
  { id: "bridal", name: "Bridal Glam Package", price: 220, mins: 180, desc: "Hair styling, makeup and trial session." },
  { id: "spa", name: "Facial & Scalp Spa", price: 90, mins: 75, desc: "Deep-cleanse facial with scalp massage." },
  { id: "nails", name: "Mani + Pedi Duo", price: 70, mins: 90, desc: "Classic manicure and pedicure." },
];
export const stylists = [
  { id: "ava", name: "Ava Mendes", role: "Senior Colorist", exp: 9, bio: "Balayage and vivid color specialist.", tags: ["Color", "Bridal"] },
  { id: "raj", name: "Raj Patel", role: "Master Stylist", exp: 12, bio: "Precision cuts and modern men's grooming.", tags: ["Cuts", "Styling"] },
  { id: "lena", name: "Lena Ortiz", role: "Skin & Nail Artist", exp: 6, bio: "Facials, scalp care and nail art.", tags: ["Spa", "Nails"] },
];
export const tiers = [
  { name: "Silver", min: 0, discount: 0 },
  { name: "Gold", min: 500, discount: 10 },
  { name: "Platinum", min: 1500, discount: 20 },
];
export const rewards = [
  { id: "r1", name: "Free Deep Conditioning", cost: 150 },
  { id: "r2", name: "Free Blow-Dry", cost: 300 },
  { id: "r3", name: "$50 Service Credit", cost: 600 },
];
export const tierOf = (earned) => [...tiers].reverse().find((t) => earned >= t.min);
