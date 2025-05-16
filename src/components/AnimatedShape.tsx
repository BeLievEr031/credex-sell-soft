
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedShapeProps {
  path: string;
  className?: string;
  positionX: number;
  positionY: number;
  mousePosition: { x: number; y: number };
  reverse?: boolean;
  delay?: number;
}

const AnimatedShape: React.FC<AnimatedShapeProps> = ({
  path,
  className,
  positionX,
  positionY,
  mousePosition,
  reverse = false,
  delay = 0,
}) => {
  const multiplier = reverse ? -1 : 1;
  const moveX = mousePosition.x * 15 * multiplier;
  const moveY = mousePosition.y * 15 * multiplier;

  return (
    <svg
      className={cn(
        "absolute w-64 h-64 opacity-20 transition-transform duration-700 ease-out",
        className
      )}
      style={{ 
        transform: `translate(${moveX}px, ${moveY}px)`,
        top: `${positionY}%`,
        left: `${positionX}%`,
        transitionDelay: `${delay}ms`
      }}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="currentColor" d={path} transform="translate(100 100)" />
    </svg>
  );
};

export default AnimatedShape;
