export const langs = ["de", "en"] as const;
export type Lang = (typeof langs)[number];

export const isLang = (value: unknown): value is Lang =>
  typeof value === "string" && langs.includes(value);

export const getLang = (value: unknown): Lang => (isLang(value) ? value : "de");
