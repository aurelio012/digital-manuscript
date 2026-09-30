import { useId } from 'react';

// Generative plates — each is drawn from a fact about its project rather
// than from stock imagery. Geometry is computed once at module load from a
// seeded generator, so server and client render identical markup.

export type PlateVariant = 'charleston' | 'paragon' | 'legislative' | 'pathwise';

const W = 400;
const H = 250;

function seeded(seed: number) {
    return () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

const f = (n: number) => n.toFixed(1);

/* ── Charleston: terrain contours, a rail line, sensors along it ── */
const charleston = (() => {
    const cx = 250;
    const cy = 118;
    const contours = Array.from({ length: 10 }, (_, k) => {
        const base = 12 + k * 16;
        const pts = Array.from({ length: 97 }, (_, i) => {
            const a = (i / 96) * Math.PI * 2;
            const r = base * (1 + 0.14 * Math.sin(3 * a + k * 0.5) + 0.06 * Math.sin(5 * a - k * 0.35));
            return `${f(cx + r * Math.cos(a) * 1.3)} ${f(cy + r * Math.sin(a) * 0.92)}`;
        });
        return `M${pts.join('L')}Z`;
    });
    const a = { x: -10, y: 212 };
    const b = { x: 410, y: 58 };
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    const d = { x: (b.x - a.x) / len, y: (b.y - a.y) / len };
    const n = { x: -d.y, y: d.x };
    const ties = Array.from({ length: Math.floor(len / 9) }, (_, i) => {
        const p = { x: a.x + d.x * i * 9, y: a.y + d.y * i * 9 };
        return `M${f(p.x - n.x * 3.5)} ${f(p.y - n.y * 3.5)}L${f(p.x + n.x * 3.5)} ${f(p.y + n.y * 3.5)}`;
    }).join('');
    const sensors = [0.2, 0.41, 0.6, 0.82].map(t => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }));
    return { contours, rail: `M${a.x} ${a.y}L${b.x} ${b.y}`, ties, sensors };
})();

/* ── Paragon: one dot per school, 50 × 30 = 1,500 ── */
const paragon = (() => {
    const rand = seeded(1500);
    const cols = 50;
    const rows = 30;
    const step = 7;
    const x0 = (W - cols * step) / 2;
    const y0 = (H - rows * step) / 2;
    const lit = Array.from({ length: 110 }, () => {
        const c = Math.floor(rand() * cols);
        const r = Math.floor(rand() * rows);
        return { x: x0 + c * step + step / 2, y: y0 + r * step + step / 2 };
    });
    return { x0, y0, step, cols, rows, lit };
})();

/* ── Legislative Architecture: bills matched to enacted ordinances;
      the unmatched ones are the gaps in representation ── */
const legislative = (() => {
    const rand = seeded(2023);
    const rows = 9;
    const top = 30;
    const gap = 22;
    const bills = Array.from({ length: rows }, (_, i) => ({ y: top + i * gap, w: 70 + rand() * 70 }));
    const ords = Array.from({ length: rows }, (_, i) => ({ y: top + i * gap, w: 60 + rand() * 70 }));
    const links: [number, number, number][] = [
        [0, 1, 0.9], [1, 0, 0.55], [2, 3, 0.75], [4, 4, 0.95], [5, 7, 0.45], [7, 6, 0.7],
    ];
    const matchedBills = new Set(links.map(l => l[0]));
    const matchedOrds = new Set(links.map(l => l[1]));
    const xl = 34;
    const xr = 244;
    const curves = links.map(([i, j, s]) => {
        const x1 = xl + bills[i].w + 6;
        const y1 = bills[i].y + 2.5;
        const x2 = xr - 6;
        const y2 = ords[j].y + 2.5;
        const mx = (x1 + x2) / 2;
        return { d: `M${f(x1)} ${f(y1)}C${f(mx)} ${f(y1)} ${f(mx)} ${f(y2)} ${f(x2)} ${f(y2)}`, s };
    });
    return { bills, ords, curves, matchedBills, matchedOrds, xl, xr };
})();

/* ── PATHWiSE: a spoken prompt, carried from teacher to robot to class ── */
const pathwise = (() => {
    const rand = seeded(24);
    const count = 72;
    const x0 = 30;
    const span = W - 60;
    const bars = Array.from({ length: count }, (_, i) => {
        const t = i / (count - 1);
        const envelope = Math.sin(Math.PI * t) ** 0.8;
        const h = 4 + envelope * (58 * Math.abs(Math.sin(i * 0.23) * Math.sin(i * 0.051 + 0.6)) + rand() * 16);
        return { x: x0 + t * span, h };
    });
    return { bars };
})();

