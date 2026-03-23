import { motion } from "framer-motion";

export function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
        {/* Outer glowing rings */}
        <motion.div
          className="absolute w-32 h-32 rounded-full border-t-2 border-r-2 border-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-24 h-24 rounded-full border-b-2 border-l-2 border-secondary"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Inner pulsing core */}
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-secondary blur-sm"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-8 h-8 rounded-full bg-background"
        />
      </div>
    </motion.div>
  );
}
