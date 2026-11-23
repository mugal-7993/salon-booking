"use client";
import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { services, stylists, tierOf } from "../../lib/data";
import { useStore } from "../../lib/store";

function BookForm() {
  const q = useSearchParams();
  const router = useRouter();
  const [s, save] = useStore();
  const [f, setF] = useState({ service: q.get("service") || "", stylist: q.get("stylist") || "", date: "", time: "10:00" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const svc = services.find((x) => x.id === f.service);
  const tier = tierOf(s.earned);
  const total = svc ? Math.round(svc.price * (1 - tier.discount / 100)) : 0;
  const ok = f.service && f.stylist && f.date;
  const today = new Date().toISOString().slice(0, 10);

  const confirm = () => {
    const booking = { id: Date.now(), ...f, total, status: "upcoming" };
    save({ ...s, points: s.points + total, earned: s.earned + total, bookings: [booking, ...s.bookings] });
    router.push("/dashboard");
  };
  return (
    <div className="card" style={{ maxWidth: 480 }}>
      <label>Service</label>
      <select value={f.service} onChange={set("service")}><option value="">Choose…</option>
        {services.map((x) => <option key={x.id} value={x.id}>{x.name} – ${x.price}</option>)}</select>
      <label>Stylist</label>
      <select value={f.stylist} onChange={set("stylist")}><option value="">Choose…</option>
        {stylists.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
      <label>Date</label><input type="date" min={today} value={f.date} onChange={set("date")} />
      <label>Time</label>
      <select value={f.time} onChange={set("time")}>{["10:00","11:30","13:00","14:30","16:00","17:30"].map((t) => <option key={t}>{t}</option>)}</select>
      {svc && <p>{tier.name} member price: <b>${total}</b> {tier.discount > 0 && <span className="muted">({tier.discount}% off)</span>}<br />You will earn <b>{total} points</b>.</p>}
      <button className="btn" disabled={!ok} onClick={confirm}>Confirm booking</button>
    </div>
  );
}
export default function Book() {
  return <><h1>Book an appointment</h1><Suspense><BookForm /></Suspense></>;
}
