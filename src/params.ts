import { langs } from "#lib/utils/lang.ts";
import { defineParams } from "@sveltejs/kit/params";

export const params = defineParams({
  lang: (value: string) => langs.find(lang => lang === value)
});
