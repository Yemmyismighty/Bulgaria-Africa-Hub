"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  icon: React.ElementType
  title: string
  description: string
  bgColor: string
}

export function InfoCard({ icon: Icon, title, description, bgColor }: InfoCardProps) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={cn(
        "relative rounded-xl p-8 transition-all duration-300 cursor-pointer overflow-hidden",
        bgColor
      )}
    >
      {/* Icon */}
      <motion.div
        variants={{
          rest: { y: 0, opacity: 1 },
          hover: { y: -20, opacity: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-6"
      >
        <Icon className="w-6 h-6 text-foreground" />
      </motion.div>

      {/* Text */}
      <motion.div
        variants={{
          rest: { y: 0 },
          hover: { y: -40 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-xl">{description}</p>
      </motion.div>
    </motion.div>
  )
}
