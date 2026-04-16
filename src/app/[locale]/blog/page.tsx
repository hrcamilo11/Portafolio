import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { paginate, normalizePage } from "@/lib/pagination";
import { ChevronRight } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return {
    title: "Blog",
    description: isEn ? "Thoughts on software development, life, and more." : "Reflexiones sobre desarrollo de software, vida y más.",
    openGraph: {
      title: "Blog",
      description: isEn ? "Thoughts on software development, life, and more." : "Reflexiones sobre desarrollo de software, vida y más.",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog",
      description: isEn ? "Thoughts on software development, life, and more." : "Reflexiones sobre desarrollo de software, vida y más.",
    },
  };
}

const PAGE_SIZE = 5;
const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage({
  searchParams,
  params,
}: {
  searchParams: Promise<{ page?: string }>;
  params: Promise<{ locale: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const navT = await getTranslations("Navbar");

  const posts = allPosts.filter((post) => post.locale === locale);
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  const totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE);
  const currentPage = normalizePage(pageParam, totalPages);
  const { items: paginatedPosts, pagination } = paginate(sortedPosts, {
    page: currentPage,
    pageSize: PAGE_SIZE,
  });

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {navT("blog")} <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">{sortedPosts.length} posts</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8 text-pretty">
          {t("description")}
        </p>
      </BlurFade>

      {paginatedPosts.length > 0 ? (
        <>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {paginatedPosts.map((post, id) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                    <Link
                      href={`/blog/${slug}`}
                      className="group flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    >
                      <div className="aspect-[1.6/1] w-full overflow-hidden bg-muted/40 relative">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-muted to-primary/5 flex items-center justify-center">
                            <span className="text-muted-foreground/30 font-medium tracking-widest uppercase text-[10px]">
                              {post.locale === "es" ? "Sin Imagen" : "No Image"}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <p className="text-[13px] text-muted-foreground/70 mb-3 flex items-center gap-2 font-medium">
                          <span className="text-foreground/80 font-semibold">{post.locale === "es" ? "Artículo" : "Article"}</span>
                          <span>&bull;</span>
                          <span>{post.publishedAt}</span>
                        </p>
                        <h3 className="text-xl sm:text-[22px] font-bold tracking-tight mb-3 line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground/90 line-clamp-3 text-pretty leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </BlurFade>

          {/* Pagination Controls */}
          {pagination.totalPages > 1 && (
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="flex gap-3 flex-row items-center justify-between mt-8">
                <div className="text-sm text-muted-foreground">
                  {t("pagination", {
                    page: pagination.page,
                    total: pagination.totalPages,
                  })}
                </div>
                <div className="flex gap-2 sm:justify-end">
                  {pagination.hasPreviousPage ? (
                    <Link
                      href={`/blog?page=${pagination.page - 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {t("previous")}
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      {t("previous")}
                    </span>
                  )}
                  {pagination.hasNextPage ? (
                    <Link
                      href={`/blog?page=${pagination.page + 1}`}
                      className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg hover:bg-accent/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      {t("next")}
                    </Link>
                  ) : (
                    <span className="h-8 w-fit px-2 flex items-center justify-center text-sm border border-border rounded-lg opacity-50 cursor-not-allowed">
                      {t("next")}
                    </span>
                  )}
                </div>
              </div>
            </BlurFade>
          )}
        </>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center py-12 px-4 border border-border rounded-xl">
            <p className="text-muted-foreground text-center">
              {t("empty")}
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
