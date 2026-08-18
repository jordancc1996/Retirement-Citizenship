import { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

const POPUP_KEY = 'rc_exit_popup_shown';
const COOLDOWN_DAYS = 7;
const EXCLUDED_PATHS = [
  '/contact',
  '/privacy-policy',
  '/briefing',
];

interface Props {
  currentPath: string;
}

export default function ExitIntentPopup({
  currentPath,
}: Props) {
  const [open, setOpen] = useState(false);
  const isReady = useRef(false);
  const hasFired = useRef(false);
  const isExcluded = EXCLUDED_PATHS.some((p) =>
    currentPath.startsWith(p));

  useEffect(() => {
    if (isExcluded) return;

    const isDev = import.meta.env.DEV;

    if (!isDev) {
      const stored = localStorage.getItem(POPUP_KEY);
      if (stored) {
        try {
          const { date } = JSON.parse(stored);
          const daysSince = (Date.now() - new Date(date).getTime())
            / (1000 * 60 * 60 * 24);
          if (daysSince < COOLDOWN_DAYS) return;
        } catch {
          localStorage.removeItem(POPUP_KEY);
        }
      }
    }

    const delay = isDev ? 3000 : 60000;
    const timer = setTimeout(() => {
      isReady.current = true;
    }, delay);

    const fire = () => {
      if (!isReady.current || hasFired.current) return;
      hasFired.current = true;
      setOpen(true);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 50) fire();
    };

    let maxScroll = 0;
    const handleScroll = () => {
      if (!isReady.current || hasFired.current) return;
      const denom = document.body.scrollHeight - window.innerHeight;
      if (denom <= 0) return;
      const scrollPct = window.scrollY / denom;
      if (scrollPct > 0.6) maxScroll = scrollPct;
      if (maxScroll > 0.6 && scrollPct < 0.3) fire();
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExcluded]);

  const handleClose = () => {
    localStorage.setItem(POPUP_KEY, JSON.stringify({
      shown: true,
      date: new Date().toISOString(),
    }));
    setOpen(false);
  };

  if (isExcluded) return null;

  return (
    <Dialog open={open} onOpenChange={(o) => {
      if (!o) handleClose();
    }}>
      <DialogContent
        className="max-w-[480px] p-0 rounded-none sm:rounded-none border border-gray-200 shadow-2xl z-[110] bg-white"
      >
        <div className="p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-serif text-3xl font-light text-[#0a0a0a] leading-tight mb-2">
              Before You Go
            </DialogTitle>
            <p className="font-serif italic text-lg text-[#0a0a0a]/50 leading-snug">
              Residency as Infrastructure. Citizenship as Legacy.
            </p>
          </DialogHeader>

          <p className="font-sans text-sm text-[#0a0a0a]/70 leading-relaxed mb-8">
            Most American and Canadian families spend 18 months researching Golden Visa programs before acting. A 30-minute conversation covers Portugal, Greece, and Italy — investment thresholds, tax implications, family eligibility, and the right timeline for your situation.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="/contact"
              onClick={handleClose}
              className="w-full bg-[#0a0a0a] text-white font-sans text-sm font-medium tracking-wide uppercase px-6 py-4 text-center hover:bg-[#0a0a0a]/90 transition-colors"
            >
              Schedule a Private Consultation
            </a>
            <button
              onClick={handleClose}
              className="font-sans text-xs text-[#0a0a0a]/40 hover:text-[#0a0a0a]/70 transition-colors underline"
            >
              No thanks, I'll continue researching
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
