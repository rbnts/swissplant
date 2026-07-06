import { langs } from "$lib/utils/lang";
import { type RequestHandler, text } from "@sveltejs/kit";

export const GET: RequestHandler = () => {
  const base = "https://swissplant.ch";
  const pages = Object.keys(
    import.meta.glob("../**/+page.svelte", {
      eager: true
    })
  )
    .filter(path => path.startsWith("../[lang=lang]/"))
    .map(path => path
      .replace("../[lang=lang]", "")
      .replace("/+page.svelte", "")
    );

  let sitemap = "";
  for (const lang of langs) {
    for (const page of pages) {
      sitemap += `${base}/${lang}${page}\n`;
    }
  }

  return text(sitemap);
};

export const prerender = true;
