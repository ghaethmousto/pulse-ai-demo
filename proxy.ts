import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Exclude /skeleton/* from locale rewriting — those are skeleton preview
  // routes outside the production [locale]/* tree and must be reachable
  // directly without a locale prefix.
  matcher: ["/((?!api|_next|_vercel|skeleton|.*\\..*).*)"],
};
