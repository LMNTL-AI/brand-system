/**
 * Ecosystem Narrative Color Constants
 *
 * TypeScript-friendly values that mirror the CSS custom properties in
 * `ecosystem-tokens.css`. Use these when you need the raw color in JS/TS
 * (charts, canvas, inline SVG fills) rather than via `var(--brand-eco-*)`.
 *
 * These distinguish the operating layer (GoodHelp) from the systems of record
 * (TimeTrust, LMNTL GL) while staying inside the parent-brand palette.
 */

export const ecosystemColors = {
  /** GoodHelp Operating Intelligence — parent-brand purple */
  operating: {
    base: '#7C3AED',
    strong: '#6D28D9',
    fg: '#FFFFFF',
    bg: '#F5F3FF',
    border: '#DDD6FE',
  },
  /** Systems of Record (TimeTrust, LMNTL GL) — teal = source of truth */
  sor: {
    base: '#0F766E',
    strong: '#115E59',
    fg: '#FFFFFF',
    bg: '#F0FDFA',
    border: '#99F6E4',
  },
  /** Approval gate — amber = human-in-the-loop sign-off */
  gate: {
    base: '#B45309',
    strong: '#92400E',
    fg: '#FFFFFF',
    bg: '#FFFBEB',
    border: '#FDE68A',
  },
} as const;

export type EcosystemPillar = keyof typeof ecosystemColors;

export interface EcosystemPillarColors {
  base: string;
  strong: string;
  fg: string;
  bg: string;
  border: string;
}

export function getEcosystemPillarColors(pillar: EcosystemPillar): EcosystemPillarColors {
  return ecosystemColors[pillar];
}
