import { BookOpen } from "lucide-react";

export default function Footer(){
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div id="logo" className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <BookOpen className="text-white w-6 h-6"/>
              </div>
              <span className="text-xl font-bold">Livraria</span>
            </div>
            <p className="text-gray-400">Conectando pessoas às histórias que transformam vidas há mais de 20 anos.</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Catálogo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lançamentos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ofertas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Atendimento</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Receba novidades e promoções</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu email"
                className="
                  flex-1 px-4 py-2
                  bg-gray-800 border
                  border-gray-700 rounded-l-lg
                  focus:outline-none focus:ring-2
                  focus:ring-blue-500
                "
              />
              <button
                className="
                  bg-gradient-to-r from-blue-600 to-purple-600
                  px-4 py-2 rounded-r-lg
                  hover:shadow-lg transition-all duration-300
                "
              >
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Livraria. Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
