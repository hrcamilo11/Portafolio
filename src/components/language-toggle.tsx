"use client";

import { createElement } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export function LanguageToggle({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const nextLocale = locale === "es" ? "en" : "es";
  const flag = locale === "es" ? "🇪🇸" : "🇺🇸";

  const onLanguageChange = () => {
    router.replace(
      // @ts-expect-error -- pathname is fine
      { pathname, params },
      { locale: nextLocale }
    );
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      onClick={onLanguageChange}
      title={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span className="text-lg">{flag}</span>
    </Button>
  );
}
