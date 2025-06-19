// Force rebuild - Router implementation
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import eiffelTower from './assets/eiffel-tower.jpg';
import burjKhalifa from './assets/burj-khalifa.jpg';
import tajMahal from './assets/taj-mahal.jpg';
import holbornLogo from './assets/holborn-properties-logo.png';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Portfolio from './components/ui/Portfolio.jsx';
import FullPortfolioPage from './components/ui/FullPortfolioPage.jsx';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top bar with contact info */}
          <div className="flex justify-between items-center py-2 text-sm border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">NEW YORK OFFICE </div>
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+1 215 252 0312</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs">UK OFFICE</div>
                <Phone className="w-4 h-4 text-orange-500" />
                <span> +1 215 252 0312 </span>
              </div>
            </div>
            <div className="text-sm">EN</div>
          </div>
          
          {/* Main navigation */}
          <nav className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-green-600">
              <img src={holbornLogo} alt="Holborn Properties Logo" className="h-12" />
            </a>
            <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            <a href="#portfolio" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</a>
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
            <a 
  href="#portfolio"
  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors flex items-center mx-auto"
>
  VIEW OUR FULL PROPERTY PORTFOLIO
  <ChevronRight className="ml-2 w-5 h-5" />
</a>
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

      {/* Current Investment Properties Section */}
      <div id="portfolio">
        <Portfolio />
      </div>

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

      {/* Email Subscription Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-light mb-4 text-gray-800">
                    Let us keep you updated with the latest properties on the market.
                  </h2>
                  <p className="text-gray-600">
                    Be the first to know about exclusive luxury properties, market insights, and investment opportunities.
                  </p>
                </div>
                <div>
                  <form 
                    action="https://formspree.io/f/xblykgln" 
                    method="POST"
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter your email here"
                      required
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input type="hidden" name="_subject" value="New Property Newsletter Signup" />
                    <button 
                      type="submit"
                      className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                    >
                      SUBSCRIBE
                      <ChevronRight className="ml-2 w-4 h-4 inline" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
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
<li><a href="#portfolio" className="hover:text-green-400 transition-colors">Portfolio</a></li>
<li><a href="#" className="hover:text-green-400 transition-colors">Partners</a></li>
<li><a href="#" className="hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <div>                                       
                <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                <form 
                  action="https://formspree.io/f/xblykgln" 
                  method="POST"
                  className="space-y-3"
                >
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name *"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email *"
                      required
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                  </div>

                  <div>
                    <select 
                      name="propertyInterest"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    >
                      <option value="">I'm interested in...</option>
                      <option value="buying">Buying a Luxury Property</option>
                      <option value="selling">Selling My Property</option>
                      <option value="investing">Investment Opportunities</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <select 
                      name="budgetRange"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    >
                      <option value="">Budget Range (Optional)</option>
                      <option value="under-1m">Under $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m-25m">$10M - $25M</option>
                      <option value="25m-plus">$25M+</option>
                    </select>
                  </div>

                  <div>
                    <select 
                      name="preferredLocation"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    >
                      <option value="">Preferred Location</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="france">France</option>
                      <option value="uae">UAE/Dubai</option>
                      <option value="singapore">Singapore</option>
                      <option value="other">Other Location</option>
                    </select>
                  </div>

                  <div>
                    <select 
                      name="timeline"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    >
                      <option value="">Purchase Timeline</option>
                      <option value="immediate">Ready to purchase now</option>
                      <option value="3months">Within 3 months</option>
                      <option value="6months">Within 6 months</option>
                      <option value="1year">Within 1 year</option>
                      <option value="exploring">Just exploring options</option>
                    </select>
                  </div>
                  
                  <div>
                    <textarea 
                      name="message"
                      rows="2"
                      placeholder="Additional details or specific requirements..."
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm resize-vertical"
                   ></textarea>
                  </div>

                  <input type="hidden" name="_subject" value="New Qualified Lead - Holborn Properties" />
                  <input type="hidden" name="_replyto" value="email" />
                  
                  <button 
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors font-medium text-sm"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h5 className="text-sm font-semibold mb-2 text-green-400">Contact Details</h5>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div>USA: +1 239 326 2111</div>
                    <div>UK: +44 (0)161 250 5300</div>
                    <div>info@luxuryinternational.com</div>
                  </div>
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

function App() {
  return <HomePage />;
}

export default App;
