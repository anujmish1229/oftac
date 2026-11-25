import meetingImage from "@/assets/community-meeting.jpg";
import handsInImage from "@/assets/team-hands-in.jpg";

const components = [
  {
    title: "Beehive distribution",
    body: "OFTAC provides beehives to refugee households, with a focus on those most in need.",
  },
  {
    title: "Four-month training",
    body: "Youth and households go through four months of detailed training in beekeeping technique, including how to build beehives from local materials and how to harvest honey properly.",
  },
  {
    title: "Ongoing support",
    body: "After training, OFTAC keeps helping households maintain their hives, market their honey and manage the income. Families without suitable land can use a demonstration farm.",
  },
];

const impact = [
  {
    title: "Economic independence",
    body: "Beekeeping gives refugee families a source of income of their own. Each trained beekeeper can produce up to 50 kg of honey and 100 g of bee venom a year.",
    figure: "≈ US$1,800",
    figureNote: "potential yearly income per household",
  },
  {
    title: "Work for young people",
    body: "Many young people in the settlement pay for their own education and support their families. Beekeeping is work they can do alongside that, and it suits people whose health limits them from heavier jobs.",
  },
  {
    title: "Nutrition and health",
    body: "Locally produced honey is easier to get hold of. Raw honey is rich in nutrients and antioxidants, which helps families fight malnutrition.",
  },
];

const About = () => (
  <>
    {/* Intro */}
    <section className="container grid gap-8 pb-14 pt-14 md:grid-cols-12 md:pb-20 md:pt-20">
      <div className="md:col-span-6">
        <p className="marker mb-5 text-muted">The project</p>
        <h1 className="type-display text-[clamp(3rem,7vw,5.75rem)]">
          Beekeeping as a way out of aid dependency.
        </h1>
      </div>
      <div className="md:col-span-5 md:col-start-8 md:self-end">
        <p className="font-serif text-xl leading-relaxed text-ink-soft">
          The goal is simple: give vulnerable refugee households a sustainable income from
          beekeeping, so they rely less on outside aid. We believe that with the right tools,
          training and support, refugees can build dignified, self-sufficient lives.
        </p>
      </div>
    </section>

    {/* Headline figure */}
    <section className="bg-forest text-paper">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:gap-10">
        <p className="type-display text-[clamp(4.5rem,11vw,8.5rem)] text-honey-light">79</p>
        <p className="max-w-xl font-serif text-xl leading-snug md:text-2xl">
          people are already producing honey and earning a steady income.
          <span className="mt-2 block font-sans text-sm text-paper/60">As of January 2025</span>
        </p>
      </div>
    </section>

    {/* How it works */}
    <section className="container grid gap-10 py-16 md:py-24 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-24">
          <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.5rem)]">How it works</h2>
          <figure className="mt-8">
            <img
              src={meetingImage}
              alt="OFTAC members speaking with a group of seated women in Kyangwali"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-2 text-sm text-muted">
              Meeting with households in Kyangwali, May 2022
            </figcaption>
          </figure>
        </div>
      </div>
      <ol className="lg:col-span-6 lg:col-start-7">
        {components.map((c, i) => (
          <li key={c.title} className="border-t-2 border-ink py-8 first:pt-6">
            <p className="type-display text-5xl text-honey">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-2xl font-semibold">{c.title}</h3>
            <p className="mt-3 font-serif text-lg leading-relaxed text-ink-soft">{c.body}</p>
          </li>
        ))}
      </ol>
    </section>

    {/* Expected impact */}
    <section className="bg-ink text-paper">
      <div className="container py-16 md:py-24">
        <h2 className="type-display text-[clamp(2.25rem,4.5vw,3.5rem)]">Expected impact</h2>
        <div className="mt-10">
          {impact.map((row) => (
            <article
              key={row.title}
              className="grid gap-4 border-t border-paper/15 py-8 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-xl font-semibold md:col-span-3">{row.title}</h3>
              <p className="font-serif text-lg leading-relaxed text-paper/75 md:col-span-6">{row.body}</p>
              {row.figure && (
                <p className="md:col-span-3 md:text-right">
                  <span className="type-display block text-4xl text-honey">{row.figure}</span>
                  <span className="text-sm text-paper/55">{row.figureNote}</span>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Who we are */}
    <section className="bg-paper-deep">
      <div className="container grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <h2 className="type-display text-[clamp(2rem,4vw,3rem)] md:col-span-4">Who we are</h2>
        <p className="font-serif text-lg leading-relaxed text-ink-soft md:col-span-5">
          OFTAC, the Organization for Transforming African Communities, has worked in Kyangwali for
          almost three years and is now officially registered in Uganda as a community-based
          organization. We are growing every year, driven by the resilience of the communities we
          serve.
        </p>
        <dl className="grid content-start gap-4 text-sm md:col-span-3">
          <div>
            <dt className="text-muted">Based in</dt>
            <dd className="font-semibold">Kyangwali Refugee Settlement</dd>
          </div>
          <div>
            <dt className="text-muted">Status</dt>
            <dd className="font-semibold">Registered community-based organization</dd>
          </div>
          <div>
            <dt className="text-muted">Works with</dt>
            <dd className="font-semibold">Refugee households and youth</dd>
          </div>
        </dl>
        <figure className="md:col-span-12 md:mt-6">
          <img
            src={handsInImage}
            alt="OFTAC members stacking their hands together outside a building in Kyangwali"
            loading="lazy"
            className="aspect-[21/9] w-full object-cover object-[50%_70%]"
          />
          <figcaption className="mt-2 text-sm text-muted">OFTAC members in Kyangwali, August 2022</figcaption>
        </figure>
      </div>
    </section>
  </>
);

export default About;
