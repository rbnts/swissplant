import type { Handle } from "@sveltejs/kit/hooks";

export const handle: Handle = async ({ event, resolve }) =>
  await resolve(event, {
    preload: ({ type }) => type !== "asset",
    transformPageChunk: ({ html }) =>
      html.replace("%lang%", () => event.params.lang ?? "de")
  });
