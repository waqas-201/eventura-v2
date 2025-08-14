'use client';
import { type JSX, useEffect, useState, ReactNode } from 'react';
import { motion, MotionProps } from 'motion/react';

export type ColoredChunk = {
  text: string;
  color?: string;
};

export type TextScrambleProps = {
  chunks: ColoredChunk[]; // Pass colored chunks here
  duration?: number;
  speed?: number;
  characterSet?: string;
  as?: React.ElementType;
  className?: string; // Tailwind classes controlled from outside
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function TextScramble({
  chunks,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  className = '', // default empty
  as: Component = 'p',
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const MotionComponent = motion.create(Component as keyof JSX.IntrinsicElements);
  const [displayText, setDisplayText] = useState<ReactNode>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const scramble = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const fullText = chunks?.map(c => c.text).join('');
    const steps = duration / speed;
    let step = 0;

    const interval = setInterval(() => {
      const progress = step / steps;
      let currentIndex = 0;

      const elems: ReactNode[] = chunks.map((chunk, chunkIndex) => {
        let scrambled = '';

        for (let i = 0; i < chunk.text.length; i++) {
          if (chunk.text[i] === ' ') {
            scrambled += ' ';
          } else if (progress * fullText.length > currentIndex) {
            scrambled += chunk.text[i];
          } else {
            scrambled += characterSet[
              Math.floor(Math.random() * characterSet.length)
            ];
          }
          currentIndex++;
        }

        return (
          <span
            key={chunkIndex}
            className={className}
            style={{ color: chunk.color || 'inherit' }}
          >
            {scrambled}
          </span>
        );
      });

      setDisplayText(elems);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(
          chunks.map((chunk, i) => (
            <span
              key={i}
              className={className}
              style={{ color: chunk.color || 'inherit' }}
            >
              {chunk.text}
            </span>
          ))
        );
        setIsAnimating(false);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (trigger) scramble();
  }, [trigger]);

  return <MotionComponent {...props}>{displayText}</MotionComponent>;
}
