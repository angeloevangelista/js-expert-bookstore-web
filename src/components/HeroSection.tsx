import { Heart } from "lucide-react";

export default function HeroSection () {
  return (
    <section className="relative overflow-hidden py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 'translate-x-0 opacity-100'`}>
              <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Descubra sua 
                  <span className="block bg-gradient-to-r from-blue-600 to bg-purple-600 bg-clip-text text-transparent">
                    próxima aventura
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Milhares de livros esperando para transformar sua jornada. 
                  Desde clássicos atemporais até lançamentos exclusivos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="
                  bg-gradient-to-r 
                  from-blue-600 to-purple-600
                  text-white px-8 py-4 
                  rounded-full font-semibold hover:shadow-xl
                  transform hover:scale-105 transition-all 
                  duration-300
                  cursor-pointer
                  "
                  >
                  Explorar catalogo
                </button>
                <button 
                  className="
                  border-2
                  border-gray-300
                  text-gray-700 px-8 py-4
                  rounded-full font-semibold
                  hover:border-blue-600
                  hover:text-blue-600
                  transition-all
                  duration-300
                  cursor-pointer
                  "
                  >
                  Visitar Loja
                </button>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K</div>
                  <div className="text-gray-600">Livros</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">15K+</div>
                  <div className="text-gray-600">Clientes</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.9★</div>
                  <div className="text-gray-600">Avaliação</div>
                </div>
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 'translate-x-0 opacity-100'`}>
              <div className="relative">
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                    alt="Pessoa lendo"
                    className="w-full h-96 object-cover rounded-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="text-red-500 w-5 h-5"/>
                      <span className="font-semibold">Mais de 1M de leitores</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}