import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import holbornLogo from '../../assets/holborn-properties-logo.png';

const FullPortfolioPage = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Development",
      location: "Monaco, Monte Carlo",
      description: "Exclusive luxury residences overlooking the Mediterranean Sea. This prestigious development offers unparalleled views and world-class amenities in one of the world's most sought-after locations.",
      price: "From €3,200,000",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      country: "Monaco",
      type: "Residential"
    },
    {
      id: 2,
      title: "Prime Commercial District",
      location: "London, United Kingdom",
      description: "Grade A office space in the heart of London's financial district. This development represents a rare opportunity to invest in premium commercial real estate in one of the world's leading financial centers.",
      price: "From £2,850,000",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      country: "UK",
      type: "Commercial"
    },
    {
      id: 3,
      title: "Exclusive Resort Collection",
      location: "Dubai, UAE",
      description: "Luxury resort residences with private beach access and golf course views. These premium properties offer exceptional rental yields and capital appreciation potential in Dubai's thriving real estate market.",
      price: "From AED 4,500,000",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      country: "UAE",
      type: "Resort"
    },
    {
      id: 4,
      title: "Heritage Restoration Project",
      location: "Paris, France",
      description: "Historic Haussmann building renovation in the 8th arrondissement. This carefully restored property combines classic Parisian architecture with modern luxury amenities and prime location benefits.",
      price: "From €1,950,000",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      country: "France",
      type: "Heritage"
    },
    {
      id: 5,
      title: "Modern Urban Residences",
      location: "Singapore",
      description: "Contemporary high-rise development in Singapore's central business district. These properties offer exceptional connectivity, modern design, and strong investment fundamentals in Asia's premier financial hub.",
      price: "From S$2,100,000",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      country: "Singapore",
      type: "Residential"
    },
    {
      id: 6,
      title: "Ski Resort Investment",
      location: "St. Moritz, Switzerland",
      description: "Premium ski-in, ski-out properties in the prestigious St. Moritz resort. These luxury chalets offer exceptional seasonal rental income and long-term appreciation in one of Europe's most exclusive destinations.",
      price: "From CHF 3,800,000",
      image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      country: "Switzerland",
      type: "Resort"
    },
    {
      id: 7,
      title: "Oceanfront Villa Estate",
      location: "Malibu, California",
      description: "Stunning oceanfront estate with private beach access and panoramic Pacific Ocean views. This architectural masterpiece features contemporary design with premium finishes throughout.",
      price: "From $8,500,000",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      country: "USA",
      type: "Residential"
    },
    {
      id: 8,
      title: "Historic Castle Renovation",
      location: "Tuscany, Italy",
      description: "Restored 16th-century castle with vineyard and olive groves. This unique property offers a perfect blend of historical significance and modern luxury amenities.",
      price: "From €5,200,000",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      country: "Italy",
      type: "Heritage"
    },
    {
      id: 9,
      title: "Penthouse Collection",
      location: "New York, USA",
      description: "Ultra-luxury penthouses in Manhattan's most prestigious address. These properties offer unparalleled city views and access to world-class amenities.",
      price: "From $12,000,000",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      country: "USA",
      type: "Residential"
    }
  ];

  const countries = ["All", "Monaco", "UK", "UAE", "France", "Singapore", "Switzerland", "USA", "Italy"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          {/* Top bar with contact info */}
          <div className="flex justify-between items-center py-2 text-sm border-b">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">NEW YORK OFFICE</div>
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+1 215 252 0312</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs">UK OFFICE</div>
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+1 215 252 0312</span>
              </div>
            </div>
            <div className="text-sm">EN</div>
          </div>
          
          {/* Main navigation */}
          <nav className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-green-600">
              <img src={holbornLogo} alt="Holborn Properties Logo" className="h-12" />
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</Link>
              <Link to="/portfolio" className="text-green-600 font-semibold">Portfolio</Link>
              <Link to="/partners" className="text-gray-700 hover:text-green-600 transition-colors">Partners</Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-light text-gray-800 mb-6">Featured Properties</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Holborn Properties are proud to offer the strongest international real estate opportunities, 
            in collaboration with some of the world's leading property development companies.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-1">
            {countries.map((country) => (
              <button 
                key={country}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  country === "All" 
                    ? "bg-gray-800 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ background: property.image }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
                    {property.location}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {property.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800">
                      {property.price}
                    </div>
                    <Link 
                      to={`/property/${property.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium uppercase tracking-wide flex items-center"
                    >
                      VIEW DETAILS
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-4">
            Ready to Explore These Opportunities?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss these exclusive properties and discover your perfect investment opportunity.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={holbornLogo} alt="Holborn Properties Logo" className="h-12 mb-4" />
              <p className="text-gray-300 mb-4">
                Your trusted partner in luxury international real estate since 2006.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-green-400 transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Details</h4>
              <div className="space-y-2 text-gray-300">
                <div>USA: +1 239 326 2111</div>
                <div>UK: +44 (0)161 250 5300</div>
                <div>info@holbornproperties.com</div>
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
};

export default FullPortfolioPage;
