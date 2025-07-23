"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: isOpen ? 0 : 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gray-900 p-6 rounded-lg w-full max-w-md border border-gray-700"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}
