import { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/solid"; 

export default function LikeButton() {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      className="relative flex items-center gap-2 p-2 rounded-lg bg-gray-200 hover:bg-gray-300"
      onClick={() => setAnimate(true)}
    >
      <div className="relative">
        {animate && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onAnimationComplete={() => setAnimate(false)}
          >
            <HeartIcon className="w-6 h-6 text-red-400" />
          </motion.div>
        )}
        <HeartIcon className="w-6 h-6 text-red-600 relative z-10" />
      </div>
      <span className="text-gray-700 font-medium">Like</span>
    </button>
  );
}
