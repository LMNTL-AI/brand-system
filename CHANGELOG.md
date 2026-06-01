# Changelog

All notable changes to `@lmntl-ai/brand-system` will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2026-05-31

### Added

- **Ecosystem-narrative assets** — shared brand assets for the
  "System of Record × Operating Intelligence" story (consumed by `marketing-site`
  and `goodhelp.ai`; visual parity with `goodhelp-ai/ghfe#839`).

  - **Ecosystem CSS tokens** (`/tokens/ecosystem-css`) — `--brand-eco-*` tokens
    distinguishing the operating layer (GoodHelp, purple) from the systems of
    record (TimeTrust · LMNTL GL, teal) and the approval gate (amber). Light/dark
    via `data-theme="dark"` / `.dark` / `data-theme="system"`. Layered on top of
    the brand palette — does not redefine any existing `--brand-*` token.
  - **Ecosystem TypeScript token constants** (`/tokens`) — `ecosystemColors` and
    `getEcosystemPillarColors()`.
  - **`EcosystemStack`** component (`/components`) — the two-layer stack diagram
    (System of Record base, GoodHelp Operating Intelligence on top, bidirectional
    "reads truth ↑ / proposes gated actions ↓" arrows). Responsive, light/dark.
  - **`OldWayNewWay`** component (`/components`) — the "Old way vs GoodHelp way"
    comparison block as an accessible ARIA-table grid that collapses to stacked,
    labelled cards on mobile (card layout, not a raw `<table>`).
  - **`EcosystemStatusChip`** component (`/components`) — "Live today" /
    "In private beta" maturity chips.
  - **`EcosystemTrustBadge`** component (`/components`) — "DCAA-aligned" trust
    badge (never "DCAA-compliant"), plus audit-ready / gated-actions variants, in
    sm/md/lg sizes and outline/solid styles.
  - **Operating-intelligence iconography** (`/icons/ecosystem`) — `DepartmentIcon`,
    `ActIcon`, `ApproveGateIcon`, `SystemOfRecordIcon`, `OperatingLayerIcon`.
  - **Ecosystem component CSS** (`/styles/ecosystem`).
  - Static visual preview at `preview/ecosystem.html` (light + dark, responsive).

### Changed

- `TrustBadges` `dcaa` badge label changed from "DCAA Compliant" to "DCAA-aligned"
  to comply with the site claim-sweep wording rule.

## [1.4.2] - 2026-03-30

### Changed

- chore: rename package scope from `@mission-critical-saas` to `@lmntl-ai` for GitHub Packages publishing

## [1.2.0] - 2025-12-11

### Added

- **DataTable Component** (`/components`)
  - Full-featured data table with sorting, filtering, zebra striping
  - Clickable column headers with sort indicators (arrows up/down)
  - Loading skeleton state with brand-colored zebra stripes
  - Empty state with customizable message
  - Row click handler with keyboard support
  - CVA variants for styling customization
  - `useSortState` and `useSortStateWithUrl` hooks for state management

- **DataTableFilters Component**
  - Simple filter bar with search and select filters
  - Integrates with DataTable for unified filtering

- **DataTableFiltersAdvanced Component**
  - Advanced filter bar with multiple filter types
  - Search, select, date-range, and balance filters
  - Responsive grid/horizontal/vertical layouts
  - Clear all filters button
  - `useFilterState` hook for state management

- **StatusBadge Component**
  - Consistent status display in tables
  - Automatic color mapping for common statuses (active, inactive, paid, etc.)
  - Variant props for manual color control

- **UI Primitives** (`/components/ui`)
  - Table, TableHeader, TableBody, TableRow, TableHead, TableCell
  - Skeleton loading component
  - Input with focus states
  - Select with Radix UI primitives
  - Button with CVA variants
  - Label component

- **Utility Functions** (`/lib`)
  - `cn()` - Tailwind class merging utility (clsx + tailwind-merge)

