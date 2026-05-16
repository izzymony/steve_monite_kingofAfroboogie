import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"

type Props = {
  entered: boolean;
  onEnter: () => void;
}

const IntroScreen = ({ entered, onEnter }: Props) => {
  return (
    <AnimatePresence>
      {!entered && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Cinematic Background Image with slow zoom */}
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/Alt-Image-1-S.webp"
              alt="Steve Monite Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
          </motion.div>

          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-20 z-10" />

          {/* Content */}
          <div className="relative z-20 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mb-4"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent-orange">
                The Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none"
            >
              STEVE <br />
              <span className="text-gradient-orange">MONITE</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <button
                onClick={onEnter}
                className="group relative px-12 py-5 rounded-full glass border border-white/10 text-white font-bold uppercase tracking-[0.3em] text-xs overflow-hidden transition-all hover:border-accent-orange/50 active:scale-95"
              >
                <div className="absolute inset-0 bg-accent-orange/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10">Enter Records</span>
              </button>
            </motion.div>

            {/* Subtle disclaimer */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-12 text-[8px] font-bold uppercase tracking-[0.2em] text-white/40"
            >
              Headphones Recommended • High Quality Audio
            </motion.p>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-12 left-12 w-24 h-[1px] bg-white/10 hidden md:block" />
          <div className="absolute top-12 left-12 w-[1px] h-24 bg-white/10 hidden md:block" />
          <div className="absolute bottom-12 right-12 w-24 h-[1px] bg-white/10 hidden md:block" />
          <div className="absolute bottom-12 right-12 w-[1px] h-24 bg-white/10 hidden md:block" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroScreen