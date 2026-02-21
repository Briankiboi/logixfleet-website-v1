import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = ({
  title = "Ready to transform your fleet operations?",
  subtitle = "Book a 15 minute demo and see LogixFleet in action. No commitment, no pressure.",
  showContact = true,
  variant = "default"
}) => {
  return (
    <section className={`cta-section ${variant}`} id="contact">
      <div className="container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-subtitle">{subtitle}</p>
        <div className="cta-actions">
          <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
          <Link to="/#pricing" className="btn btn-secondary">Get a Quote</Link>
        </div>
        {showContact && (
          <div className="cta-contact">
            <a href="tel:+254711612980">+254 711 612 980</a>
            <span className="divider">|</span>
            <a href="https://wa.me/254711612980" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <span className="divider">|</span>
            <a href="mailto:sales@logixfleet.ai">sales@logixfleet.ai</a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
