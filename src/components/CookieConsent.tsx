import { useState, useEffect } from 'react';

const COOKIE_KEY = 'rc_cookie_consent';
const COOKIE_EXPIRY_DAYS = 365;

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Small delay so it doesn't compete with
      // the hero video on load
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }

    try {
      const parsed = JSON.parse(stored);
      if (parsed?.date) {
        const ageMs = Date.now() - new Date(parsed.date).getTime();
        const expired = ageMs > COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
        if (expired) {
          localStorage.removeItem(COOKIE_KEY);
          const timer = setTimeout(() => setVisible(true), 2000);
          return () => clearTimeout(timer);
        }
      }
    } catch {
      localStorage.removeItem(COOKIE_KEY);
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY,
      JSON.stringify({
        accepted: true,
        date: new Date().toISOString()
      })
    );
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY,
      JSON.stringify({
        accepted: false,
        date: new Date().toISOString()
      })
    );
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a]/95 backdrop-blur-sm border-t border-white/10 px-6 py-5"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="font-sans text-sm text-white/80 leading-relaxed max-w-2xl">
          We use analytics cookies to understand how
          visitors use this site. No advertising or
          tracking cookies are used. Read our{' '}
          <a
            href="/privacy-policy"
            className="underline text-white/60 hover:text-white transition-colors"
          >
            privacy policy
          </a>
          .
        </p>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="font-sans text-sm text-white/50 hover:text-white/80 transition-colors underline whitespace-nowrap"
          >
            Reject non-essential
          </button>
          <button
            onClick={accept}
            className="font-sans text-sm bg-white text-[#1a1a1a] px-5 py-2 hover:bg-white/90 transition-colors whitespace-nowrap font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
