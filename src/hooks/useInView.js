import { useState, useEffect, useRef } from 'react';

/**
 * useInView - Custom IntersectionObserver Hook
 *
 * Detects when an element scrolls into the viewport.
 * Triggers only once (unobserves after first intersection)
 * to support one-time entrance animations.
 *
 * @param {IntersectionObserverInit} options - IntersectionObserver options
 * @returns {[React.RefObject, boolean]} - [ref to attach, whether element is in view]
 *
 * @example
 * const [ref, isInView] = useInView({ threshold: 0.2 });
 * return <div ref={ref} className={isInView ? 'animate-fadeIn' : 'opacity-0'} />;
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

export default useInView;
