"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };

  return (
    <button
      onClick={() => switchLocale(locale === "en" ? "pl" : "en")}
      className="mr-4 text-white p-2 rounded-lg"
    >
      {locale === "en" ? "PL" : "EN"}
    </button>
  );
}
