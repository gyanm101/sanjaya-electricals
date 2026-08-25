export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`logo ${compact ? "logo-compact" : ""}`}>
      <svg
        className="logo-symbol"
        viewBox="0 0 90 90"
        role="img"
        aria-label="Sanjaya Electricals logo"
      >
        <circle cx="43" cy="43" r="31" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="135 55" transform="rotate(-36 43 43)" />
        <path d="M52 4 22 47h20L29 83l39-50H48z" fill="#ff6a00" />
        <path d="M45 58v-19l16-10 16 10v29H45z" fill="#0b2345" />
        <rect x="52" y="47" width="6" height="7" fill="#fff" />
        <rect x="63" y="42" width="6" height="7" fill="#fff" />
        <rect x="63" y="54" width="6" height="7" fill="#fff" />
        <path d="M18 70 36 53 46 62 56 53 78 72" fill="none" stroke="#0b2345" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <div className="logo-text">
        <span className="logo-name">SANJAYA</span>
        <span className="logo-electricals">ELECTRICALS</span>
        {!compact && <span className="logo-sub">— &amp; CIVIL CONTRACTORS —</span>}
      </div>
    </div>
  );
}
