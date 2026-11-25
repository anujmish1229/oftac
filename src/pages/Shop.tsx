import { email, whatsapp } from "@/lib/contact";

const products = [
  {
    name: "Raw Honey",
    tagline: "Pure and unprocessed",
    body: "Natural, unprocessed honey with its enzymes and nutrients intact. A natural sweetener and an everyday health food.",
    points: ["Rich in antioxidants", "Natural enzymes preserved", "Supports immune health", "Helps combat malnutrition"],
    tone: "bg-honey",
  },
  {
    name: "Bee Venom",
    tagline: "Medicinal grade",
    body: "A high-value product used in medicinal treatments, including for arthritis and other conditions. Harvested sustainably from our hives.",
    points: ["Medicinal applications", "Used in arthritis treatment", "High market value", "Sustainably harvested"],
    tone: "bg-paper-deep",
  },
];

const reasons = [
  {
    title: "Raw and pure",
    body: "Our honey is raw and unprocessed. Unlike pasteurised commercial honey, it keeps its natural nutrients and enzymes.",
  },
  {
    title: "Made by the community",
    body: "Every purchase pays refugee beekeepers directly and builds their self-reliance.",
  },
  {
    title: "Low-impact production",
    body: "Produced with locally available materials and practices that are gentle on the land.",
  },
];

const steps = [
  "Message us on WhatsApp or by email with the product and the quantity you'd like.",
  "We reply with the current price and how we can get it to you.",
  "Pay, and receive your order.",
];

const Shop = () => (
  <>
    <section className="container grid gap-6 pb-12 pt-14 md:grid-cols-12 md:pb-16 md:pt-20">
      <div className="md:col-span-7">
        <p className="marker mb-5 text-muted">Shop</p>
        <h1 className="type-display text-[clamp(3rem,7vw,5.75rem)]">Honey from Kyangwali</h1>
      </div>
      <p className="font-serif text-lg leading-relaxed text-ink-soft md:col-span-4 md:col-start-9 md:self-end">
        Every purchase supports refugee families working toward financial independence. We take
        orders directly. Prices are on request.
      </p>
    </section>

    {/* Products */}
    <section className="container space-y-4 pb-16 md:pb-24">
      {products.map((p) => (
        <article key={p.name} className={`${p.tone} grid gap-8 p-7 md:grid-cols-12 md:p-10`}>
          <div className="md:col-span-4">
            <h2 className="type-display text-[clamp(2.5rem,5vw,4rem)]">{p.name}</h2>
            <p className="mt-2 font-semibold">{p.tagline}</p>
          </div>
          <div className="md:col-span-5">
            <p className="font-serif text-lg leading-relaxed">{p.body}</p>
            <ul className="mt-5 grid grid-cols-1 border-t border-ink/20 text-sm sm:grid-cols-2">
              {p.points.map((pt) => (
                <li key={pt} className="border-b border-ink/20 py-2.5 sm:odd:pr-4">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 md:col-span-3 md:items-stretch">
            <p className="text-sm">
              <span className="block text-ink/60">Price</span>
              <span className="font-semibold">On request</span>
            </p>
            <a
              href={whatsapp(`Hello OFTAC, I'd like to order ${p.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-ink text-paper hover:bg-forest"
            >
              Order on WhatsApp
            </a>
            <a href={email(`Order: ${p.name}`)} className="btn border border-ink/40 hover:border-ink">
              Order by email
            </a>
          </div>
        </article>
      ))}
    </section>

    {/* Why */}
    <section className="bg-ink text-paper">
      <div className="container py-16 md:py-24">
        <h2 className="type-display max-w-2xl text-[clamp(2.25rem,4.5vw,3.5rem)]">
          What makes our products different
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="border-t-2 border-honey pt-5">
              <h3 className="text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 font-serif text-lg leading-relaxed text-paper/75">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* How ordering works */}
    <section className="container grid gap-8 py-16 md:grid-cols-12 md:py-20">
      <div className="md:col-span-4">
        <h2 className="type-display text-[clamp(2rem,4vw,3rem)]">How ordering works</h2>
        <p className="mt-4 text-ink-soft">
          Buying in bulk or looking to stock our honey?{" "}
          <a href={email("Bulk order / partnership")} className="arrow-link">
            Email us
          </a>
          .
        </p>
      </div>
      <ol className="grid gap-6 sm:grid-cols-3 md:col-span-8">
        {steps.map((s, i) => (
          <li key={s} className="border-t-2 border-ink pt-4">
            <span className="type-display text-4xl text-honey-deep">{i + 1}</span>
            <p className="mt-2 leading-relaxed">{s}</p>
          </li>
        ))}
      </ol>
    </section>
  </>
);

export default Shop;
