import { motion } from "framer-motion";
import { useState } from "react";
import "./test.css"

const toggleVariants = {
  off: {
    stroke: "grey",
    pathLength: 0.2,
    pathOffset: 0.2,
    transition: {
      duration: 0.23,
      ease: "circOut"
    }
  },

  on: {
    stroke: "#BF4D00",
    pathLength: 0.2,
    pathOffset: 0.6,
    transition: {
      duration: 0.23,
      ease: "circOut"
    }
  }
};

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="example">
      <p className="label">Toggle</p>
      <div className="toggle" onClick={() => setIsOn(!isOn)}>
        <svg viewBox="0 0 50 30" >
          <motion.path
            strokeLinecap="round"
            stroke="white"
            strokeWidth={10}
            d="M 11, 15 L 30, 15"
          />
          <motion.path
            variants={toggleVariants}
            animate={isOn ? "on" : "off"}
            strokeWidth={10}
            strokeLinecap="round"
            d="M 5, 15 L 36, 15"
          />
        </svg>
      </div>
    </div>
  );
}
