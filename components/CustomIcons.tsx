interface IconProps {
  className?: string;
}

// Rocket Icon - Main brand icon
export const RocketIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L14.5 7.5L20 8.5L16 13L17.5 19L12 16L6.5 19L8 13L4 8.5L9.5 7.5L12 2Z"
      fill="currentColor"
    />
    <path
      d="M12 16V22M8 20H16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Strategy/Orbit Icon - For Product Strategy
export const OrbitIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      transform="rotate(45 12 12)"
    />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="5"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      transform="rotate(-45 12 12)"
    />
  </svg>
);

// Constellation Icon - For Brand Identity
export const ConstellationIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <circle cx="18" cy="6" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="6" cy="18" r="2" fill="currentColor" />
    <circle cx="18" cy="18" r="2" fill="currentColor" />
    <path
      d="M6 6L12 12M12 12L18 6M12 12L6 18M12 12L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Launch Icon - For Development & Launch
export const LaunchIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3L14 8L19 10L14 12L12 17L10 12L5 10L10 8L12 3Z"
      fill="currentColor"
    />
    <path
      d="M12 17L9 20M12 17L15 20M5 14L3 16M19 14L21 16"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Star Icon - For sparkles/highlights
export const StarIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
      fill="currentColor"
    />
    <path
      d="M19 4L19.5 6L21 6.5L19.5 7L19 9L18.5 7L17 6.5L18.5 6L19 4Z"
      fill="currentColor"
    />
    <path
      d="M6 15L6.5 17L8 17.5L6.5 18L6 20L5.5 18L4 17.5L5.5 17L6 15Z"
      fill="currentColor"
    />
  </svg>
);

// Arrow Right Icon - Custom version
export const ArrowRightIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M5 12H19M19 12L13 6M19 12L13 18"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Arrow Down Icon
export const ArrowDownIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 5V19M12 19L6 13M12 19L18 13"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron Left Icon
export const ChevronLeftIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 18L9 12L15 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Chevron Right Icon
export const ChevronRightIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9 18L15 12L9 6"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Calendar/Schedule Icon
export const ScheduleIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3 9H21M7 3V7M17 3V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="15" r="2" fill="currentColor" />
  </svg>
);

// Quote Icon - Custom
export const QuoteIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M3 11C3 8.23858 5.23858 6 8 6C8 8.76142 5.76142 11 3 11V17H9V11H3Z"
      fill="currentColor"
    />
    <path
      d="M15 11C15 8.23858 17.2386 6 20 6C20 8.76142 17.7614 11 15 11V17H21V11H15Z"
      fill="currentColor"
    />
  </svg>
);

// Social Media Icons - Custom styled
export const LinkedInIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="7" y="10" width="2" height="7" fill="currentColor" />
    <circle cx="8" cy="7" r="1" fill="currentColor" />
    <path
      d="M12 10V17M12 10C12 10 12.5 9 14.5 9C16.5 9 17 10.5 17 12V17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const TwitterIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M18 3L8 21M8 3L18 21"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const DribbbleIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
    <path
      d="M5 12C5 12 8 14 12 14C16 14 19 12 19 12M12 5C12 5 10 8 10 12C10 16 12 19 12 19M12 5C12 5 14 8 14 12C14 16 12 19 12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

// Satellite Icon - Additional themed icon
export const SatelliteIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="8" y="8" width="8" height="8" fill="currentColor" transform="rotate(45 12 12)" />
    <path
      d="M3 3L6 6M21 3L18 6M3 21L6 18M21 21L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Planet Icon
export const PlanetIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="6" fill="currentColor" />
    <ellipse
      cx="12"
      cy="12"
      rx="10"
      ry="3"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
