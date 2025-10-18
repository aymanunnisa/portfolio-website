"use client"

import { useEffect, useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export default function Contact() {
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

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "aymanunisa@gmail.com",
      href: "mailto:aymanunisaa@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-91499-05652",
      href: "tel:+919149905652",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aymanunnisa",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/aymanunnisa",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.href}
                className={`p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-500 group ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                aria-label={link.label}
              >
                <Icon size={24} />
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            I'm always interested in hearing about new research opportunities and collaborations.
          </p>
          <a
            href="mailto:aymanunnissa@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Send me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
