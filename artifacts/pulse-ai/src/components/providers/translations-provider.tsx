import { IntlProvider } from "use-intl";
import { useLocale } from "./locale-provider";
import enMessages from "@/messages/en.json";
import arMessages from "@/messages/ar.json";

const messages = { en: enMessages, ar: arMessages };

export function TranslationsProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  return (
    <IntlProvider locale={locale} messages={messages[locale as keyof typeof messages]}>
      {children}
    </IntlProvider>
  );
}
