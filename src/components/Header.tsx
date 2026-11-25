import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import logo from "@/assets/logo.png";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const links = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const { pathname } = useLocation();
  // The menu remembers the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (next: boolean | ((v: boolean) => boolean)) =>
    setOpenOn((typeof next === "function" ? next(open) : next) ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <div className="container flex h-14 items-center gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="OFTAC home">
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="type-display text-[1.6rem] leading-none tracking-wide">OFTAC</span>
        </Link>

        <nav aria-label="Main" className="hidden h-full items-stretch md:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `relative flex items-center px-3.5 text-[0.9375rem] font-medium transition-colors ${
                  isActive
                    ? "text-ink after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:bg-honey"
                    : "text-ink-soft hover:text-ink"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-ink-soft transition-colors hover:text-ink lg:block"
          >
            WhatsApp <span className="font-semibold text-ink">{WHATSAPP_DISPLAY}</span>
          </a>
          <Link to="/donate" className="btn h-9 bg-ink px-4 text-paper hover:bg-forest">
            Donate
          </Link>
          <button
            type="button"
            className="btn h-9 border border-ink/25 px-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-ink/10 bg-paper md:hidden">
          <nav aria-label="Mobile" className="container py-2">
            {[{ name: "Home", href: "/" }, ...links].map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end
                className={({ isActive }) =>
                  `flex items-center justify-between border-b border-ink/10 py-3.5 text-lg font-medium ${
                    isActive ? "text-ink" : "text-ink-soft"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="h-2 w-2 bg-honey" aria-hidden="true" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="container grid gap-1 pb-5 pt-3 text-sm">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="py-1">
              WhatsApp <span className="font-semibold">{WHATSAPP_DISPLAY}</span>
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="py-1">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
