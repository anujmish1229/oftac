import { Link } from "react-router";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/contact";

const pages = [
  { name: "Home", href: "/" },
  { name: "The project", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Shop", href: "/shop" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

const colHeading = "marker mb-4 text-paper/50";
const colLink = "block py-1 text-paper/85 transition-colors hover:text-honey-light";

export const Footer = ({ showCta = true }: { showCta?: boolean }) => (
  <footer className="overflow-hidden bg-ink text-paper">
    {showCta && (
      <div className="border-b border-paper/10">
        <div className="container grid gap-8 py-14 md:grid-cols-12 md:items-end md:py-20">
          <h2 className="type-display text-[clamp(2.5rem,6vw,4.75rem)] md:col-span-8">
            Help a family in Kyangwali start their first hive.
          </h2>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link to="/donate" className="btn bg-honey text-ink hover:bg-honey-light">
              Ways to donate
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn border border-paper/30 text-paper hover:border-paper"
            >
              Message us
            </a>
          </div>
        </div>
      </div>
    )}

    <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-12">
      <div className="col-span-2 md:col-span-4">
        <p className="max-w-xs font-serif text-lg leading-snug text-paper/85">
          Organization for Transforming African Communities. Beehives, training and a route to
          market for refugee households.
        </p>
      </div>

      <nav aria-label="Footer" className="md:col-span-2 md:col-start-6">
        <h3 className={colHeading}>Pages</h3>
        {pages.map((p) => (
          <Link key={p.href} to={p.href} className={colLink}>
            {p.name}
          </Link>
        ))}
      </nav>

      <div className="col-span-2 sm:col-span-1 md:col-span-3">
        <h3 className={colHeading}>Talk to us</h3>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={colLink}>
          <span className="text-paper/50">WhatsApp </span>
          {WHATSAPP_DISPLAY}
        </a>
        <a href={PHONE_URL} className={colLink}>
          <span className="text-paper/50">Mobile </span>
          {PHONE_DISPLAY}
        </a>
        <a href={`mailto:${CONTACT_EMAIL}`} className={`${colLink} break-words`}>
          {CONTACT_EMAIL}
        </a>
      </div>

      <div className="col-span-2 sm:col-span-1 md:col-span-2">
        <h3 className={colHeading}>Find us</h3>
        <p className="py-1 text-paper/85">{LOCATION}</p>
        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={colLink}>
          Facebook
        </a>
      </div>
    </div>

    <div className="container">
      <p
        aria-hidden="true"
        className="type-display -mb-[0.2em] select-none text-[min(31vw,30.5rem)] leading-[0.8] text-honey"
      >
        OFTAC
      </p>
    </div>
    <div className="relative bg-ink">
      <div className="container flex flex-col gap-3 border-t border-paper/10 py-5 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} OFTAC. Registered community-based organization in Uganda.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://anujmishra.dev"
            target="_blank"
            rel="noopener"
            className="text-xs text-paper/35 transition-colors hover:text-paper/70"
          >
            Site by Anuj Mishra
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0 })}
            className="text-paper/80 underline-offset-4 hover:text-paper hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </div>
  </footer>
);
