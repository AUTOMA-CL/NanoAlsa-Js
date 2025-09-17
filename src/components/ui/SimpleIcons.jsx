// Simple fallback icons for problematic cases
export const SimpleAtom = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="2" />
    <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
  </svg>
);

export const SimpleCube = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 2l6 4v8l-6 4-6-4V6l6-4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 2v16M4 6l6 4 6-4" stroke="currentColor" strokeWidth="1" opacity="0.7" />
  </svg>
);

export const SimpleRocket = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 1l3 6h-2v8h-2V7H7l3-6zm-3 15h6v2H7v-2z" />
  </svg>
);

export const SimpleChip = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <rect x="4" y="4" width="12" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="7" y="7" width="6" height="6" rx="0.5" />
  </svg>
);