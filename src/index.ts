// Tokens
export { colors, getBrandColors, getBrandPrimary } from './tokens';
export type { Brand, BrandColors } from './tokens';
export { ecosystemColors, getEcosystemPillarColors } from './tokens';
export type { EcosystemPillar, EcosystemPillarColors } from './tokens';

// Components
export { BrandProvider, useBrand, useBrandOptional, TrustBadges } from './components';
export type { BrandProviderProps, TrustBadgesProps, TrustBadgeType } from './components';

// Ecosystem-narrative components
export {
  EcosystemStack,
  OldWayNewWay,
  EcosystemStatusChip,
  EcosystemTrustBadge,
} from './components';
export type {
  EcosystemStackProps,
  EcosystemStackItem,
  OldWayNewWayProps,
  ComparisonRow,
  EcosystemStatusChipProps,
  EcosystemStatus,
  EcosystemTrustBadgeProps,
  EcosystemTrustBadgeType,
  EcosystemTrustBadgeSize,
  EcosystemTrustBadgeVariant,
} from './components';

// Tailwind preset
export { mcsBrandPreset } from './tailwind-preset';
