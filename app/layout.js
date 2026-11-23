import "./globals.css";
import Link from "next/link";
export const metadata = { title: "Bloom Salon – Booking & Membership" };
export default function RootLayout({ children }) {
  return (
    <html lang="en"><body>
      <nav><b>Bloom Salon</b><Link href="/">Home</Link><Link href="/book">Book</Link><Link href="/dashboard">My Membership</Link></nav>
      <main>{children}</main>
    </body></html>
  );
}
