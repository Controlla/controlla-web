import Iubenda from "../services/iubenda.js";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  const iubenda = new Iubenda(config.public.iubenda_cookie_key);
  return {
    provide: {
      cookiePolicy: await iubenda.cookiePolicy(),
    },
  };
});
