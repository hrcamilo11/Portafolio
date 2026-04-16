/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/routing";
import { getResumeData } from "@/data/resume";
import { Timeline, TimelineItem, TimelineConnectItem } from "@/components/timeline";
import { useLocale } from "next-intl";

export default function CTFSection() {
  const locale = useLocale();
  const DATA = getResumeData(locale);
  if (!DATA.ctfs || (DATA.ctfs as any).length === 0) return null;

  return (
    <section id="ctf" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-8 w-full">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">CTF & Ciberseguridad</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {locale === "es" ? "Competencia y Pasión" : "Competition & Passion"}
            </h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              {locale === "es" 
                ? "Como co-fundador de Ch0wn3rs, participo en competencias internacionales de alto nivel, enfrentando retos complejos de explotación y defensa."
                : "As a co-founder of Ch0wn3rs, I participate in high-level international competitions, tackling complex exploitation and defense challenges."
              }
            </p>
          </div>
        </div>
        <Timeline>
          {DATA.ctfs.map((ctf) => (
            <TimelineItem key={ctf.title + ctf.dates} className="w-full flex items-start justify-between gap-10">
              <TimelineConnectItem className="flex items-start justify-center">
                {ctf.image ? (
                  <img
                    src={ctf.image}
                    alt={ctf.title}
                    className="size-12 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
                  />
                ) : (
                  <div className="size-12 bg-card z-10 shrink-0 overflow-hidden p-1 border rounded-full shadow ring-2 ring-border flex-none" />
                )}
              </TimelineConnectItem>
              <div className="flex flex-1 flex-col justify-start gap-2 min-w-0">
                {ctf.dates && (
                  <time className="text-xs text-muted-foreground">{ctf.dates}</time>
                )}
                {ctf.title && (
                  <h3 className="font-semibold leading-none">{ctf.title}</h3>
                )}
                {ctf.location && (
                  <p className="text-sm text-muted-foreground">{ctf.location}</p>
                )}
                {ctf.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed wrap-break-word">
                    {ctf.description}
                  </p>
                )}
                {ctf.links && ctf.links.length > 0 && (
                  <div className="mt-1 flex flex-row flex-wrap items-start gap-2">
                    {ctf.links.map((link, idx) => (
                      <Link
                        href={link.href as any}
                        key={idx}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge className="flex items-center gap-1.5 text-xs bg-primary text-primary-foreground">
                          {link.icon}
                          {link.title}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </section>
  );
}
