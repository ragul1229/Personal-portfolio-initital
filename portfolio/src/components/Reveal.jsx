import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children, className = "", delay = 0, as = "div" }) => {
  const reduceMotion = useReducedMotion();
  const MotionElement = motion[as] || motion.div;

  return (
    <MotionElement
      className={className}
      initial={reduceMotion ? false : { y: 22 }}
      whileInView={reduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionElement>
  );
};

export default Reveal;
