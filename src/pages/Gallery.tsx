import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "../data/gallery";
import "./Gallery.css";

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [showControls, setShowControls] = useState(true); // ✅ controls visibility
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  // Hide controls after inactivity
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setShowControls(false), 3000);
  };

  // Reset controls when lightbox opens
  useEffect(() => {
    if (selectedIndex !== null) resetControlsTimeout();
  }, [selectedIndex]);

  // Handle keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      resetControlsTimeout();

      if (e.key === "Escape") setSelectedIndex(null);

      if (e.key === "ArrowRight") {
        setDirection(1);
        setSelectedIndex((prev) => (prev! + 1) % galleryItems.length);
      }

      if (e.key === "ArrowLeft") {
        setDirection(-1);
        setSelectedIndex((prev) =>
          prev! === 0 ? galleryItems.length - 1 : prev! - 1
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Handle swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    resetControlsTimeout();
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    resetControlsTimeout();
    touchEndX.current = e.changedTouches[0].clientX;
    if (!touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setDirection(1);
        setSelectedIndex((prev) => (prev! + 1) % galleryItems.length);
      } else {
        setDirection(-1);
        setSelectedIndex((prev) =>
          prev! === 0 ? galleryItems.length - 1 : prev! - 1
        );
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <motion.div
            className="gallery-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Stallion Moments</h1>
            <p>Relive the action, memories, and highlights from our journey.</p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="gallery-section section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="gallery-image-container"
                  onClick={() => {
                    setDirection(1);
                    setSelectedIndex(index);
                  }}
                >
                  <img
                    src={item.image}
                    alt={`Gallery ${item.id}`}
                    className="gallery-image"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence initial={false} custom={direction}>
        {selectedIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            onClick={() => setSelectedIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseMove={resetControlsTimeout} // ✅ mouse wake for desktop
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={galleryItems[selectedIndex].id}
                  src={galleryItems[selectedIndex].image}
                  alt={`Gallery ${galleryItems[selectedIndex].id}`}
                  className="lightbox-image"
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Controls (fade in/out) */}
              <AnimatePresence>
                {showControls && (
                  <>
                    <motion.button
                      className="lightbox-prev"
                      onClick={() => {
                        setDirection(-1);
                        setSelectedIndex(
                          selectedIndex === 0
                            ? galleryItems.length - 1
                            : selectedIndex - 1
                        );
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      ❮
                    </motion.button>
                    <motion.button
                      className="lightbox-next"
                      onClick={() => {
                        setDirection(1);
                        setSelectedIndex(
                          (selectedIndex + 1) % galleryItems.length
                        );
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      ❯
                    </motion.button>
                    <motion.button
                      className="lightbox-close"
                      onClick={() => setSelectedIndex(null)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      ✕
                    </motion.button>
                  </>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
