import { Link } from "react-router";
import booksImage from "@/assets/children-books.jpg";
import groupImage from "@/assets/community-group.jpg";
import { CONTACT_EMAIL, WHATSAPP_DISPLAY, email, whatsapp } from "@/lib/contact";

const figures = [
  { value: "US$1,800", label: "potential yearly income per trained beekeeper's household" },
  { value: "50 kg", label: "of honey a trained beekeeper can produce each year" },
  { value: "4 months", label: "of hands-on beekeeping training" },
  { value: "79", label: "people producing honey as of January 2025" },
];

const steps = [
  {
    title: "Get in touch",
    body: "Message us on WhatsApp or send an email saying you'd like to donate.",
  },
  {
    title: "Receive the details",
    body: "We send you Mobile Money or bank details, or arrange an international transfer.",
  },
  {
    title: "Send your gift",
    body: "Include your name and email address with the transfer so we can send you a receipt.",
  },
];

const Donate = () => (
  <>
    <section className="grid lg:grid-cols-12">
      <div className="bg-honey lg:col-span-6">
        <div className="container py-14 md:py-20 lg:ml-auto lg:mr-0 lg:max-w-[40rem] lg:pr-12">
          <p className="marker mb-5">Donate</p>
          <h1 className="type-display text-[clamp(3rem,7vw,5.75rem)]">
            Give a family the tools to earn.
          </h1>
          <p className="mt-6 max-w-lg font-serif text-lg leading-relaxed">
            Your donation pays for beehives, training and ongoing support, so refugee families in
            Kyangwali can build a livelihood of their own instead of depending on aid.
          </p>
        </div>
      </div>

      <div className="lg:col-span-6">
        <div className="container py-14 md:py-20 lg:ml-0 lg:max-w-[40rem] lg:pl-12">
          <h2 className="text-2xl font-semibold">How to give</h2>
          <ol className="mt-6 border-t-2 border-ink">
            {steps.map((s, i) => (
              <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-b border-ink/15 py-5">
                <span className="type-display text-3xl text-honey-deep">{i + 1}</span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={whatsapp("Hello OFTAC, I'd like to make a donation.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-ink text-paper hover:bg-forest"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a href={email("Donation to OFTAC")} className="btn border border-ink/40 hover:border-ink">
              Email us
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">{CONTACT_EMAIL}</p>
        </div>
      </div>
    </section>

    {/* Figures */}
    <section className="bg-ink text-paper">
      <dl className="container grid grid-cols-2 lg:grid-cols-4">
        {figures.map((f, i) => (
          <div
            key={f.label}
            className={`py-9 pr-4 ${i > 0 ? "lg:border-l lg:border-paper/15 lg:pl-6" : ""} ${
              i % 2 === 1 ? "border-l border-paper/15 pl-4" : ""
            } ${i >= 2 ? "border-t border-paper/15 lg:border-t-0" : ""}`}
          >
            <dd className="type-display text-[clamp(2.25rem,4vw,3.25rem)] text-honey">{f.value}</dd>
            <dt className="mt-2 text-sm text-paper/70">{f.label}</dt>
          </div>
        ))}
      </dl>
    </section>

    {/* Photo */}
    <figure className="relative">
      <img
        src={groupImage}
        alt="A large group of women, men and OFTAC members gathered on chairs outdoors in Kyangwali"
        loading="lazy"
        className="h-[clamp(16rem,40vw,30rem)] w-full object-cover object-[50%_40%]"
      />
      <figcaption className="absolute bottom-0 left-0 bg-ink px-4 py-3 text-sm text-paper">
        A community meeting in Kyangwali, May 2022
      </figcaption>
    </figure>

    {/* Methods */}
    <section className="container grid gap-10 py-16 md:grid-cols-2 md:py-20">
      <div className="border-t-2 border-ink pt-6">
        <h2 className="text-2xl font-semibold">From inside Uganda</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-soft">
          We accept MTN Mobile Money, Airtel Money and bank transfers. Message us and we'll share
          the account details.
        </p>
      </div>
      <div className="border-t-2 border-ink pt-6">
        <h2 className="text-2xl font-semibold">From abroad</h2>
        <p className="mt-3 font-serif text-lg leading-relaxed text-ink-soft">
          Giving from outside Uganda? Contact us and we'll arrange an international transfer with
          you.
        </p>
      </div>
    </section>

    {/* Why it lasts */}
    <section className="bg-forest text-paper">
      <div className="container grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.5rem)]">
            A hive keeps producing. Aid runs out.
          </h2>
          <img
            src={booksImage}
            alt="Children and adults holding up exercise books with OFTAC members"
            loading="lazy"
            className="mt-8 aspect-[3/2] w-full object-cover"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="font-serif text-lg leading-relaxed text-paper/85">
            Instead of temporary relief, your support gives families skills and equipment that
            keep earning for years, for the household and for the community around it.
          </p>
          <p className="mt-6 text-paper/70">
            Want to talk about a larger gift or a partnership?{" "}
            <Link to="/contact" className="arrow-link text-honey-light">
              Contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  </>
);

export default Donate;
