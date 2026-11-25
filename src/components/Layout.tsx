import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

const titles: Record<string, string> = {
  "/": "OFTAC | Organization for Transforming African Communities",
  "/about": "The beekeeping project | OFTAC",
  "/team": "Our team | OFTAC",
  "/shop": "Honey & bee venom | OFTAC",
  "/contact": "Contact | OFTAC",
  "/donate": "Donate | OFTAC",
};

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.title = titles[pathname] ?? "Page not found | OFTAC";
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[60] focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer showCta={pathname !== "/donate"} />
    </div>
  );
};
