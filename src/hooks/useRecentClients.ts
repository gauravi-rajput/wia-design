import { useCallback, useState } from "react";

const KEY = "wia.recentClients";
const MAX = 5;

function readStored(): string[] {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}

function writeStored(ids: string[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    // ignore — per-viewer convenience only
  }
}

/** Remembers the last few client ids visited, per browser, for quick nav. */
export function useRecentClients() {
  const [ids, setIds] = useState<string[]>(() => readStored());

  const markVisited = useCallback((clientId: string) => {
    setIds((prev) => {
      const next = [clientId, ...prev.filter((id) => id !== clientId)].slice(0, MAX);
      writeStored(next);
      return next;
    });
  }, []);

  return { recentIds: ids, markVisited };
}
