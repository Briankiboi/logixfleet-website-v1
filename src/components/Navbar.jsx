import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Close mobile menu on window resize
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          <img
            src="https://static.wixstatic.com/media/aa113a_7cd2b5b4871b4c2f92591ca738ac66cc~mv2.png"
            alt="LogixFleet"
            className="nav-logo-img"
          />

          <div className="sustainability-icon">🌱</div>
        </Link>
        
        <button
          className={`nav-mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-dropdown">
            <div className="nav-link nav-dropdown-trigger">Products</div>
            <div className="nav-dropdown-menu">
              <Link to="/fleet-solution" className="nav-dropdown-item">
                Fleet Control OS
                <span>Compliance, AI monitoring, approvals</span>
              </Link>
              <Link to="/delivery-solution" className="nav-dropdown-item">
                Delivery Management
                <span>Routes, dispatch, tracking, POD</span>
              </Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <div className="nav-link nav-dropdown-trigger">Case Studies</div>
            <div className="nav-dropdown-menu">
              <Link to="/use-cases/rj-logistics" className="nav-dropdown-item">
                RJ Logistics
                <span>12.5% fleet uptime improvement</span>
              </Link>
            </div>
          </div>
          <Link to="/#pricing" className="nav-link">Get a Quote</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          <Link to="/integration" className="nav-link">Integration</Link>
          <div className="nav-cta">
            <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
