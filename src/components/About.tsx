import React from 'react';
import { Heart, Star, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800"
            alt="Notre histoire"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wide">
              Notre Histoire
            </h1>
            <p className="text-lg text-white font-light">
              L'élégance algérienne rencontre la mode internationale
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand Story */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide mb-6">ÉLÉGANCE</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Née de la passion pour la mode féminine moderne, ÉLÉGANCE incarne l'esprit de la femme algérienne contemporaine. 
              Nous créons des collections qui célèbrent la beauté, l'indépendance et l'élégance naturelle de chaque femme.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Notre vision"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Notre Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Nous croyons que chaque femme mérite de se sentir belle et confiante. 
                Notre mission est de démocratiser la mode de qualité en Algérie, en proposant 
                des pièces tendance et intemporelles à des prix accessibles.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Inspirées par les grandes maisons de couture internationales et enrichies 
                par notre héritage culturel, nos collections reflètent la modernité 
                tout en respectant nos valeurs traditionnelles.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide mb-6">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Passion</h3>
              <p className="text-gray-600 text-sm">
                Chaque pièce est sélectionnée avec amour et attention aux détails
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Qualité</h3>
              <p className="text-gray-600 text-sm">
                Des matières premières soigneusement choisies pour votre confort
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">
                Un service client irréprochable et une expérience d'achat unique
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Communauté</h3>
              <p className="text-gray-600 text-sm">
                Créer des liens authentiques avec nos clientes
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-wide mb-6">Notre Équipe</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Une équipe passionnée et dévouée, unie par l'amour de la mode et le désir d'offrir 
              le meilleur à nos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina Benali",
                role: "Directrice Créative",
                image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Sarah Meziani",
                role: "Responsable Collections",
                image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                name: "Lydia Khelifi",
                role: "Customer Experience",
                image: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium mb-1">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-light mb-2">5000+</div>
                <div className="text-gray-600 text-sm">Clientes Satisfaites</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">300+</div>
                <div className="text-gray-600 text-sm">Modèles Disponibles</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">48h</div>
                <div className="text-gray-600 text-sm">Livraison Express</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-2">30j</div>
                <div className="text-gray-600 text-sm">Retours Gratuits</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;