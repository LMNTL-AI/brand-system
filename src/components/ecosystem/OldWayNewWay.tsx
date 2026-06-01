export interface ComparisonRow {
  /** The dimension being compared, e.g. "Data entry". */
  dimension: string;
  /** How it works the old way. */
  oldWay: string;
  /** How it works the GoodHelp way. */
  newWay: string;
}

export interface OldWayNewWayProps {
  /** Section heading. */
  heading?: string;
  /** Header label for the dimension column. */
  dimensionHeading?: string;
  /** Header label for the "old way" column. */
  oldHeading?: string;
  /** Header label for the "GoodHelp way" column. */
  newHeading?: string;
  /** Comparison rows. */
  rows?: ComparisonRow[];
  className?: string;
}

const DEFAULT_ROWS: ComparisonRow[] = [
  {
    dimension: 'Data entry',
    oldWay: 'Manual, duplicated across tools',
    newWay: 'Read once from the system of record',
  },
  {
    dimension: 'Decisions',
    oldWay: 'Buried in spreadsheets',
    newWay: 'Surfaced by operating intelligence',
  },
  {
    dimension: 'Actions',
    oldWay: 'Copy-paste between apps',
    newWay: 'Proposed + gated for approval',
  },
  {
    dimension: 'Audit trail',
    oldWay: 'Reconstructed after the fact',
    newWay: 'Captured as work happens',
  },
];

/**
 * OldWayNewWay — the "Old way vs GoodHelp way" comparison block.
 *
 * Renders as an accessible ARIA table grid that collapses to stacked, labelled
 * cards on narrow viewports (responsive card layout, not a raw <table>). Shared
 * so marketing-site and goodhelp.ai render it identically (parity with
 * goodhelp-ai/ghfe#839).
 *
 * Requires the ecosystem token + style imports (see EcosystemStack docs).
 */
export function OldWayNewWay({
  heading = 'The old way vs the GoodHelp way',
  dimensionHeading = 'How work gets done',
  oldHeading = 'Old way',
  newHeading = 'GoodHelp way',
  rows = DEFAULT_ROWS,
  className = '',
}: OldWayNewWayProps) {
  return (
    <section
      className={`eco-compare ${className}`.trim()}
      aria-labelledby="eco-compare-heading"
    >
      <h2 id="eco-compare-heading" className="eco-compare__heading">
        {heading}
      </h2>
      <div className="eco-compare__grid" role="table" aria-label={heading}>
        <div className="eco-compare__row eco-compare__row--head" role="row">
          <div className="eco-compare__cell" role="columnheader">
            {dimensionHeading}
          </div>
          <div
            className="eco-compare__cell eco-compare__head-old"
            role="columnheader"
          >
            {oldHeading}
          </div>
          <div
            className="eco-compare__cell eco-compare__head-new"
            role="columnheader"
          >
            {newHeading}
          </div>
        </div>
        {rows.map((row) => (
          <div className="eco-compare__row" role="row" key={row.dimension}>
            <div className="eco-compare__cell eco-compare__dim" role="cell">
              {row.dimension}
            </div>
            <div className="eco-compare__cell eco-compare__old" role="cell">
              {row.oldWay}
            </div>
            <div className="eco-compare__cell eco-compare__new" role="cell">
              {row.newWay}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
