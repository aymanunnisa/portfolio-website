"use client"

import { useEffect, useState } from "react"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "C/C++", "VHDL", "Arduino", "HTML/CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn"],
  },
  {
    category: "Tools & Software",
    skills: ["MATLAB", "Simulink", "KiCad", "Eagle CAD", "MultiSim", "Proteus", "VS Code"],
  },
  {
    category: "Specializations",
    skills: [
      "Chiplet Design",
      "Graph Neural Networks",
      "In-Memory Computing",
      "Embedded Systems",
      "IoT",
      "Machine Learning",
      "Circuit Design",
      "PCB Layout",
    ],
  },
]

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Achievements & Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <span className="text-blue-600 text-2xl">★</span>
              <div>
                <p className="font-semibold text-gray-900">Walmart IISc Pre-doctoral Fellowship</p>
                <p className="text-sm text-gray-600">2024</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-2xl">★</span>
              <div>
                <p className="font-semibold text-gray-900">Kotak IISc AI-ML Fellowship</p>
                <p className="text-sm text-gray-600">2023</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-2xl">★</span>
              <div>
                <p className="font-semibold text-gray-900">Merit-based Scholarship</p>
                <p className="text-sm text-gray-600">Ministry of Minority Affairs (2019-2022)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-blue-600 text-2xl">★</span>
              <div>
                <p className="font-semibold text-gray-900">Best Prototype Designer Award</p>
                <p className="text-sm text-gray-600">Kashovatics 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
