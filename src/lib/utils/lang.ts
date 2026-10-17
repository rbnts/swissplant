import type { RouteId } from "$app/types";

export const langs = ["de", "en"] as const;
export type Lang = (typeof langs)[number];

export type LangRoute = Extract<RouteId, `/[lang=lang]${string}`>;

export const isLangRoute = (id: RouteId | null): id is LangRoute =>
  id?.startsWith("/[lang=lang]") ?? false;
