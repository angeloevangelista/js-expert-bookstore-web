import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact () {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className={
            `space-y-8 transform transition-all duration-1000 translate-x-0 opacity-100`
          }>
            <h3 className="text-4xl font-bold mb-6">Entre em contato</h3>
            <p className="text-xl text-gray-300">Visite nossa loja ou entre em contato! Estamos aqui para ajudar você</p>

            <div className="space-y-6">
              {/* address */}
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-gray-300">Rua das Letras, 123 - Centro, São Paulo - SP</p>
                </div>
              </div>
            

              {/* phone */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-400 p-3 rounded-full">
                    <Phone className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Telefone</h4>
                    <p className="text-gray-300">(11) 99999-9999</p>
                  </div>
                </div>
              </div>
      

              {/* mail */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-400 p-3 rounded-full">
                    <Mail className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-300">contato@livraria.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={
            `bg-white/10 backdrop-blur-sm 
            rounded-2xl p-8 transform transition-all
            duration-1000 delay-300 translate-x-0
            opacity-100
            `
          }>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                type="text" 
                placeholder="Seu nome completo" 
                className="
                  w-full px-4 py-3
                  bg-white/20 border border-white/30
                  rounded-lg focus:outline-none focus:ring-2
                  focus:ring-blue-500 text-white placeholder-gray-300
                "
                />
              </div>


              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="
                    w-full px-4 py-3
                    bg-white/20 border border-white/30
                    rounded-lg focus:outline-none focus:ring-2
                    focus:ring-blue-500 text-white placeholder-gray-300
                  "
                />
              </div>


              <div>
                <label className="block text-sm font-medium mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  placeholder="Como podemos ajudar você?"
                  className="
                    w-full px-4 py-3
                    bg-white/20 border border-white/30
                    rounded-lg focus:outline-none focus:ring-2
                    focus:ring-blue-500 text-white placeholder-gray-300
                  "
                />
              </div>
            
              
              <button
              className="
                w-full bg-gradient-to-r
                from-blue-600 to-purple-600
                text-white py-3 px-6 rounded-lg
                font-semibold hover:shadow-xl transform hover:scale-105 transition-all
                duration-300 cursor-pointer
              "
              >
                Enviar mensagem
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}