"use client"

import { useEffect, useState } from "react"

interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}

const projects: Project[] = [
  {
    title: "Cost-aware PE Placement in 2.5D Systems",
    description: "Comprehensive tool for cost-efficient 2.5D chiplet system designs.",
    technologies: ["Python", "MATLAB", "BookSim", "System Design"],
    highlights: [
      "Practical design constraint placement",
      "Within 5% of optimal performance",
      "Cycle-accurate simulator validation",
    ],
  },
  {
    title: "Saffron Grading System",
    description: "Multi-apparatus device for saffron purity and grading.",
    technologies: ["Machine Learning", "Hardware Design", "Python"],
    highlights: [
      "Patent-pending technology",
      "Compact mechatronic design",
      "ML-based purity classification",
    ],
  },
  {
    title: "Automatic Re-closure Circuit Protection",
    description: "Electric shock protection system with automatic re-closure.",
    technologies: ["Circuit Design", "Hardware", "Embedded Systems"],
    highlights: [
      "Patent-pending innovation",
      "Improved shock prevention",
      "Real-world implementation",
    ],
  },
  {
    title: "Text Classification for Sentiment Analysis",
    description: "Character-level CNN and transformer models comparison.",
    technologies: ["PyTorch", "Deep Learning", "NLP", "Python"],
    highlights: [
      "Character-level CNN implementation",
      "CANINE transformer model",
      "Yelp and Amazon datasets",
    ],
  },
  {
    title: "Edge-preserving Image Smoothing",
    description: "Fast global smoothing using weighted square means.",
    technologies: ["Image Processing", "MATLAB", "Algorithm Design"],
    highlights: [
      "Weighted square means",
      "Gradient-based denoising",
      "Noise model comparison",
    ],
  },
  {
    title: "Smart Irrigation System (IoT)",
    description: "IoT-based optimal watering schedule calculator.",
    technologies: ["NodeMCU", "Arduino", "ThinkSpeak", "IoT"],
    highlights: [
      "Sensor-based moisture detection",
      "Cloud integration",
      "Automated scheduling",
    ],
  },
]

export default function Projects() {
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

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Projects & Research
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-600 mb-2">Highlights:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-blue-600">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
