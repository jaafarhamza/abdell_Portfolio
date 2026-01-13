"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Start showing content after loading screen
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={
        isReady
          ? { filter: "blur(0px)", opacity: 1 }
          : { filter: "blur(20px)", opacity: 0 }
      }
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
