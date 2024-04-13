import React from "react";
import { motion } from "framer-motion";

function Card({ text, index }) {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: index % 2 === 0 ? 500 : -500
      }}
      whileInView={{
        opacity: 4,
        x: 0, // Slide in to its original position
        transition: {
          duration: 3 // Animation duration
        }
      }}
      viewport={{ once: true }}
    >
      <p className="card-text">{text}</p>
    </motion.div>
  );
}

export default Card;