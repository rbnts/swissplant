import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) =>
  resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace("<html>", `<html lang="${event.params["lang"] ?? "de"}">`)
  });
