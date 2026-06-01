import type { IconProps } from '../types';

/**
 * Operating-layer icon — GoodHelp Operating Intelligence sitting on top of
 * the systems of record. Two stacked planes with a connecting node.
 */
export function OperatingLayerIcon({ size = 24, ...props }: IconProps) {
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
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 13.5 9 4.5 9-4.5" />
      <circle cx="12" cy="7.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}
