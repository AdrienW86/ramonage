'use client';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
export function Reveal({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={false}
        whileInView={reduced ? undefined : { opacity: [0.85, 1], y: [12, 0] }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
