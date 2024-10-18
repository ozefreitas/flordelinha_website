import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./appearasscroll.module.css";

interface ScrollAnimationProps {
  children: React.ReactNode;
}

export default function AppearAsScroll({
  children,
}: Readonly<ScrollAnimationProps>) {
  const elementRef = useRef(null); // Reference to the DOM element
  const [hasAnimated, setHasAnimated] = useState(false);
  const location = useLocation()

  useEffect(() => {
    setHasAnimated(false)
  }, [location.pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
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
