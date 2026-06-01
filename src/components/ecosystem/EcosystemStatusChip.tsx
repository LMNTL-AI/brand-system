export type EcosystemStatus = 'live' | 'beta';

export interface EcosystemStatusChipProps {
  /** Maturity status: `live` ("Live today") or `beta` ("In private beta"). */
  status: EcosystemStatus;
  /** Override the default label text. */
  label?: string;
  /** Show the leading status dot. @default true */
  showDot?: boolean;
  className?: string;
}

const STATUS_CONFIG: Record<EcosystemStatus, { label: string; className: string }> = {
  live: { label: 'Live today', className: 'eco-status-chip--live' },
  beta: { label: 'In private beta', className: 'eco-status-chip--beta' },
};

/**
 * EcosystemStatusChip — a maturity indicator for ecosystem capabilities.
 *
 * "Live today" (SOR/teal) or "In private beta" (gate/amber). Visually
 * consistent with goodhelp-ai/ghfe#839's status chips. Light/dark via tokens.
 */
export function EcosystemStatusChip({
  status,
  label,
  showDot = true,
  className = '',
}: EcosystemStatusChipProps) {
  const config = STATUS_CONFIG[status];
  return (
    <span className={`eco-status-chip ${config.className} ${className}`.trim()}>
      {showDot && <span className="eco-status-chip__dot" aria-hidden="true" />}
      {label ?? config.label}
    </span>
  );
}
