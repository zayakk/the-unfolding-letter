import { useState, useEffect } from "react";
import { Letter } from "./Letter";
import { Heart } from "lucide-react";

export const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [sealBroken, setSealBroken] = useState(false);

  useEffect(() => {
    // Auto-open sequence
    const sealTimer = setTimeout(() => setSealBroken(true), 800);
    const openTimer = setTimeout(() => setIsOpen(true), 1500);
    const letterTimer = setTimeout(() => setShowLetter(true), 2300);

    return () => {
      clearTimeout(sealTimer);
      clearTimeout(openTimer);
      clearTimeout(letterTimer);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4">
      {/* Floating hearts decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${20 + (i % 3) * 10}px`,
              height: `${20 + (i % 3) * 10}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Sparkles */}
      {showLetter && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full animate-sparkle"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative" style={{ perspective: "1000px" }}>
        {/* Envelope Container */}
        <div
          className={`relative transition-transform duration-1000 ${
            showLetter ? "translate-y-32 scale-90 opacity-50" : ""
          }`}
        >
          {/* Envelope Back */}
          <div className="relative w-80 h-52 sm:w-96 sm:h-60 bg-envelope rounded-lg envelope-shadow">
            {/* Inner shadow for depth */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-envelope-dark/20" />

            {/* Letter inside (visible through opening) */}
            {!showLetter && (
              <div className="absolute inset-x-4 top-4 bottom-4 bg-paper rounded opacity-60" />
            )}
          </div>

          {/* Envelope Flap */}
          <div
            className={`absolute -top-0 left-0 right-0 h-28 sm:h-32 origin-top ${
              isOpen ? "animate-flap-open" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              zIndex: isOpen ? 0 : 20,
            }}
          >
            {/* Front of flap */}
            <div
              className="absolute inset-0 bg-envelope-flap"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Flap texture/gradient */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-envelope/50 to-transparent"
                style={{ clipPath: "polygon(0 0, 50% 100%, 100% 0)" }}
              />
            </div>

            {/* Back of flap (visible when opened) */}
            <div
              className="absolute inset-0 bg-envelope-dark"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            />

            {/* Wax Seal */}
            {!sealBroken && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 z-30">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-wax-seal rounded-full wax-seal-shadow flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" fill="currentColor" />
                </div>
              </div>
            )}

            {sealBroken && !isOpen && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 z-30 animate-seal-break">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-wax-seal rounded-full wax-seal-shadow flex items-center justify-center">
                  <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" fill="currentColor" />
                </div>
              </div>
            )}
          </div>

          {/* Envelope Front (covers the bottom) */}
          <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-36 bg-envelope rounded-b-lg z-10">
            <div className="absolute inset-0 bg-gradient-to-t from-envelope-dark/10 to-transparent rounded-b-lg" />
          </div>
        </div>

        {/* Letter */}
        {showLetter && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 animate-letter-rise z-30">
            <Letter />
          </div>
        )}
      </div>
    </div>
  );
};
