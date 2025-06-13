import React from 'react';
import './App.css';
import eiffelTower from './assets/eiffel-tower.jpg';
import burjKhalifa from './assets/burj-khalifa.jpg';
import tajMahal from './assets/taj-mahal.jpg';
import holbornLogo from './assets/holborn-properties-logo.png';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top bar with contact info */}
          <div className="flex justify-between items-center py-2 text-sm border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">USA OFFICE</div>
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+1 239 326 2111</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs">UK OFFICE</div>
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+44 (0)161 250 5300</span>
              </div>
            </div>
            <div className="text-sm">EN</div>
          </div>
          
          {/* Main navigation */}
          <nav className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-green-600">
              <img src={holbornLogo} alt="Holborn Properties Logo" className="h-12" />
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Partners</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${eiffelTower})`,
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="text-white max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Established in 2006, <span className="font-bold">Holborn Properties International</span> is the trusted source and number one choice for property acquisition across a range of global markets.
            </h1>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center mx-auto">
              VIEW OUR FULL PROPERTY PORTFOLIO
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light text-center mb-12 text-gray-800">Featured Properties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Property 1 - Eiffel Tower */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={eiffelTower} 
                alt="Luxury Property in Paris" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Penthouse - Paris</h3>
                <p className="text-gray-600 mb-4">
                  Exquisite penthouse with stunning views of the Eiffel Tower. This architectural masterpiece offers unparalleled luxury in the heart of Paris.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Paris, France
                </div>
              </div>
            </div>

            {/* Property 2 - Burj Khalifa */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={burjKhalifa} 
                alt="Luxury Property in Dubai" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sky Villa - Dubai</h3>
                <p className="text-gray-600 mb-4">
                  Ultra-modern sky villa in the world's tallest building. Experience luxury living at unprecedented heights with panoramic city views.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Dubai, UAE
                </div>
              </div>
            </div>

            {/* Property 3 - Taj Mahal */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={tajMahal} 
                alt="Luxury Property in Agra" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Heritage Palace - Agra</h3>
                <p className="text-gray-600 mb-4">
                  Magnificent heritage palace with views of the iconic Taj Mahal. A rare opportunity to own a piece of history in this UNESCO World Heritage city.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  Agra, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8 text-gray-800">About Holborn Properties International</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With nearly two decades of experience in the luxury real estate market, we specialize in connecting discerning clients with exceptional properties across the globe. Our portfolio spans from iconic urban penthouses to historic palaces, each representing the pinnacle of luxury living.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of international real estate experts provides personalized service, ensuring that every transaction meets the highest standards of excellence and discretion that our clients expect.
            </p>
          </div>
        </div>
      </section>

      {/* As Seen In Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center mb-12 text-gray-800">As Seen In</h2>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold text-gray-600">GQ</div>
            <div className="text-2xl font-bold text-gray-600">ARCHITECTURAL DIGEST</div>
            <div className="text-2xl font-bold text-gray-600">INTERNATIONAL PROPERTY & TRAVEL</div>
            <div className="text-2xl font-bold text-gray-600">TATLER</div>
            <div className="text-2xl font-bold text-gray-600">FINANCIAL TIMES</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-green-400">
                <img src={holbornLogo} alt="Holborn Properties Logo" className="h-12" />
              </h3>
              <p className="text-gray-300 mb-4">
                Your trusted partner in luxury international real estate since 2006.
              </p>
              <div className="flex space-x-4">
                <Phone className="w-5 h-5 text-green-400" />
                <Mail className="w-5 h-5 text-green-400" />
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  <span>USA: +1 239 326 2111</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-green-400" />
                  <span>UK: +44 (0)161 250 5300</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-green-400" />
                  <span>info@luxuryinternational.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Holborn Properties International. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

