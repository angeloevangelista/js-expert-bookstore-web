export default function MobileMenu() {
  return (
    <nav className="md:hidden mt-4 pb-4 border-t border-gray-200">
      <div className="flex flex-col space-y-4 pt-4">
          <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Início</a>
          <a href="#books" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Livros</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sobre</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contato</a>
          <button
            className="
              bg-gradient-to-r 
              from-blue-600 
              to-purple-600 
              text-white px-6 py-2 rounded-full
              w-fit
            "
          >
            Catalogo Online
          </button>
      </div>
    </nav>
  )
}