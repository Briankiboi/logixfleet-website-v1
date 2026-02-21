import { Link } from 'react-router-dom';
import { useState } from 'react';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <main>
      <SEO
        title="Fleet & Delivery Management Software for Africa"
        description="Complete Fleet Control OS and delivery software for African businesses. Track vehicles, optimize routes, manage compliance, and reconcile payments. Built for East Africa."
        keywords="Fleet Control OS, delivery management, route optimization, vehicle tracking, GPS tracking, fleet software, logistics software, Kenya, East Africa, Nairobi"
        canonical="/"
      />
      {/* HERO */}
      <section className="hero hero-centered">
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">SIPHYY is a Fleet Control OS.</h1>
            <p className="hero-subtitle">
It helps fleet and logistics operators prevent avoidable downtime, stop cost leakage, and keep every vehicle compliant and accountable using alerts, evidence, and audit trails that make issues impossible to ignore.            </p>
            <div className="hero-actions">
              <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
              <Link to="/#pricing" className="btn btn-secondary">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE DO IT - USE CASES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">How We Do It</div>
            <h2 className="section-title">Four controls that stop money leaks</h2>
            <p className="section-subtitle">
              Fleet operations fail when problems stay hidden. SIPHYY makes losses visible early through automated alerts and control systems so nothing slips through.
            </p>
          </div>

          <div className="controls-grid">
            <div className="control-card">
              <span className="control-num">01</span>
              <h3>Proactive issue detection</h3>
              <p>Vehicle problems whisper before they scream. SIPHYY captures driver reports via WhatsApp, creates work orders, and sends repeating alerts until issues are fixed. Problems can't disappear in chat threads.</p>

              <button
                className="control-learn-more"
                onClick={() => toggleCard(1)}
                aria-expanded={expandedCard === 1}
              >
                {expandedCard === 1 ? 'Show less' : 'Learn more'}
                <svg className={`chevron ${expandedCard === 1 ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`control-expanded ${expandedCard === 1 ? 'open' : ''}`}>
                <div className="control-detail">
                  <strong>The Problem</strong>
                  <p>Drivers report issues verbally or via WhatsApp. Managers promise to fix them. Weeks pass. The issue gets worse. No one remembers who reported what or when. The breakdown happens, costing thousands in downtime and towing.</p>
                </div>
                <div className="control-detail">
                  <strong>The Leak</strong>
                  <p>Small problems (low tire pressure, strange noise, check engine light) become expensive failures. Reactive maintenance costs 3-5x more than preventive. Lost revenue from unplanned downtime exceeds repair costs.</p>
                </div>
                <div className="control-detail">
                  <strong>How SIPHYY Stops It</strong>
                  <p>Driver submits issue via WhatsApp → System creates a work order with timestamp + photo evidence → Manager receives alert → If not acknowledged in 24h, escalates to admin → Work order repeats daily until marked "resolved" with proof. Nothing falls through cracks.</p>
                </div>
                <div className="control-detail">
                  <strong>Outcome</strong>
                  <p>Issues caught early. Accountability clear. Downtime prevented. Maintenance becomes predictable instead of chaotic. Vehicles stay on road.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <span className="control-num">02</span>
              <h3>Compliance expiry prevention</h3>
              <p>One expired license stops a vehicle instantly. SIPHYY sends scheduled reminders (30/14/7/3/1 days) that repeat until proof is uploaded, with automatic escalation if nobody acts.</p>

              <button
                className="control-learn-more"
                onClick={() => toggleCard(2)}
                aria-expanded={expandedCard === 2}
              >
                {expandedCard === 2 ? 'Show less' : 'Learn more'}
                <svg className={`chevron ${expandedCard === 2 ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`control-expanded ${expandedCard === 2 ? 'open' : ''}`}>
                <div className="control-detail">
                  <strong>The Problem</strong>
                  <p>Managers track insurance, licenses, permits, and inspections manually. A license expires tomorrow. Nobody remembers until police stop the vehicle. Fines, bribes, impoundment, and reputation damage follow.</p>
                </div>
                <div className="control-detail">
                  <strong>The Leak</strong>
                  <p>Fines, towing, storage fees. Lost delivery contracts when customers see you're non-compliant. Repeated "urgent" renewals cost more than planned ones. Team morale drops when drivers feel setup to fail.</p>
                </div>
                <div className="control-detail">
                  <strong>How SIPHYY Stops It</strong>
                  <p>Enter compliance dates once → System sends reminders at 30, 14, 7, 3, 1 days before expiry → Notifications repeat daily until proof of renewal is uploaded → If ignored, escalates to senior management → Dashboard shows at-risk vehicles instantly.</p>
                </div>
                <div className="control-detail">
                  <strong>Outcome</strong>
                  <p>Zero surprises. Renewals happen on time. No fines, no impoundment, no arguments with police. Compliance becomes routine, not crisis.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <span className="control-num">03</span>
              <h3>Parts & warranty traceability</h3>
              <p>Without records, you pay twice for the same part. SIPHYY tracks every repair with receipts and photos, alerts you when replacements happen "too soon," and reminds you of warranty windows.</p>

              <button
                className="control-learn-more"
                onClick={() => toggleCard(3)}
                aria-expanded={expandedCard === 3}
              >
                {expandedCard === 3 ? 'Show less' : 'Learn more'}
                <svg className={`chevron ${expandedCard === 3 ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`control-expanded ${expandedCard === 3 ? 'open' : ''}`}>
                <div className="control-detail">
                  <strong>The Problem</strong>
                  <p>Mechanic says "We replaced that alternator 2 months ago." You have no record. Mechanic says "The part has a 12-month warranty." You have no receipt. You pay again. Vendor makes the same repair "free" by overcharging elsewhere.</p>
                </div>
                <div className="control-detail">
                  <strong>The Leak</strong>
                  <p>Duplicate repairs. Warranty work paid out of pocket. Fraudulent vendor charges. Poor part quality goes unnoticed because you can't prove replacement frequency. Same issue keeps recurring.</p>
                </div>
                <div className="control-detail">
                  <strong>How SIPHYY Stops It</strong>
                  <p>Every work order requires: part name, vendor, cost, receipt photo → System tracks installation date → If same part replaced within 6 months, flags it for review → Warranty expiry reminders sent automatically → Reports show: which parts fail most, which vendors deliver quality, cost trends.</p>
                </div>
                <div className="control-detail">
                  <strong>Outcome</strong>
                  <p>No more "mystery" repairs. Warranties actually used. Bad vendors identified early. Maintenance becomes data, not drama. You know which vehicles are money pits.</p>
                </div>
              </div>
            </div>

            <div className="control-card">
              <span className="control-num">04</span>
              <h3>Reconciliation & unit economics</h3>
              <p>Costs arrive from many directions. SIPHYY ties every expense to vehicle/vendor/category, flags duplicates instantly, and shows unit economics so you know which vehicles are profitable.</p>

              <button
                className="control-learn-more"
                onClick={() => toggleCard(4)}
                aria-expanded={expandedCard === 4}
              >
                {expandedCard === 4 ? 'Show less' : 'Learn more'}
                <svg className={`chevron ${expandedCard === 4 ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={`control-expanded ${expandedCard === 4 ? 'open' : ''}`}>
                <div className="control-detail">
                  <strong>The Problem</strong>
                  <p>Fuel, repairs, tolls, fines, insurance arrive as receipts, invoices, WhatsApp screenshots. Accountant enters them in Excel. Same expense submitted twice. Vendor charges Vehicle A for work done on Vehicle B. No one notices until month-end when it's too late to dispute.</p>
                </div>
                <div className="control-detail">
                  <strong>The Leak</strong>
                  <p>Duplicate payments. Costs assigned to wrong vehicles. Budget overruns with no explanation. You think you're profitable, but cash keeps disappearing. No visibility into cost-per-km or vehicle profitability.</p>
                </div>
                <div className="control-detail">
                  <strong>How SIPHYY Stops It</strong>
                  <p>Every expense enters system with: vehicle, vendor, category, receipt → Duplicate detection alerts instantly → Dashboard shows real-time cost vs. revenue per vehicle → Reports track: cost-per-km, vendor spending patterns, category trends → Month-end reconciliation takes hours, not days.</p>
                </div>
                <div className="control-detail">
                  <strong>Outcome</strong>
                  <p>Clean books. No duplicates. Every cost traceable. You know which vehicles make money, which lose money, and why. Budgets based on data, not guesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Everything you need to deliver</h2>
            <p className="section-subtitle">
              From route planning to vehicle maintenance. Use them together or choose what fits your operation.
            </p>
          </div>

          <div className="products-showcase">
            {/* Fleet Control OS */}
            <div className="product-row">
              <div className="product-info">
                <span className="product-tag">Compliance &amp; Control</span>
                <h3 className="product-info-title">Fleet Control OS</h3>
                <p className="product-info-description">
                  Stay audit-ready with automated compliance tracking, approve every expense before it happens
                  with WhatsApp workflows, and catch fuel theft with AI monitoring. Complete fleet oversight
                  from insurance renewals to parts tracking—all in one platform.
                </p>
                <Link to="/fleet-solution" className="product-info-link">Learn more</Link>
              </div>
              <div className="product-image-wrapper product-image-lg">
                <img
                  src="https://static.wixstatic.com/media/aa113a_39b1f3d92dff4204beb4c5bfaa3981ef~mv2.png"
                  alt="Fleet Control OS Dashboard"
                />
              </div>
            </div>

            {/* Operations Management */}
            <div className="product-row reverse">
              <div className="product-info">
                <span className="product-tag">Command Center</span>
                <h3 className="product-info-title">Operations Management</h3>
                <p className="product-info-description">
                  Your real-time control room for delivery operations. Monitor all active routes, dispatch
                  orders instantly, track driver locations, and make quick decisions when things change on the ground.
                </p>
                <Link to="/delivery-solution" className="product-info-link">Learn more</Link>
              </div>
              <div className="product-image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/aa113a_b54c05681a87415eaaba78b30d5991af~mv2.png"
                  alt="Operations Management Dashboard"
                />
              </div>
            </div>

            {/* Driver App */}
            <div className="product-row">
              <div className="product-info">
                <span className="product-tag">Driver Companion</span>
                <h3 className="product-info-title">Driver App</h3>
                <p className="product-info-description">
                  The mobile app your drivers actually want to use. Turn-by-turn navigation to each stop,
                  one-tap proof of delivery with photos and signatures, real-time GPS tracking, and automatic
                  status updates that keep customers informed. Works offline in areas with poor network coverage.
                </p>
              </div>
              <div className="product-image-wrapper">
                <img
                  src="https://static.wixstatic.com/media/aa113a_535756870d224acfb5887d319271303f~mv2.png"
                  alt="Driver App"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="section case-study-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Proven Results</div>
            <h2 className="section-title">Real fleets, real improvements</h2>
            <p className="section-subtitle">
              See how operators like you moved from WhatsApp chaos to complete control
            </p>
          </div>

          <div className="case-study-featured">
            <div className="case-featured-badge">Case Study</div>

            <h3 className="case-featured-title">
              How RJ Logistics achieved<br />
              <span className="highlight">12.5% fleet uptime improvement in 60 days</span>
            </h3>

            <div className="case-featured-stats">
              <div className="featured-stat">
                <div className="featured-stat-value">12.5%</div>
                <div className="featured-stat-label">Fleet uptime boost</div>
              </div>
              <div className="featured-stat">
                <div className="featured-stat-value">26+</div>
                <div className="featured-stat-label">Vehicles managed</div>
              </div>
              <div className="featured-stat">
                <div className="featured-stat-value">60 days</div>
                <div className="featured-stat-label">Time to results</div>
              </div>
            </div>

            <p className="case-featured-description">
              RJ Logistics moved from WhatsApp threads and paper trails to complete operational visibility.
              Same team managing more vehicles with zero chaos.
            </p>

            <div className="case-featured-action">
              <Link to="/use-cases/rj-logistics" className="btn btn-primary btn-large">
                Read the full story
              </Link>
              <p className="case-featured-subtext">5 min read • Real numbers • Zero fluff</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="section section-alt" id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Get a Quote</div>
            <h2 className="section-title">Custom pricing for your fleet</h2>
            <p className="section-subtitle">
              Every fleet is different. Let's build a solution that fits your specific needs and budget.
            </p>
          </div>

          <div className="pricing-bundle">
            <h3>Ready to get started?</h3>
            <p>
              Contact our sales team for a custom quote tailored to your fleet size and requirements.
              No commitment, no pressure just honest answers about how LogixFleet can help your business.
            </p>
            <div className="pricing-bundle-actions">
              <Link to="/book-a-demo" className="btn">Book a Demo</Link>
              <Link to="/#contact" className="btn btn-outline">Contact Sales</Link>
            </div>
          </div>

          <div className="pricing-products">
            <div className="pricing-products-header">
              <h3>Choose what you need</h3>
              <p>Pick the products that fit your business. Use them together or standalone.</p>
            </div>

            <div className="pricing-products-grid">
              <div className="pricing-product-card">
                <h4>Fleet Control OS</h4>
                <p className="pricing-product-subtitle">For vehicle compliance and cost control</p>
                <ul>
                  <li>Compliance tracking</li>
                  <li>Approval workflows</li>
                  <li>AI fuel monitoring</li>
                  <li>Parts tracking</li>
                  <li>Maintenance scheduling</li>
                  <li>WhatsApp integration</li>
                </ul>
              </div>

              <div className="pricing-product-card">
                <h4>Delivery Management</h4>
                <p className="pricing-product-subtitle">For route planning and delivery operations</p>
                <ul>
                  <li>Route optimization</li>
                  <li>Real-time tracking</li>
                  <li>Dispatch management</li>
                  <li>Proof of delivery</li>
                  <li>Customer notifications</li>
                  <li>Driver mobile app</li>
                </ul>
              </div>

              <div className="pricing-product-card">
                <h4>Finance &amp; Reconciliation</h4>
                <p className="pricing-product-subtitle">For payments and invoicing</p>
                <ul>
                  <li>Invoice generation</li>
                  <li>Payment tracking</li>
                  <li>Cash reconciliation</li>
                  <li>Driver collections</li>
                  <li>Payment ledger</li>
                  <li>Financial reports</li>
                </ul>
              </div>
            </div>

            <div className="pricing-note">
              <p>
                <strong>Mix and match:</strong> Use one product or all three. Pricing is customized
                based on your fleet size and which features you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Why LogixFleet</div>
            <h2 className="section-title">Built differently</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <h4 className="why-title">Built for the World</h4>
              <p className="why-description">
                Designed for local roads, networks, and business conditions. We understand the challenges you face.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Fast Setup</h4>
              <p className="why-description">
                Get started in days, not weeks. We handle onboarding and training so you can focus on your business.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Local Support</h4>
              <p className="why-description">
                Real people on WhatsApp, phone, and email. Based in Nairobi, available when you need us.
              </p>
            </div>
            <div className="why-card">
              <h4 className="why-title">Works on Any Phone</h4>
              <p className="why-description">
                Android app that runs on any smartphone. No expensive hardware or special devices needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </main>
  );
};

export default Home;
