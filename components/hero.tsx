"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Code, Cpu } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-32 right-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        >
          <Sparkles className="text-blue-400 w-8 h-8 opacity-30" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 right-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          <Code className="text-purple-400 w-10 h-10 opacity-30" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-20"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
        >
          <Cpu className="text-pink-400 w-9 h-9 opacity-30" />
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.p 
                className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2 flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4" />
                Welcome to my portfolio
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Ayman Un Nisa
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Junior Research Fellow at IISc Bangalore
              </motion.p>
            </motion.div>

            <motion.p 
              className="text-lg text-gray-700 leading-relaxed max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Passionate about optimizing computing systems and exploring innovative solutions in chiplet design, graph neural networks, and embedded systems.
            </motion.p>

            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg relative overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get in Touch</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/aymanunnisa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgb(37, 99, 235)",
                  color: "white",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative w-64 h-80 md:w-72 md:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Image Container */}
              <motion.div 
                className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ 
                  rotate: [0, -2, 2, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <Image
                  src="/AYMAN_PHOTOGRAPH.jpeg"
                  alt="Ayman Un Nisa"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
