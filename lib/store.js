"use client";
import { useEffect, useState } from "react";
const KEY = "salon-state-v1";
const init = { points: 0, earned: 0, bookings: [] };
export function useStore() {
  const [s, setS] = useState(init);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { const v = localStorage.getItem(KEY); if (v) setS(JSON.parse(v)); } catch {}
    setReady(true);
  }, []);
  const save = (n) => { setS(n); try { localStorage.setItem(KEY, JSON.stringify(n)); } catch {} };
  return [s, save, ready];
}
