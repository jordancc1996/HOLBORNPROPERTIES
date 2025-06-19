import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
const Portfolio = () => {
  const [properties] = useState([
    {
      id: 1,
      title: "Luxury Waterfront Development",
      location: "Monaco, Monte Carlo",
      description: "Exclusive luxury residences overlooking the Mediterranean Sea. This prestigious development offers unparalleled views and world-class amenities in one of the world's most sought-after locations.",
      price: "From €3,200,000",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      link: "#monaco-project"
    },
    {
      id: 2,
      title: "Prime Commercial District",
      location: "London, United Kingdom",
      description: "Grade A office space in the heart of London's financial district. This development represents a rare opportunity to invest in premium commercial real estate in one of the world's leading financial centers.",
      price: "From £2,850,000",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      link: "#london-project"
    },
    {
      id: 3,
      title: "Exclusive Resort Collection",
      location: "Dubai, UAE",
      description: "Luxury resort residences with private beach access and golf course views. These premium properties offer exceptional rental yields and capital appreciation potential in Dubai's thriving real estate market.",
      price: "From AED 4,500,000",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      link: "#dubai-project"
    },
    {
      id: 4,
      title: "Heritage Restoration Project",
      location: "Paris, France",
      description: "Historic Haussmann building renovation in the 8th arrondissement. This carefully restored property combines classic Parisian architecture with modern luxury amenities and prime location benefits.",
      price: "From €1,950,000",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      link: "#paris-project"
    },
    {
      id: 5,
      title: "Modern Urban Residences",
      location: "Singapore",
      description: "Contemporary high-rise development in Singapore's central business district. These properties offer exceptional connectivity, modern design, and strong investment fundamentals in Asia's premier financial hub.",
      price: "From S$2,100,000",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      link: "#singapore-project"
    },
    {
      id: 6,
      title: "Ski Resort Investment",
      location: "St. Moritz, Switzerland",
      description: "Premium ski-in, ski-out properties in the prestigious St. Moritz resort. These luxury chalets offer exceptional seasonal rental income and long-term appreciation in one of Europe's most exclusive destinations.",
      price: "From CHF 3,800,000",
      image: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      link: "#stmoritz-project"
    }
  ]);

  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Set initial state and observe cards
    setTimeout(() => {
      document.querySelectorAll('.property-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="portfolio-page">
      <header>
        <nav className="container">
          <a href="#" className="logo">Holborn Properties</a>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a></li>
            <li><a href="#portfolio" onClick={(e) => handleSmoothScroll(e, '#portfolio')}>Portfolio</a></li>
            <li><a href="#countries" onClick={(e) => handleSmoothScroll(e, '#countries')}>Countries</a></li>
            <li><a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About</a></li>
            <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="page-header">
            <h1 className="page-title">Featured Properties</h1>
            <p className="page-subtitle">
              Holborn Properties are proud to offer the strongest international real estate opportunities, 
              in collaboration with some of the world's leading property development companies. 
              Explore our curated property portfolio below.
            </p>
          </div>

          <section className="properties-section">
            <div className="section-intro">
              <h2>Current Available Properties</h2>
              <p>Our global real estate portfolio is geared around established cities within stable and growing economies</p>
            </div>

            <div className="properties-grid">
              {properties.map((property) => (
                <div key={property.id} className="property-card">
                  <div 
                    className="property-image" 
                    style={{ background: property.image }}
                  >
                    <div className="property-overlay"></div>
                  </div>
                  <div className="property-info">
                    <div className="property-location">{property.location}</div>
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-description">{property.description}</p>
                    <div className="property-details">
                      <div className="property-price">{property.price}</div>
                      <Link to="/portfolio" className="property-link">View Details</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <section className="contact-section">
        <div className="container">
          <h2 className="contact-title">Interested in Learning More?</h2>
          <p className="contact-text">Contact our investment team to discuss opportunities and schedule a consultation</p>
          <a href="#contact" className="contact-button" onClick={(e) => handleSmoothScroll(e, '#contact')}>
            Get In Touch
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2025 Holborn Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
