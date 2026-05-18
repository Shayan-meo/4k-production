"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

interface PageTransitionProps {
  readonly children: ReactNode;
}

/**
 * Soft fade-up when the route changes. Pure CSS transition.
 * Honors prefers-reduced-motion via globals.css (.reveal rule).
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(false);
    // Next paint — let the browser register the hidden state first.
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  return (
    <div className={`reveal reveal--fade ${visible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
