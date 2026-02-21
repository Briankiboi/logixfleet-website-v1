import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Integration.css';

const Integration = () => {
  return (
    <main className="page-content">
      <SEO
        title="Integrations"
        description="Connect LogixFleet with your existing ERP, e-commerce, and accounting systems. Seamless integration with ERPNext, Odoo, SAP, Shopify, WooCommerce, QuickBooks, Xero, and Zoho."
        keywords="fleet software integration, ERP integration, Shopify integration, WooCommerce integration, QuickBooks integration, Xero integration, API integration"
        canonical="/integration"
      />
      <section className="integrations-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Integrations</div>
            <h2 className="section-title">Connect your entire tech stack</h2>
            <p className="section-subtitle">
              LogixFleet integrates seamlessly with your existing ERP, e-commerce, and accounting systems.
              No data silos, no manual imports.
            </p>
          </div>

          {/* Integration Hub Animation */}
          <div className="integration-hub">
            {/* Background Rotating Circles */}
            <div className="hub-bg-circle"></div>
            <div className="hub-bg-circle"></div>
            <div className="hub-bg-circle"></div>

            {/* Center LogixFleet Logo */}
            <div className="hub-center">
              <div className="hub-center-logo">
                Logix<br />Fleet
                <span>Connected</span>
              </div>
            </div>

            {/* Integration Nodes */}
            {/* ERPNext - Top */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="32" height="24" rx="2" stroke="#0089FF" strokeWidth="2"/>
                  <path d="M4 14h32" stroke="#0089FF" strokeWidth="2"/>
                  <circle cx="8" cy="11" r="1.5" fill="#0089FF"/>
                  <circle cx="12" cy="11" r="1.5" fill="#0089FF"/>
                  <circle cx="16" cy="11" r="1.5" fill="#0089FF"/>
                  <rect x="8" y="18" width="8" height="2" rx="1" fill="#0089FF"/>
                  <rect x="8" y="22" width="12" height="2" rx="1" fill="#0089FF" opacity="0.5"/>
                  <rect x="8" y="26" width="6" height="2" rx="1" fill="#0089FF" opacity="0.3"/>
                </svg>
              </div>
              <span className="node-label">ERPNext</span>
            </div>

            {/* Odoo - Top Right */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="14" stroke="#714B67" strokeWidth="2"/>
                  <circle cx="20" cy="20" r="8" fill="#714B67"/>
                  <circle cx="20" cy="20" r="4" fill="white"/>
                </svg>
              </div>
              <span className="node-label">Odoo</span>
            </div>

            {/* SAP - Right */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="12" width="28" height="16" rx="2" fill="#0070F2"/>
                  <text x="20" y="23" fontFamily="Arial" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">SAP</text>
                </svg>
              </div>
              <span className="node-label">SAP</span>
            </div>

            {/* Shopify - Bottom Right */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28 10l-3 2-1-3-4-1-8 24 14 2 6-22-4-2z" fill="#95BF47"/>
                  <path d="M25 12l-1-3-4-1v26l14 2 6-22-4-2-3 2" fill="#5E8E3E"/>
                  <path d="M18 16l-1 4 3-1 1-3h-3z" fill="white"/>
                </svg>
              </div>
              <span className="node-label">Shopify</span>
            </div>

            {/* WooCommerce - Bottom */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="10" width="32" height="20" rx="3" fill="#96588A"/>
                  <path d="M10 16v8l3-4 3 4v-8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="26" cy="20" r="4" stroke="white" strokeWidth="1.5"/>
                  <circle cx="32" cy="20" r="4" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="node-label">WooCommerce</span>
            </div>

            {/* QuickBooks - Bottom Left */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="14" fill="#2CA01C"/>
                  <path d="M14 14v12h3v-4h2c3 0 5-2 5-4s-2-4-5-4h-5zm3 2.5h2c1.5 0 2 .5 2 1.5s-.5 1.5-2 1.5h-2v-3z" fill="white"/>
                </svg>
              </div>
              <span className="node-label">QuickBooks</span>
            </div>

            {/* Xero - Left */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="14" fill="#13B5EA"/>
                  <path d="M13 14l7 6-7 6M20 20h7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="node-label">Xero</span>
            </div>

            {/* Zoho - Top Left */}
            <div className="integration-node">
              <div className="node-icon">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="12" width="28" height="16" rx="3" fill="#C8202B"/>
                  <text x="20" y="23" fontFamily="Arial" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">ZOHO</text>
                </svg>
              </div>
              <span className="node-label">Zoho</span>
            </div>

            {/* Animated Data Particles */}
            <div className="data-particle particle-1"></div>
            <div className="data-particle particle-2"></div>
            <div className="data-particle particle-3"></div>
            <div className="data-particle particle-4"></div>
            <div className="data-particle particle-5"></div>
            <div className="data-particle particle-6"></div>
          </div>

          {/* Integration Features */}
          <div className="integration-features">
            <div className="integration-feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <h4>Real-Time Sync</h4>
              <p>Orders, inventory, and delivery status sync automatically. No manual data entry.</p>
            </div>

            <div className="integration-feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M7 8h2M7 12h4"/>
                </svg>
              </div>
              <h4>Easy Setup</h4>
              <p>Pre-built connectors get you running in minutes. No developers needed.</p>
            </div>

            <div className="integration-feature">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h4>Secure &amp; Reliable</h4>
              <p>Enterprise-grade security with encrypted data transfer and 99.9% uptime.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="integration-cta">
            <div className="cta-content">
              <h3>Ready to connect your systems?</h3>
              <p>Book a demo and see how LogixFleet integrates with your existing tools in real-time.</p>
            </div>
            <div className="cta-actions">
              <Link to="/book-a-demo" className="btn btn-cta-primary">
                Book a Demo
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/#contact" className="btn btn-secondary">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Integration;
