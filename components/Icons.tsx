type P = { className?: string };

export function InstagramIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <path d="M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5L3 21z" />
      <path d="M9 8.5c0 3 3 6 6 6l1-1.5-2-1-1 .8c-.8-.4-1.8-1.4-2.2-2.2l.8-1-1-2L9 8.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}
