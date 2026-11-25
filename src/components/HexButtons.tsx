import { Link } from "react-router";

/*
  Two flattened, sideways hexagons (pill-like, with pointed ends) that tile like
  neighbouring cells: the first one's lower-right face runs parallel to, and a
  few px from, the second one's upper-left face. Corners are lightly rounded.

  Each button is a single link whose box is the hexagon's bounding box. The link
  ignores pointer events and only the hexagon path accepts them, so the
  overlapping corners of the two boxes never steal each other's clicks.
*/

const W = 220; // hexagon width
const H = 68; // hexagon height
const E = 28; // horizontal reach of each pointed end
const GAP = 7; // gap between the two facing sides
const R = 7; // corner radius
const PAD = 2; // room for the outline stroke

type Pt = [number, number];

const hex = (o: number): Pt[] => [
  [o + E, o],
  [o + W - E, o],
  [o + W, o + H / 2],
  [o + W - E, o + H],
  [o + E, o + H],
  [o, o + H / 2],
];

const roundedPath = (pts: Pt[], r: number) => {
  const toward = (a: Pt, b: Pt): Pt => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    return [a[0] + ((b[0] - a[0]) / len) * r, a[1] + ((b[1] - a[1]) / len) * r];
  };
  const f = (p: Pt) => `${p[0].toFixed(2)},${p[1].toFixed(2)}`;
  return (
    pts
      .map((p, i) => {
        const a = toward(p, pts[(i + pts.length - 1) % pts.length]);
        const b = toward(p, pts[(i + 1) % pts.length]);
        return `${i === 0 ? "M" : "L"}${f(a)} Q${f(p)} ${f(b)}`;
      })
      .join(" ") + " Z"
  );
};

const PATH = roundedPath(hex(PAD), R);
const CW = W + PAD * 2; // one cell's box
const CH = H + PAD * 2;

// Second cell = tiling neighbour, pushed out along the shared face's normal.
const nLen = Math.hypot(H / 2, E);
const BX = W - E + (H / 2 / nLen) * GAP;
const BY = H / 2 + (E / nLen) * GAP;

const TOTAL_W = BX + CW;
const TOTAL_H = BY + CH;
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

type HexProps = {
  to: string;
  label: string;
  x: number;
  y: number;
  variant: "fill" | "line";
};

const Hex = ({ to, label, x, y, variant }: HexProps) => (
  <Link
    to={to}
    className="group pointer-events-none absolute outline-none"
    style={{ left: pct(x, TOTAL_W), top: pct(y, TOTAL_H), width: pct(CW, TOTAL_W), height: pct(CH, TOTAL_H) }}
  >
    <svg viewBox={`0 0 ${CW} ${CH}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
      <path
        d={PATH}
        className={`pointer-events-auto cursor-pointer transition-colors duration-150 group-focus-visible:stroke-honey-deep group-focus-visible:[stroke-width:4] ${
          variant === "fill"
            ? "fill-honey stroke-honey [stroke-width:0] group-hover:fill-honey-light"
            : "fill-transparent stroke-ink [stroke-width:2] group-hover:fill-ink"
        }`}
      />
    </svg>
    <span
      className={`relative flex h-full items-center justify-center text-[clamp(0.95rem,2.6vw,1.1rem)] font-semibold transition-colors duration-150 ${
        variant === "fill" ? "text-ink" : "text-ink group-hover:text-paper"
      }`}
    >
      {label}
    </span>
  </Link>
);

export const HexButtons = () => (
  <div className="relative w-[min(100%,26rem)]" style={{ aspectRatio: `${TOTAL_W} / ${TOTAL_H}` }}>
    <Hex to="/donate" label="Get involved" x={0} y={0} variant="fill" />
    <Hex to="/about" label="Our story" x={BX} y={BY} variant="line" />
  </div>
);
