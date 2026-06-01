# @lmntl-ai/brand-system

LMNTL Brand Design System - CSS tokens, React components, and Tailwind preset for Hour Timesheet, Minute7, and LMNTL.AI products.

> **Note**: As of v1.4.2, the package scope changed from `@mission-critical-saas` to `@lmntl-ai` to match the GitHub org.

## Installation

```bash
npm install @lmntl-ai/brand-system
```

> **Note:** This package is hosted on GitHub Packages. You may need to configure npm to use the GitHub registry for the `@lmntl-ai` scope.

## Quick Start

### 1. Import CSS Tokens

```typescript
// In your app entry point
import '@lmntl-ai/brand-system/tokens/css';
```

### 2. Wrap with BrandProvider (React)

```tsx
import { BrandProvider } from '@lmntl-ai/brand-system/components';

function App() {
  return (
    <BrandProvider brand="hour">
      <YourApp />
    </BrandProvider>
  );
}
```

### 3. Use Brand Components

```tsx
import { TrustBadges } from '@lmntl-ai/brand-system/components';
import { TimeTrackingIcon } from '@lmntl-ai/brand-system/icons/hour';

function FeatureCard() {
  return (
    <div className="brand-card">
      <TimeTrackingIcon size={24} />
      <TrustBadges badges={['dcaa', 'secure']} />
    </div>
  );
}
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@lmntl-ai/brand-system` | Main entry with all exports |
| `@lmntl-ai/brand-system/tokens` | TypeScript color constants |
| `@lmntl-ai/brand-system/tokens/css` | CSS custom properties |
| `@lmntl-ai/brand-system/tokens/ecosystem-css` | Ecosystem-narrative CSS tokens (`--brand-eco-*`) |
| `@lmntl-ai/brand-system/icons/hour` | Hour Timesheet icons |
| `@lmntl-ai/brand-system/icons/minute7` | Minute7 icons |
| `@lmntl-ai/brand-system/icons/lmntl` | LMNTL.AI icons |
| `@lmntl-ai/brand-system/icons/mcs` | MCS corporate icons |
| `@lmntl-ai/brand-system/icons/ecosystem` | Operating-intelligence glyphs (department/act/approve-gate/SoR/operating-layer) |
| `@lmntl-ai/brand-system/components` | React components |
| `@lmntl-ai/brand-system/styles/timesheet` | Timesheet component CSS |
| `@lmntl-ai/brand-system/styles/ecosystem` | Ecosystem component CSS |
| `@lmntl-ai/brand-system/tailwind-preset` | Tailwind CSS preset |

## Ecosystem-Narrative Assets

Shared brand assets that tell the **"System of Record × Operating Intelligence"**
story coherently across `marketing-site` and `goodhelp.ai`. The **operating layer**
(GoodHelp) sits on top of the **systems of record** (TimeTrust, LMNTL GL); it reads
truth and proposes gated actions. All assets are responsive and light/dark aware.

```tsx
import '@lmntl-ai/brand-system/tokens/css';            // base brand tokens
import '@lmntl-ai/brand-system/tokens/ecosystem-css';  // --brand-eco-* tokens
import '@lmntl-ai/brand-system/styles/ecosystem';      // ecosystem component CSS

import {
  EcosystemStack,        // two-layer SoR × Operating Intelligence diagram
  OldWayNewWay,          // "Old way vs GoodHelp way" comparison (responsive cards)
  EcosystemStatusChip,   // "Live today" / "In private beta"
  EcosystemTrustBadge,   // "DCAA-aligned" trust badge variants
} from '@lmntl-ai/brand-system/components';

function EcosystemSection() {
  return (
    <>
      <EcosystemStack />
      <OldWayNewWay />
      <EcosystemStatusChip status="live" />
      <EcosystemStatusChip status="beta" />
      <EcosystemTrustBadge type="dcaa-aligned" />
    </>
  );
}
```

> **Dark mode:** set `data-theme="dark"` (or a `.dark` class) on an ancestor.
> `data-theme="system"` follows `prefers-color-scheme`.

> **Wording note:** the trust badge says **"DCAA-aligned"**, never "DCAA-compliant"
> (per the site claim-sweep rule).

### Ecosystem pillar tokens

| Token group | Purpose | Hue |
|-------------|---------|-----|
| `--brand-eco-operating-*` | GoodHelp Operating Intelligence (top layer) | Parent-brand purple |
| `--brand-eco-sor-*` | Systems of Record — TimeTrust, LMNTL GL (base layer) | Teal (truth) |
| `--brand-eco-gate-*` | Approval gate (human-in-the-loop) | Amber |

These layer on top of the brand palette and do **not** redefine any existing
`--brand-*` token, so they coexist with the two-pillar brand house without clashing.

A standalone visual preview of every ecosystem asset (light + dark, desktop +
mobile) lives at [`preview/ecosystem.html`](./preview/ecosystem.html) — open it in
a browser after `npm run build`.

## Brands

- **lmntl** - LMNTL.AI platform (purple) - Default
- **minute7** - Minute7 QuickBooks integration (green)
- **hour** - Hour Timesheet DCAA compliance (orange)
- **mcs** - Legacy Mission Critical SaaS (blue)

## Tailwind CSS Preset

```js
// tailwind.config.js
import { mcsBrandPreset } from '@lmntl-ai/brand-system/tailwind-preset';

export default {
  presets: [mcsBrandPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

This adds brand colors like `bg-mcs-blue`, `text-minute7-green`, `border-hour-orange`, etc.

## CSS Custom Properties

When using the CSS tokens, you can access:

```css
.my-component {
  background-color: var(--brand-primary);
  color: var(--brand-primary-foreground);
  padding: var(--brand-space-4);
  border-radius: var(--brand-radius-lg);
}
```

Set the brand context with `data-brand` attribute:

```html
<div data-brand="hour">
  <!-- Uses Hour Timesheet orange theme -->
</div>
```

## Projects Using This Package

| Project | Domain | Description |
|---------|--------|-------------|
| Marketing Site | `lmntl.ai`, `*.preview.lmntl.ai` | Company marketing website |
| LMNTL GL | `app.lmntl.ai`, `*.dev.lmntl.ai` | General Ledger application |
| Minute7 | `minute7.com` | Time tracking product |
| Hour Timesheet | `hourtimesheet.com` | DCAA compliance product |

## License

MIT - LMNTL
