import { resolve } from "$app/paths";
import { redirect } from "@sveltejs/kit";

export const load = () => redirect(308, resolve("/[lang=lang]", { lang: "de" }));

export const prerender = true;
