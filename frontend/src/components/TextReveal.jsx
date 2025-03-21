import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const TextReveal = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const words = text.split(" ");

  return (
    <div
      ref={targetRef}
      className={`relative z-0 h-[200vh] bg-white ${className || ""}`} // White background added
    >
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center px-[1rem] py-[5rem]">
        <p className="flex flex-wrap p-5 text-2xl font-bold text-black md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]); // Adjust opacity animation

  return (
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ opacity }}
        className="text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextReveal;
