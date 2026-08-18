import { useState, useEffect } from 'react';

const DISMISSED_KEY = 'rc_sticky_cta_dismissed';
const EXCLUDED_PATHS = ['/contact', '/privacy-policy'];

interface Props {
  currentPath: string;
}

export default function StickyCTA({ currentPath }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isExcluded = EXCLUDED_PATHS.some((p) => currentPath.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;
    const isDismissed = localStorage.getItem(DISMISSED_KEY);
    if (!isDismissed) {
      setVisible(true);
    }
  }, [isExcluded]);

  const dismiss = () => {
    localStorage.setItem(DISMISSED_KEY, 'true');
    setDismissed(true);
    setVisible(false);
  };

  if (isExcluded || !visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] bg-[#0a0a0a] border-t border-white/10 px-6 py-4"
      role="complementary"
      aria-label="Consultation CTA"
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-serif text-white text-lg leading-snug">
            Find the right Golden Visa program for your family.
          </p>
          <p className="font-sans text-white/50 text-sm mt-0.5">
            Portugal from €500,000 · Greece from €250,000 · Italy from €250,000
          </p>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={dismiss}
            className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors"
            aria-label="Dismiss"
          >
            ✕
          </button>
          <a
            href="/contact"
            className="font-sans text-sm font-medium bg-white text-[#0a0a0a] px-6 py-3 hover:bg-white/90 transition-colors whitespace-nowrap tracking-wide uppercase"
          >
            Get Your Golden Visa Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
