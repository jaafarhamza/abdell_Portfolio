"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showBoom, setShowBoom] = useState(false);

  useEffect(() => {
    // Show boom effect after 2.7s
    const boomTimer = setTimeout(() => {
      setShowBoom(true);
    }, 2700);

    // Hide loading screen after 3s
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(boomTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Center icon
  const centerIcon = "/HeroSection/icons/lasso.png";

  // Orbiting icons
  const orbitingIcons = [
    { src: "/HeroSection/icons/pen.png", angle: 0 },
    { src: "/HeroSection/icons/pen-tool.png", angle: 90 },
    { src: "/HeroSection/icons/crop.png", angle: 180 },
    { src: "/HeroSection/icons/anchor-points-adjustment.png", angle: 270 },
  ];

  const orbitRadius = 80; // Distance from center

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black overflow-hidden"
        >
          {/* Full Page Boom Flash Effect */}
          {showBoom && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 3, opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-white"
            />
          )}

          <div className="relative w-64 h-64">
            {/* Center Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: 0 }}
              animate={
                showBoom
                  ? {
                      scale: [1, 1.5, 0],
                      opacity: [1, 1, 0],
                      rotate: 360,
                    }
                  : {
                      scale: 1,
                      opacity: 1,
                      rotate: 0,
                    }
              }
              transition={{
                duration: showBoom ? 0.6 : 0.9,
                ease: "easeOut",
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.8))",
              }}
            >
              <Image
                src={centerIcon}
                alt=""
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </motion.div>

            {/* Orbiting Icons */}
            {orbitingIcons.map((icon, index) => {
              const angleInRadians = (icon.angle * Math.PI) / 180;
              const x = Math.cos(angleInRadians) * orbitRadius;
              const y = Math.sin(angleInRadians) * orbitRadius;

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    showBoom
                      ? {
                          scale: [1, 2, 0],
                          opacity: [1, 1, 0],
                          x: [x, x * 5],
                          y: [y, y * 5],
                          rotate: 360,
                        }
                      : {
                          scale: 1,
                          opacity: 1,
                          x: x,
                          y: y,
                          rotate: [0, 360],
                        }
                  }
                  transition={
                    showBoom
                      ? {
                          duration: 0.3,
                          ease: "easeOut",
                        }
                      : {
                          delay: 0.2,
                          duration: 0.5,
                          rotate: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }
                  }
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.6))",
                  }}
                >
                  <Image
                    src={icon.src}
                    alt=""
                    width={50}
                    height={50}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                </motion.div>
              );
            })}

            {/* Center Glow Effect */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={
                showBoom
                  ? { scale: 4, opacity: 0 }
                  : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }
              }
              transition={
                showBoom
                  ? { duration: 0.3 }
                  : {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
              }
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-black rounded-full blur-3xl"
            />

            {/* Orbit Path (subtle circle) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={
                showBoom ? { opacity: 0, scale: 2 } : { opacity: 0.2, scale: 1 }
              }
              transition={{ duration: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-gray-800/30 rounded-full"
            />
          </div>

          {/* Logo Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute bottom-40"
          >
            <div className="relative inline-block">
              <span className="text-3xl sm:text-4xl font-bold tracking-wide text-white">
                abdell
              </span>
              <span className="absolute -right-16 -bottom-2 font-dancing text-3xl sm:text-4xl text-blue-500">
                design
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
