"use client"

import { useEffect, useState } from "react"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  type: "current" | "past"
}

const experiences: ExperienceItem[] = [
  {
    title: "Junior Research Fellow",
    company: "Indian Institute of Science",
    period: "May 2025 - Present",
    type: "current",
    description: [
      "Optimizing Relational Graph Convolutional Networks (RGCN)",
      "Implementing efficient weight handling strategies",
      "Using In-Memory Computing (IMC) for compressed matrices",
      "Conducting experiments on large-scale datasets",
    ],
  },
  {
    title: "Pre-Doctoral Fellow",
    company: "Indian Institute of Science",
    period: "Nov 2023 - April 2025",
    type: "past",
    description: [
      "Built end-to-end tool for 2.5D system configurations",
      "Implemented PE placement algorithms",
      "Modeled communication costs and floor planning effects",
      "Achieved performance within 5% of optimal",
    ],
  },
  {
    title: "Research Associate",
    company: "Indian Institute of Science",
    period: "Aug 2023 - Oct 2023",
    type: "past",
    description: [
      "Worked with Intel on Performance Analysis Tool for 2.5D",
      "Conducted experiments with Graviton 3 processor",
      "Utilized MATLAB and Python for performance analysis",
    ],
  },
  {
    title: "Embedded Systems Designer",
    company: "Kashovatics",
    period: "Sep 2019 - July 2023",
    type: "past",
    description: [
      "Developed automatic reclosure circuit system",
      "Implemented designs using C, C++, and MATLAB",
      "Performed schematic capture and PCB layout",
      "Collaborated on hardware and software architectures",
    ],
  },
]

export default function Experience() {
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

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      exp.type === "current"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Briefcase size={24} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={16} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700">
                        <span className="text-blue-600 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
