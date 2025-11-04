"use client";
import React from "react";

interface AnimatedLinkProps {
  text: string;
  href?: string;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ text, href = "#" }) => {
  return (
    <a href={href} className="group relative inline-flex overflow-hidden">
      {text.split("").map((char, index) => {
        const isSpace = char === " ";

        return (
          <span
            key={index}
            className={`relative inline-block h-full overflow-hidden ${
              isSpace ? "w-[0.5em]" : ""
            }`}
          >
            {/* Jeśli to spacja, po prostu renderujemy niewidzialny znak */}
            {isSpace ? (
              <span className="block">&nbsp;</span>
            ) : (
              <>
                <span
                  className="
                    block transition-transform duration-400 ease-out
                    group-hover:-translate-y-full
                  "
                  style={{ transitionDelay: `${index * 10}ms` }}
                >
                  {char}
                </span>
                <span
                  className="
                    absolute top-full left-0 block transition-transform duration-400 ease-out
                    group-hover:-translate-y-full
                  "
                  style={{ transitionDelay: `${index * 10}ms` }}
                >
                  {char}
                </span>
              </>
            )}
          </span>
        );
      })}
    </a>
  );
};

export default AnimatedLink;
