import { routes } from "$app/manifest";
import { resolve } from "$app/paths";
import { isLangRoute, langs } from "#lib/utils/lang.ts";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = ({ url }) => {
  const pages = routes
    .filter(route => route.page)
    .map(route => route.id)
    .filter(isLangRoute);

  let sitemap = "";

  for (const lang of langs) {
    for (const page of pages) {
      sitemap += `${new URL(resolve(page, { lang }), url).href}\n`;
    }
  }

  return new Response(sitemap);
};

export const prerender = true;
