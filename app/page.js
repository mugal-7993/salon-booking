import Link from "next/link";
import { services, stylists, tiers } from "../lib/data";
export default function Home() {
  return (
    <>
      <h1>Look good. Feel better. Earn rewards.</h1>
      <p className="muted">Book your stylist, pick a package and earn points on every visit.</p>
      <Link className="btn" href="/book">Book an appointment</Link>
      <h2>Stylists</h2>
      <div className="grid">{stylists.map((s) => (
        <div className="card" key={s.id}>
          <h3>{s.name}</h3><div className="muted">{s.role} · {s.exp} yrs</div>
          <p>{s.bio}</p>{s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
          <p><Link className="btn ghost" href={`/book?stylist=${s.id}`}>Book {s.name.split(" ")[0]}</Link></p>
        </div>))}</div>
      <h2>Service packages</h2>
      <div className="grid">{services.map((s) => (
        <div className="card" key={s.id}>
          <h3>{s.name}</h3><p>{s.desc}</p>
          <b>${s.price}</b> <span className="muted">· {s.mins} min</span>
          <p><Link className="btn ghost" href={`/book?service=${s.id}`}>Select</Link></p>
        </div>))}</div>
      <h2>Membership tiers</h2>
      <div className="grid">{tiers.map((t) => (
        <div className="card" key={t.name}><h3>{t.name}</h3>
          <p>{t.min} lifetime points</p><p><b>{t.discount}% off</b> every service</p></div>))}</div>
      <p className="muted">Earn 1 point per $1 spent. Redeem points for free treatments.</p>
    </>
  );
}
