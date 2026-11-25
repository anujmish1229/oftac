import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  LOCATION,
  PHONE_DISPLAY,
  PHONE_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  email,
  whatsapp,
} from "@/lib/contact";

const channels = [
  { label: "WhatsApp", value: WHATSAPP_DISPLAY, href: WHATSAPP_URL, action: "Open chat", external: true },
  { label: "Phone", value: PHONE_DISPLAY, href: PHONE_URL, action: "Call", external: false },
  { label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, action: "Write", external: false },
  { label: "Facebook", value: "OFTAC on Facebook", href: FACEBOOK_URL, action: "Visit page", external: true },
];

const topics = [
  { title: "Donating", wa: "Hello OFTAC, I'd like to make a donation.", subject: "Donation to OFTAC" },
  { title: "Ordering honey or bee venom", wa: "Hello OFTAC, I'd like to place an order.", subject: "Order enquiry" },
  { title: "Partnering or volunteering", wa: "Hello OFTAC, I'd like to talk about working together.", subject: "Partnership with OFTAC" },
];

const Contact = () => (
  <section className="grid lg:min-h-[calc(100svh-3.5rem)] lg:grid-cols-12">
    {/* Left panel */}
    <div className="bg-forest text-paper lg:col-span-5">
      <div className="container flex h-full flex-col justify-between gap-12 py-14 md:py-20 lg:ml-auto lg:mr-0 lg:max-w-[34rem] lg:pr-12">
        <div>
          <p className="marker mb-5 text-honey-light">Contact</p>
          <h1 className="type-display text-[clamp(3rem,7vw,5.5rem)]">Talk to us</h1>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-paper/80">
            Questions about the project, a donation or an order: message us on WhatsApp, call or
            email.
          </p>
        </div>
        <div>
          <p className="text-sm text-paper/55">Where we work</p>
          <p className="mt-1 text-lg font-semibold">{LOCATION}</p>
        </div>
      </div>
    </div>

    {/* Right panel */}
    <div className="lg:col-span-7">
      <div className="container py-14 md:py-20 lg:ml-0 lg:max-w-[48rem] lg:pl-12">
        <ul className="border-t-2 border-ink">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-ink/15 py-5 transition-colors hover:bg-paper-deep sm:grid-cols-[8rem_1fr_auto]"
              >
                <span className="col-span-2 text-sm text-muted sm:col-span-1">{c.label}</span>
                <span className="text-lg font-semibold [overflow-wrap:anywhere] sm:text-xl">{c.value}</span>
                <span className="text-sm font-semibold underline-offset-4 group-hover:underline">
                  {c.action} →
                </span>
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-14 text-xl font-semibold">What's it about?</h2>
        <p className="mt-1 text-ink-soft">Start a message with the topic already filled in.</p>
        <ul className="mt-5 grid gap-3">
          {topics.map((t) => (
            <li key={t.title} className="flex flex-wrap items-center justify-between gap-3 bg-paper-deep px-5 py-4">
              <span className="font-semibold">{t.title}</span>
              <span className="flex gap-4 text-sm">
                <a href={whatsapp(t.wa)} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  WhatsApp
                </a>
                <a href={email(t.subject)} className="arrow-link">
                  Email
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Contact;
