import { Link, useLocation } from "react-router";

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <section className="container py-20 md:py-28">
      <p className="type-display text-[clamp(5rem,16vw,12rem)] text-honey">404</p>
      <h1 className="mt-4 text-3xl font-semibold">There's no page at {pathname}</h1>
      <p className="mt-3 max-w-lg text-ink-soft">The link may be old or mistyped.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn bg-ink text-paper hover:bg-forest">
          Go to the home page
        </Link>
        <Link to="/contact" className="btn border border-ink/40 hover:border-ink">
          Contact us
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