### Dependencies

- Added `@radix-ui/react-select` for accessible select components
- Added `@radix-ui/react-slot` for polymorphic components
- Added `class-variance-authority` for CVA pattern
- Added `clsx` and `tailwind-merge` for class utilities
- Added `lucide-react` for icons

## [1.1.0] - 2025-12-08

### Added

- **Timesheet Component CSS** (`/styles/timesheet`)
  - Reusable CSS components for timesheet interfaces
  - View tabs (Calendar/List/Timesheet segmented control)
  - Calendar view with day columns, time slots, entry blocks
  - List view with collapsible week groups and entry cards
  - **Timesheet grid view (NEW)**
    - Date picker components (`ts-date-picker`, `ts-date-nav-btn`, `ts-date-range-btn`)
    - Time summary bar (`ts-time-summary`, `ts-time-totals`, `ts-time-stat`)
    - Timesheet card wrapper (`ts-timesheet-card`, `ts-timesheet-header`)
    - Timesheet table (`ts-table-container`, `ts-timesheet-table`)
    - Column classes (`ts-col-project`, `ts-col-day`, `ts-col-weekend`, `ts-col-total`)
    - Project cell with color dots (`ts-project-cell`, `ts-project-dot`)
    - Time input fields (`ts-time-input`)
    - Totals row (`ts-totals-row`, `ts-totals-label`)
    - Footer with actions (`ts-timesheet-footer`, `ts-footer-right`)
  - Entry card component with status badges
  - Detail panel for time entry editing
  - Audit log table with pagination
  - Icon button component (`ts-btn-icon`)
  - User avatar component (`ts-user-avatar`)
  - All components use `ts-` prefix for namespacing
  - Full brand token integration via `var(--brand-*)` custom properties
  - Works with `data-brand` attribute for brand switching

## [1.0.0] - 2025-12-06

### Added

- **CSS Tokens** (`/tokens/css`)
  - Complete CSS custom properties for all 4 brands (MCS, Minute7, Hour, LMNTL)
  - Colors, typography, spacing, shadows, transitions
  - 119 component classes (`.brand-btn`, `.brand-card`, etc.)
  - Brand switching via `data-brand` attribute

- **TypeScript Constants** (`/tokens`)
  - `colors` object with all brand color palettes
  - `getBrandColors(brand)` helper function
  - Full TypeScript types for type-safe usage

- **React Components** (`/components`)
  - `BrandProvider` - Context provider for brand theming
  - `TrustBadges` - Configurable trust badge display
  - `useBrand()` hook for accessing current brand

- **Icon Components** (`/icons/*`)
  - `/icons/hour` - Hour Timesheet icons (TimeTracking, DcaaCompliance, Reporting, etc.)
  - `/icons/minute7` - Minute7 icons (QuickBooksSync, ExpenseTracking, etc.)
  - `/icons/lmntl` - LMNTL.AI icons (AiPlatform, Analytics, etc.)
  - `/icons/mcs` - MCS corporate icons

- **Tailwind Preset** (`/tailwind-preset`)
  - Drop-in preset with all brand colors
  - Classes like `bg-mcs-blue`, `text-minute7-green`, `border-hour-orange`

### Infrastructure

- GitHub Packages publishing via GitHub Actions
- Automated builds on version tags (`v*`)
- TypeScript compilation with tsup
- ESM module format

[Unreleased]: https://github.com/LMNTL-AI/brand-system/compare/v1.5.0...HEAD
[1.5.0]: https://github.com/LMNTL-AI/brand-system/compare/v1.4.2...v1.5.0
[1.4.2]: https://github.com/LMNTL-AI/brand-system/compare/v1.2.0...v1.4.2
[1.2.0]: https://github.com/LMNTL-AI/brand-system/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/LMNTL-AI/brand-system/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/LMNTL-AI/brand-system/releases/tag/v1.0.0
