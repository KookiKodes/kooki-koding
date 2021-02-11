//* Packages
import React from "react";
import { motion } from "framer-motion";

interface Props {
  message: string;
}

export default function MessageModal({ message }: Props) {
  return (
    <motion.div className="absolute w-96 h-3/6">
      <h1>{message}</h1>
    </motion.div>
  );
}
