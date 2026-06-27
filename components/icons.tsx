import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function SofaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 11V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V11" />
      <path d="M4 11a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1H6v-1a2 2 0 0 0-2-2Z" />
      <path d="M5 17v2M19 17v2" />
    </svg>
  );
}

export function RugIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="1.5" />
      <path d="M3 9h18M3 15h18" />
      <path d="M6 6v-2M18 6v-2M6 18v2M18 18v2" />
      <path d="M9 11.5l1.5 1L9 13.5M15 11.5l-1.5 1 1.5 1" />
    </svg>
  );
}

export function MattressIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="9" width="19" height="8" rx="2.5" />
      <path d="M5 9V7.5A1.5 1.5 0 0 1 6.5 6h11A1.5 1.5 0 0 1 19 7.5V9" />
      <path d="M6 13h0M10 13h0M14 13h0M18 13h0" />
      <path d="M3.5 17v1.5M20.5 17v1.5" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.6 4.8L18 9l-4.4 1.2L12 15l-1.6-4.8L6 9l4.4-1.2L12 3Z" />
      <path d="M19 14l.7 2.1L22 17l-2.3.9L19 20l-.7-2.1L16 17l2.3-.9L19 14Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 20c10 1 14-6 14-15-9-1-15 3-15 11 0 1.5.3 3 1 4Z" />
      <path d="M5 20C8 14 12 11 17 9" />
    </svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="13" rx="2.5" />
      <path d="M3 10h18" />
      <path d="M17 14h.01" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c4-4.5 7-8 7-11a7 7 0 1 0-14 0c0 3 3 6.5 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 20.9l1.1-6.5L2.6 9.3l6.5-.9L12 2.5Z" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ViberIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.9 2 3 5.3 3 9.7c0 2 .9 3.8 2.4 5.2l-.8 3.6 3.7-1.2c1.1.4 2.4.6 3.7.6 5.1 0 9-3.3 9-7.8S17.1 2 12 2Zm0 2c4 0 7 2.5 7 5.7s-3 5.8-7 5.8c-1.2 0-2.3-.2-3.3-.6l-.4-.2-2 .6.4-2-.3-.3C5 12 4.5 10.9 4.5 9.7 4.5 6.5 8 4 12 4Zm-2.3 3.1c-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.6 0 1 .7 1.9.8 2 .1.2 1.4 2.3 3.5 3.1 1.7.7 2.1.6 2.5.5.4 0 1.1-.5 1.3-1 .2-.4.2-.8.1-.9 0-.1-.2-.2-.5-.3-.3-.1-.9-.4-1-.5-.2-.1-.3-.1-.4.1l-.5.6c-.1.1-.2.2-.4.1-.3-.1-1-.4-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.1-.2.2-.4 0-.1 0-.3 0-.4-.1-.1-.4-1-.6-1.4-.1-.3-.3-.3-.5-.3h-.4Z" />
    </svg>
  );
}
