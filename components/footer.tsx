"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-gray-900 font-semibold">Ayman Un Nisa</p>
            <p className="text-sm text-gray-600">Junior Research Fellow at IISc Bangalore</p>
          </div>

          <div className="text-center text-sm text-gray-600">
            <p>© {currentYear} Ayman Un Nisa. All rights reserved.</p>
          </div>

          <div className="text-sm text-gray-600">
            <p>Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
