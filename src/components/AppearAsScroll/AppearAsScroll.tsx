import React, { useRef, useState, useEffect } from "react";
import styles from "./appearasscroll.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
  hasAnimatedFirstDiv: boolean;
  setHasAnimatedFirstDiv: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstDivFromPage: boolean;
}

export default function AppearAsScroll({
  children,
  hasAnimatedFirstDiv,
  setHasAnimatedFirstDiv,
  isFirstDivFromPage,
}: ScrollAnimationProps) {
  const elementRef = useRef(null); // Reference to the DOM element
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimatedFirstDiv(true)
            setHasAnimated(true);
            if (elementRef.current) {
              observer.unobserve(entry.target);
            } // Stop observing after it becomes visible
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 20% of the element is in view
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observe the element
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current); // Cleanup observer on component unmount
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={elementRef}
      className={`${styles.scroll_animation} ${
        hasAnimated ? styles.visible : ""
      }`}
    >
      {children}
    </div>
  );
}
