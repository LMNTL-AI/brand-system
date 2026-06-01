import type { IconProps } from '../types';

/**
 * Department icon — a unit of the operating layer ("departments that act").
 * Stacked org-unit blocks. Inherits color via `currentColor`.
 */
export function DepartmentIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="13" width="7" height="8" rx="1" />
      <rect x="14" y="13" width="7" height="8" rx="1" />
      <rect x="8.5" y="3" width="7" height="7" rx="1" />
      <path d="M12 10v3M6.5 13v-1.5a1 1 0 0 1 1-1H12M17.5 13v-1.5a1 1 0 0 0-1-1H12" />
    </svg>
  );
}
