"use client";
import { services, stylists, tiers, tierOf, rewards } from "../../lib/data";
import { useStore } from "../../lib/store";

export default function Dashboard() {
  const [s, save, ready] = useStore();
  if (!ready) return <p>Loading…</p>;
  const tier = tierOf(s.earned);
  const next = tiers.find((t) => t.min > s.earned);
  const pct = next ? Math.min(100, ((s.earned - tier.min) / (next.min - tier.min)) * 100) : 100;
  const name = (list, id) => list.find((x) => x.id === id)?.name;
  const redeem = (r) => save({ ...s, points: s.points - r.cost });
  const cancel = (b) => save({ ...s, points: Math.max(0, s.points - b.total), earned: Math.max(0, s.earned - b.total), bookings: s.bookings.filter((x) => x.id !== b.id) });

  return (
    <>
      <h1>My Membership</h1>
      <div className="grid">
        <div className="card"><div className="muted">Tier</div><h2 style={{ margin: 0 }}>{tier.name}</h2>
          <p>{tier.discount}% off all services</p>
          <div className="bar"><i style={{ width: pct + "%" }} /></div>
          <p className="muted">{next ? `${next.min - s.earned} points to ${next.name}` : "Top tier reached 🎉"}</p></div>
        <div className="card"><div className="muted">Points balance</div><h2 style={{ margin: 0 }}>{s.points}</h2>
          <p className="muted">Lifetime: {s.earned}</p></div>
      </div>
      <h2>Rewards</h2>
      <div className="grid">{rewards.map((r) => (
        <div className="card" key={r.id}><h3>{r.name}</h3><p>{r.cost} points</p>
          <button className="btn" disabled={s.points < r.cost} onClick={() => redeem(r)}>Redeem</button></div>))}</div>
      <h2>My bookings</h2>
      {s.bookings.length === 0 && <p className="muted">No bookings yet.</p>}
      {s.bookings.map((b) => (
        <div className="card" key={b.id} style={{ marginBottom: 10 }}>
          <b>{name(services, b.service)}</b> with {name(stylists, b.stylist)}<br />
          {b.date} at {b.time} · ${b.total}{" "}
          <button className="btn ghost" style={{ float: "right" }} onClick={() => cancel(b)}>Cancel</button>
        </div>))}
    </>
  );
}
