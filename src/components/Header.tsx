"use client"
import { useState } from "react"
import { BookOpen, Menu, X } from "lucide-react"
import DesktopMenu from "./DesktopMenu"
import MobileMenu from "./MobileMenu"

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between"> {/*View comeca aqui*/}
          <div className="flex items-center space-x-3"> {/*View da logo comeca aqui*/}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Livraria
              </h1>
              <p className="text-sm text-gray-600">Seu universo literario</p>
            </div>
          </div>{/*View da logo termina aqui*/}

          {/*DesktopMenu */}
          <DesktopMenu />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div> {/*View termina aqui aqui*/}

        {/*MobileMenu */}
        {isMenuOpen && (
          <MobileMenu />
        )}
      </div>
    </header>
  )
}
