import { Truck, Users } from "lucide-react"

/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="container mx-auto">
        <div className="grid  lg:grid-cols-2 gap-12 items-center">
          <div className="transform transition-all duration-1000 translate-x-0 opacity-100">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop"
              alt="Interior de uma livraria"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
          </div>
          <div className="space-y-6 transform transition-all duration-1000 delay translate-x-0 opacity-100">
            <h3 className="text-4xl font-bold mb-6">Sobre a livraria</h3>
            <p className=" text-lg text-gray-700 leading-relaxed">
              Há mais de 20 anos, somos o ponto de encontro dos amantes da literatura.
              Nossa missão é conectar pessoas às histórias que transformam vidas.
            </p>

            <p className=" text-lg text-gray-700 leading-relaxed">
              Com um acervo cuidadosamente selecionado e uma equipe apaixonada por livros,
              oferecemos não apenas produtos, mas experiências literárias únicas.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h4 className="font-bold text-xl mb-2">Comunidade</h4>
                <p className="text-gray-600">Mais de 15 mil leitores ativos</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Truck className="w-12 h-12 text-green-600 mx-auto mb-3"/>
                <h4 className="font-bold text-xl mb-2">Entrega</h4>
                <p className="text-gray-600">Frete grátis acima de R$ 99,00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
