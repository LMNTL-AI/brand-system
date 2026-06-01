import type { ReactNode } from 'react';
import { ApproveGateIcon } from '../../icons/ecosystem/ApproveGateIcon';
import { SystemOfRecordIcon } from '../../icons/ecosystem/SystemOfRecordIcon';

export type EcosystemTrustBadgeType = 'dcaa-aligned' | 'audit-ready' | 'gated-actions';

export type EcosystemTrustBadgeSize = 'sm' | 'md' | 'lg';
export type EcosystemTrustBadgeVariant = 'outline' | 'solid';

export interface EcosystemTrustBadgeProps {
  /**
   * Predefined trust indicator. `dcaa-aligned` renders the wording
   * "DCAA-aligned" — NEVER "DCAA-compliant" (per the site claim-sweep rule).
   */
  type?: EcosystemTrustBadgeType;
  /** Override the primary label (use with care for the DCAA wording rule). */
  label?: string;
  /** Optional secondary line under the label. */
  sublabel?: string;
  /** Override the leading icon. */
  icon?: ReactNode;
  /** Size variant. @default 'md' */
  size?: EcosystemTrustBadgeSize;
  /** Visual variant. @default 'outline' */
  variant?: EcosystemTrustBadgeVariant;
  className?: string;
}

const ICON_PX: Record<EcosystemTrustBadgeSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};

/**
 * Default config per badge type.
 *
 * ⛔ DCAA wording is "DCAA-aligned", NOT "DCAA-compliant". Do not change.
 */
const BADGE_CONFIG: Record<
  EcosystemTrustBadgeType,
  { label: string; sublabel?: string; icon: (px: number) => ReactNode }
> = {
  'dcaa-aligned': {
    label: 'DCAA-aligned',
    sublabel: 'Timekeeping built to the standard',
    icon: (px) => <SystemOfRecordIcon size={px} aria-hidden="true" />,
  },
  'audit-ready': {
    label: 'Audit-ready',
    sublabel: 'Trail captured as work happens',
    icon: (px) => <SystemOfRecordIcon size={px} aria-hidden="true" />,
  },
  'gated-actions': {
    label: 'Gated actions',
    sublabel: 'Every change approved by a human',
    icon: (px) => <ApproveGateIcon size={px} aria-hidden="true" />,
  },
};

/**
 * EcosystemTrustBadge — trust indicators for the ecosystem trust line.
 *
 * Defaults to "DCAA-aligned" (never "DCAA-compliant"). Available in three sizes
 * and outline/solid variants. Light/dark via the `--brand-eco-*` token layer.
 *
 * Requires the ecosystem token + style imports (see EcosystemStack docs).
 */
export function EcosystemTrustBadge({
  type = 'dcaa-aligned',
  label,
  sublabel,
  icon,
  size = 'md',
  variant = 'outline',
  className = '',
}: EcosystemTrustBadgeProps) {
  const config = BADGE_CONFIG[type];
  const resolvedLabel = label ?? config.label;
  const resolvedSublabel = sublabel ?? config.sublabel;
  const resolvedIcon = icon ?? config.icon(ICON_PX[size]);

  const classes = [
    'eco-trust-badge',
    `eco-trust-badge--${size}`,
    variant === 'solid' ? 'eco-trust-badge--solid' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      <span className="eco-trust-badge__icon">{resolvedIcon}</span>
      <span className="eco-trust-badge__text">
        <span className="eco-trust-badge__label">{resolvedLabel}</span>
        {resolvedSublabel && (
          <span className="eco-trust-badge__sub">{resolvedSublabel}</span>
        )}
      </span>
    </span>
  );
}
