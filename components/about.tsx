"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div
            className={`p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="mb-4">
              <Image
                src="/IISc_Master_Seal_Transparent.png"
                alt="IISc"
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Current Role</h3>
            <p className="text-gray-700">
              Junior Research Fellow at Indian Institute of Science, Bangalore
            </p>
            <p className="text-sm text-gray-500 mt-2">May 2025 - Present</p>
          </div>

          <div
            className={`p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-500 delay-100 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="mb-4">
              <Image
                src="/unnamed.png"
                alt="University of Kashmir"
                width={60}
                height={60}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
            <p className="text-gray-700">
              BTech in Electronics and Communication Engineering
            </p>
            <p className="text-sm text-gray-500 mt-2">University of Kashmir (2018-2023)</p>
          </div>

          <div
            className={`p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-500 delay-200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">Bengaluru, India</p>
            <p className="text-sm text-gray-500 mt-2">Originally from Kashmir</p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Focus</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I specialize in optimizing computing systems with a focus on:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Chiplet Design & 2.5D Systems:</strong> Cost and performance optimization
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Graph Neural Networks:</strong> Optimizing Relational GCNs
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>In-Memory Computing:</strong> Improved scalability and performance
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>
                <strong>Embedded Systems:</strong> Hardware design and IoT applications
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