const LABELS: Record<PlateVariant, string> = {
    charleston: 'Terrain contours crossed by a rail line with sensors placed along it',
    paragon: 'A grid of 1,500 dots, one for each NYC public school',
    legislative: 'Bills linked to the ordinances they became; unlinked bars mark gaps',
    pathwise: 'A voice waveform passing from prompt to robot to classroom',
};

export default function ProjectPlate({
    variant,
    accent,
    className,
    decorative = false,
}: {
    variant: PlateVariant;
    accent: string;
    className?: string;
    decorative?: boolean;
}) {
    const uid = useId().replace(/:/g, '');
    const a11y = decorative
        ? { 'aria-hidden': true as const }
        : { role: 'img', 'aria-label': LABELS[variant] };

    return (
        <svg viewBox={`0 0 ${W} ${H}`} className={className} preserveAspectRatio="xMidYMid slice" {...a11y}>
            {variant === 'charleston' && (
                <g fill="none">
                    {charleston.contours.map((d, k) => (
                        <path key={k} d={d} stroke="currentColor" strokeWidth="0.8" opacity={0.18 + (k % 3 === 0 ? 0.22 : 0)} />
                    ))}
                    <path d={charleston.ties} stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
                    <path d={charleston.rail} stroke={accent} strokeWidth="1.3" />
                    {charleston.sensors.map((s, i) => (
                        <g key={i}>
                            {i % 2 === 1 && (
                                <>
                                    <circle cx={s.x} cy={s.y} r="12" stroke={accent} strokeWidth="0.8" opacity="0.45" />
                                    <circle cx={s.x} cy={s.y} r="21" stroke={accent} strokeWidth="0.6" opacity="0.2" />
                                </>
                            )}
                            <circle cx={s.x} cy={s.y} r="3.6" fill="var(--bg)" stroke={accent} strokeWidth="1.3" />
                        </g>
                    ))}
                </g>
            )}

            {variant === 'paragon' && (
                <>
                    <defs>
                        <pattern id={`dots-${uid}`} x={paragon.x0} y={paragon.y0} width={paragon.step} height={paragon.step} patternUnits="userSpaceOnUse">
                            <circle cx={paragon.step / 2} cy={paragon.step / 2} r="1" fill="currentColor" opacity="0.7" />
                        </pattern>
                    </defs>
                    <rect
                        x={paragon.x0}
                        y={paragon.y0}
                        width={paragon.cols * paragon.step}
                        height={paragon.rows * paragon.step}
                        fill={`url(#dots-${uid})`}
                    />
                    {paragon.lit.map((p, i) => (
                        <circle key={i} cx={p.x} cy={p.y} r="1.7" fill={accent} />
                    ))}
                </>
            )}

            {variant === 'legislative' && (
                <g>
                    {legislative.curves.map((c, i) => (
                        <path key={i} d={c.d} fill="none" stroke={accent} strokeWidth="0.9" opacity={c.s} />
                    ))}
                    {legislative.bills.map((b, i) => (
                        <rect
                            key={`b${i}`}
                            x={legislative.xl}
                            y={b.y}
                            width={b.w}
                            height="5"
                            rx="2.5"
                            fill="currentColor"
                            opacity={legislative.matchedBills.has(i) ? 0.75 : 0.2}
                        />
                    ))}
                    {legislative.ords.map((o, i) => (
                        <rect
                            key={`o${i}`}
                            x={legislative.xr}
                            y={o.y}
                            width={o.w}
                            height="5"
                            rx="2.5"
                            fill={legislative.matchedOrds.has(i) ? accent : 'currentColor'}
                            opacity={legislative.matchedOrds.has(i) ? 0.85 : 0.2}
                        />
                    ))}
                </g>
            )}

            {variant === 'pathwise' && (
                <g>
                    {pathwise.bars.map((b, i) => (
                        <rect key={i} x={b.x - 1} y={112 - b.h / 2} width="2" height={b.h} rx="1" fill={accent} opacity={0.35 + (b.h / 80) * 0.65} />
                    ))}
                    <g stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6">
                        <path d="M130 212H270" strokeDasharray="2 4" />
                        <circle cx="120" cy="212" r="7" />
                        <rect x="193" y="205" width="14" height="14" rx="3" />
                        <circle cx="280" cy="212" r="7" />
                    </g>
                    <circle cx="200" cy="212" r="2" fill={accent} />
                </g>
            )}
        </svg>
    );
}
