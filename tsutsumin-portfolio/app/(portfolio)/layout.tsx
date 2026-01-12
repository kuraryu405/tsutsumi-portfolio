'use client';

import { ReactNode, useEffect } from "react";
import ReactGA from "react-ga4";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Google Analytics initialization
    ReactGA.initialize("G-SHLMF6YJTB");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return <>{children}</>;
}
