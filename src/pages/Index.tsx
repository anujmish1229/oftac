import { Link } from "react-router";
import heroImage from "@/assets/hero-beekeeping.jpg";
import founderImage from "@/assets/founder-portrait.jpg";
import meetingImage from "@/assets/community-meeting.jpg";
import booksImage from "@/assets/children-books.jpg";
import { HexButtons } from "@/components/HexButtons";

const figures = [
  { value: "144,000", label: "people live in Kyangwali", note: "One of Uganda's largest refugee settlements" },
  { value: "19%", label: "are aged 15 to 26", note: "Young people looking for work" },
  { value: "58%", label: "cut in cash assistance", note: "Monthly support per person" },
  { value: "US$3.67", label: "per person, per month", note: "What that support is now" },
];

const program = [
  {
    title: "Beehive distribution",
    body: "Quality hives go to the households that need them most, so they can start keeping bees.",
  },
  {
    title: "Four months of training",
    body: "Beekeeping technique, building hives from local materials, maintenance and harvesting honey.",
  },
  {
    title: "Getting honey to market",
    body: "Help with packaging and branding, and connections to local and regional buyers.",
  },
];

const Index = () => (
  <>
    {/* Hero */}
    <section className="border-b border-ink/10">
      <div className="grid lg:min-h-[calc(100svh-3.5rem)] lg:max-h-[860px] lg:grid-cols-12">
        <div className="container flex flex-col justify-center py-12 lg:col-span-6 lg:mr-0 lg:max-w-[42rem] lg:py-16 xl:col-span-6">
          <p className="marker mb-5 text-muted">Kyangwali Refugee Settlement, Uganda</p>
          <h1 className="type-display text-[clamp(3.25rem,7vw,6rem)]">
            Empowering refugees, <span className="text-forest">one hive at a time.</span>
          </h1>
          <p className="mt-6 max-w-[34rem] font-serif text-lg leading-relaxed text-ink-soft md:text-xl">
            OFTAC gives refugee households beehives, four months of training and help selling their
            honey, so families can earn their own income instead of relying on aid.
          </p>
          <div className="mt-8">
            <HexButtons />
          </div>
        </div>

        <figure className="relative h-[52svh] min-h-80 lg:col-span-6 lg:h-auto">
          <img
            src={heroImage}
            alt="Beekeepers working with hives in Kyangwali"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 bg-ink px-4 py-3 text-sm text-paper">
            <span className="font-semibold text-honey-light">79 people</span> producing honey as of
            January 2025
          </figcaption>
        </figure>
      </div>
    </section>

    {/* The challenge */}
    <section className="bg-ink text-paper">
      <div className="container py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="marker mb-4 text-honey-light">The challenge</p>
            <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.75rem)]">
              Aid is shrinking. Families need income that lasts.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-9">
            <p className="font-serif text-lg leading-relaxed text-paper/80">
              International support for the Kyangwali settlement keeps falling. Monthly cash
              assistance has dropped from 31,000 UGX to 13,000 UGX per person, leaving families
              struggling to cover basic needs.
            </p>
            {/* Aid comparison */}
            <dl className="mt-8 space-y-3 text-sm">
              <div>
                <div className="flex justify-between text-paper/60">
                  <dt>Before</dt>
                  <dd>31,000 UGX (US$8.75)</dd>
                </div>
                <div className="mt-1.5 h-3 bg-paper/25" />
              </div>
              <div>
                <div className="flex justify-between">
                  <dt className="font-semibold">Now</dt>
                  <dd className="font-semibold">13,000 UGX (US$3.67)</dd>
                </div>
                <div className="mt-1.5 h-3 w-[42%] bg-honey" />
              </div>
            </dl>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 border-t border-paper/15 lg:grid-cols-4">
          {figures.map((f, i) => (
            <div
              key={f.label}
              className={`border-paper/15 py-7 pr-4 ${i % 2 === 1 ? "pl-4 border-l lg:pl-6" : ""} ${
                i >= 2 ? "border-t lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
            >
              <dd className="type-display text-[clamp(2.25rem,4.5vw,3.5rem)] text-honey">{f.value}</dd>
              <dt className="mt-2 font-semibold">{f.label}</dt>
              <dd className="mt-1 text-sm text-paper/55">{f.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>

    {/* The program */}
    <section>
      <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="marker mb-4 text-muted">What we do</p>
          <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.75rem)]">
            From the first hive to the first sale.
          </h2>
        </div>

        <ol className="lg:col-span-5 lg:col-start-5">
          {program.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[2.5rem_1fr] border-t border-ink/15 py-6 first:border-t-2 first:border-ink">
              <span className="type-display text-2xl text-honey-deep">{i + 1}</span>
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 font-serif leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="self-start bg-honey p-7 lg:col-span-3 lg:col-start-10">
          <p className="type-display text-7xl">79</p>
          <p className="mt-2 font-semibold">people producing honey and earning a steady income</p>
          <p className="mt-1 text-sm text-ink/70">As of January 2025</p>
          <hr className="my-5 border-ink/20" />
          <p className="text-sm leading-relaxed">
            A trained beekeeper can produce up to 50 kg of honey and 100 g of bee venom a year, about
            US$1,800 per household.
          </p>
          <Link to="/about" className="arrow-link mt-5 inline-block text-sm">
            How the project works →
          </Link>
        </aside>
      </div>
    </section>

    {/* In the community */}
    <section className="bg-paper-deep">
      <div className="container grid gap-4 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-12 md:mb-4 md:flex md:items-end md:justify-between">
          <h2 className="type-display text-[clamp(2rem,4vw,3rem)]">In the community</h2>
          <p className="mt-2 text-sm text-muted md:mt-0">Photos from OFTAC's work in Kyangwali</p>
        </div>
        <figure className="md:col-span-8">
          <img
            src={meetingImage}
            alt="OFTAC members in blue polo shirts speaking with a group of seated women in Kyangwali"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="mt-2 text-sm text-muted">Meeting with households, May 2022</figcaption>
        </figure>
        <figure className="md:col-span-4">
          <img
            src={booksImage}
            alt="Children and adults holding up exercise books with OFTAC members"
            loading="lazy"
            className="aspect-[16/9] w-full object-cover md:aspect-auto md:h-[calc(100%-1.75rem)]"
          />
          <figcaption className="mt-2 text-sm text-muted">With families in the settlement, December 2023</figcaption>
        </figure>
      </div>
    </section>

    {/* Founder */}
    <section className="bg-forest text-paper">
      <div className="grid lg:grid-cols-12">
        <div className="relative min-h-80 lg:col-span-5">
          <img
            src={founderImage}
            alt="Samuel Usabuwera, founder of OFTAC"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="container py-16 md:py-24 lg:col-span-7 lg:ml-0 lg:max-w-[46rem] lg:pl-16">
          <p className="marker mb-4 text-honey-light">Founder & Director</p>
          <h2 className="type-display text-[clamp(2.5rem,5vw,4.25rem)]">Samuel Usabuwera</h2>
          <div className="mt-6 space-y-4 font-serif text-lg leading-relaxed text-paper/85">
            <p>
              Samuel grew up in the Kyangwali Refugee Settlement after his family fled Rwanda during
              the genocide. They left everything behind and had to start over with very little
              support.
            </p>
          </div>
          <blockquote className="my-8 border-l-4 border-honey pl-5 type-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight text-paper">
            But his father had a skill that wasn't left behind in Rwanda: beekeeping.
          </blockquote>
          <p className="font-serif text-lg leading-relaxed text-paper/85">
            Samuel took up the trade and now sees beekeeping as a way to help other refugees work
            their way out of poverty.
          </p>
          <Link to="/team" className="arrow-link mt-8 inline-block text-honey-light">
            Read Samuel's story →
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Index;
