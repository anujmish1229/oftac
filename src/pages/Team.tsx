import founderPortrait from "@/assets/founder-portrait.jpg";
import { Link } from "react-router";
import { email, whatsapp } from "@/lib/contact";

const facts = [
  { label: "Role", value: "Founder & Director" },
  { label: "Grew up in", value: "Kyangwali Refugee Settlement, Uganda" },
  { label: "Family from", value: "Rwanda" },
  { label: "Learned beekeeping from", value: "His father" },
];

const ways = [
  {
    title: "Volunteer",
    body: "Have time or skills to offer? Tell us what you do and we'll talk about where it fits.",
    action: "Message on WhatsApp",
    href: whatsapp("Hello OFTAC, I'd like to volunteer."),
    external: true,
  },
  {
    title: "Partner",
    body: "NGOs, buyers and organisations working in the region: we'd like to hear from you.",
    action: "Email about partnering",
    href: email("Partnership with OFTAC"),
    external: false,
  },
];

const Team = () => (
  <>
    <section className="container pb-10 pt-14 md:pt-20">
      <p className="marker mb-5 text-muted">Our team</p>
      <h1 className="type-display max-w-4xl text-[clamp(3rem,7vw,5.75rem)]">
        The people behind OFTAC
      </h1>
    </section>

    {/* Founder profile */}
    <section className="container grid gap-10 pb-16 md:pb-24 lg:grid-cols-12">
      <figure className="lg:col-span-6">
        <img
          src={founderPortrait}
          alt="Samuel Usabuwera, founder of OFTAC"
          className="aspect-[4/3] w-full object-cover"
        />
        <figcaption className="mt-3 text-sm text-muted">Samuel Usabuwera in Kyangwali</figcaption>
      </figure>

      <div className="lg:col-span-5 lg:col-start-8">
        <h2 className="type-display text-[clamp(2.5rem,5vw,4rem)]">Samuel Usabuwera</h2>
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y-2 border-ink py-5 text-sm">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-muted">{f.label}</dt>
              <dd className="font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 space-y-4 font-serif text-lg leading-relaxed text-ink-soft">
          <p>
            Samuel Usabuwera grew up in the Kyangwali Refugee Settlement in Uganda after his family
            was forced to flee Rwanda during the genocide.
          </p>
          <p>
            He and his family knew firsthand what it means to leave everything behind and start
            over with very little support.
          </p>
          <p>
            But Samuel's father had a skill and experience that wasn't left behind in Rwanda:{" "}
            <strong className="font-semibold text-ink">beekeeping</strong>.
          </p>
          <p>
            That knowledge has carried across generations. Samuel took on the trade and now sees
            beekeeping as his mission: helping other refugees work their way out of poverty.
          </p>
        </div>
      </div>
    </section>

    {/* Work with us */}
    <section className="bg-honey">
      <div className="container grid gap-10 py-16 md:grid-cols-12 md:py-20">
        <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.5rem)] md:col-span-4">
          Work with us
        </h2>
        <div className="grid gap-8 sm:grid-cols-3 md:col-span-8">
          {ways.map((w) => (
            <div key={w.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-xl font-semibold">{w.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed">{w.body}</p>
              <a
                href={w.href}
                {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="arrow-link mt-4 inline-block text-sm"
              >
                {w.action} →
              </a>
            </div>
          ))}
          <div className="border-t-2 border-ink pt-5">
            <h3 className="text-xl font-semibold">Donate</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed">
              Fund hives, training and support for more households.
            </p>
            <Link to="/donate" className="arrow-link mt-4 inline-block text-sm">
              Ways to give →
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Team;
