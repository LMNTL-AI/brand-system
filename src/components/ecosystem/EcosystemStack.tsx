import type { ReactNode } from 'react';
import { OperatingLayerIcon } from '../../icons/ecosystem/OperatingLayerIcon';
import { SystemOfRecordIcon } from '../../icons/ecosystem/SystemOfRecordIcon';

export interface EcosystemStackItem {
  /** Display label, e.g. "TimeTrust" or "Departments that act". */
  label: string;
  /** Optional leading glyph. */
  icon?: ReactNode;
}

export interface EcosystemStackProps {
  /** Section heading. */
  heading?: string;
  /** Label for the top (operating) layer. */
  operatingLabel?: string;
  /** Items shown in the operating layer. */
  operatingItems?: EcosystemStackItem[];
  /** Label for the base (system-of-record) layer. */
  sorLabel?: string;
  /** Items shown in the system-of-record layer. */
  sorItems?: EcosystemStackItem[];
  /** Text for the upward arrow (operating reads truth). */
  upLabel?: string;
  /** Text for the downward arrow (operating proposes gated actions). */
  downLabel?: string;
  className?: string;
}

const DEFAULT_OPERATING_ITEMS: EcosystemStackItem[] = [
  { label: 'Departments that act' },
];

const DEFAULT_SOR_ITEMS: EcosystemStackItem[] = [
  { label: 'TimeTrust' },
  { label: 'LMNTL GL' },
];

/**
 * EcosystemStack — the two-layer "System of Record × Operating Intelligence"
 * diagram.
 *
 * Base layer: Systems of Record (TimeTrust, LMNTL GL) — the source of truth.
 * Top layer: GoodHelp Operating Intelligence — reads truth (↑), proposes gated
 * actions (↓).
 *
 * Responsive + light/dark via the `--brand-eco-*` token layer. Visually
 * consistent with goodhelp-ai/ghfe#839.
 *
 * Requires `@lmntl-ai/brand-system/tokens/css`,
 * `@lmntl-ai/brand-system/tokens/ecosystem-css`, and
 * `@lmntl-ai/brand-system/styles/ecosystem` to be imported.
 */
export function EcosystemStack({
  heading = 'One operating layer. Every system of record.',
  operatingLabel = 'GoodHelp Operating Intelligence',
  operatingItems = DEFAULT_OPERATING_ITEMS,
  sorLabel = 'Systems of Record',
  sorItems = DEFAULT_SOR_ITEMS,
  upLabel = '↑ reads truth',
  downLabel = '↓ proposes gated actions',
  className = '',
}: EcosystemStackProps) {
  return (
    <section
      className={`eco-stack ${className}`.trim()}
      aria-labelledby="eco-stack-heading"
    >
      <h2 id="eco-stack-heading" className="eco-stack__heading">
        {heading}
      </h2>
      <div className="eco-stack__diagram">
        <div className="eco-layer eco-layer--operating">
          <div className="eco-layer__head">
            <span className="eco-layer__icon">
              <OperatingLayerIcon size={20} aria-hidden="true" />
            </span>
            <p className="eco-layer__label">{operatingLabel}</p>
          </div>
          <div className="eco-layer__items">
            {operatingItems.map((item) => (
              <span className="eco-chip" key={item.label}>
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>

        <div className="eco-arrows">
          <span className="eco-arrow eco-arrow--up">{upLabel}</span>
          <span className="eco-arrow eco-arrow--down">{downLabel}</span>
        </div>

        <div className="eco-layer eco-layer--sor">
          <div className="eco-layer__head">
            <span className="eco-layer__icon">
              <SystemOfRecordIcon size={20} aria-hidden="true" />
            </span>
            <p className="eco-layer__label">{sorLabel}</p>
          </div>
          <div className="eco-layer__items">
            {sorItems.map((item) => (
              <span className="eco-chip" key={item.label}>
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
