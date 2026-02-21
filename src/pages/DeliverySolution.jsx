import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import './SolutionPages.css';

const DeliverySolution = () => {
  return (
    <main>
      <SEO
        title="Delivery Management Software"
        description="Optimize delivery routes, track drivers in real-time, and capture proof of delivery automatically. Reduce costs and deliver more with less effort."
        keywords="delivery management software, route optimization, GPS tracking, proof of delivery, dispatch software, last mile delivery, Kenya delivery software"
        canonical="/delivery-solution"
      />
      {/* Hero */}
      <section className="solution-hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Delivery Management</div>
            <h1 className="hero-title">Deliver more with less</h1>
            <p className="hero-subtitle">
              Optimize routes automatically, dispatch drivers in seconds, and track every delivery in real-time.
              Stop wasting time on manual planning.
            </p>
            <div className="hero-actions">
              <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
              <Link to="/#pricing" className="btn btn-secondary">Get a Quote</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-title">Today's Operations</div>
                <div className="hero-card-status">Live</div>
              </div>
              <div className="stat-grid">
                <div className="stat-item">
                  <div className="stat-value">156</div>
                  <div className="stat-label">Total Orders</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">142</div>
                  <div className="stat-label">Delivered</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">On-Time Rate</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">-18%</div>
                  <div className="stat-label">Distance Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Core Features</div>
            <h2 className="section-title">Everything you need to manage deliveries</h2>
            <p className="section-subtitle">
              From planning to proof of delivery, LogixFleet handles the entire delivery lifecycle.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3 className="feature-title">Route Optimization</h3>
              <p className="feature-description">
                Algorithms that account for traffic, time windows, vehicle capacity, and delivery priorities.
                Reduce distance by up to 20%.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3 className="feature-title">Dispatch Center</h3>
              <p className="feature-description">
                Assign jobs to drivers in seconds from one dashboard. See who's available, their location, and current load.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3 className="feature-title">Live Tracking</h3>
              <p className="feature-description">
                Know exactly where every driver and delivery is at any moment. Share tracking links with your customers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3 className="feature-title">Proof of Delivery</h3>
              <p className="feature-description">
                Capture photos, signatures, and timestamps automatically. Eliminate disputes and missing package claims.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">05</div>
              <h3 className="feature-title">Customer Notifications</h3>
              <p className="feature-description">
                Send automated ETAs and delivery updates via SMS. Keep customers informed without manual effort.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">06</div>
              <h3 className="feature-title">Analytics &amp; Reports</h3>
              <p className="feature-description">
                Daily reports on deliveries, driver performance, and operational efficiency. Make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Optimization Deep Dive */}
      <section className="section section-alt">
        <div className="container">
          <div className="deep-dive">
            <div className="deep-dive-content">
              <div className="deep-dive-label">Route Optimization</div>
              <h2 className="deep-dive-title">Plan smarter routes automatically</h2>
              <p className="deep-dive-description">
                Stop spending hours planning routes manually. Upload your orders and let our algorithms create
                the most efficient routes in seconds.
              </p>
              <div className="deep-dive-list">
                <div className="deep-dive-item">Account for delivery time windows</div>
                <div className="deep-dive-item">Balance workload across drivers</div>
                <div className="deep-dive-item">Consider vehicle capacity limits</div>
                <div className="deep-dive-item">Minimize total distance and fuel costs</div>
                <div className="deep-dive-item">Re-optimize when new orders come in</div>
              </div>
            </div>
            <div className="deep-dive-visual">
              <div className="visual-placeholder">
                <div className="visual-header">
                  <div className="visual-title">Route Comparison</div>
                  <div className="visual-subtitle">Before vs After Optimization</div>
                </div>
                <div className="comparison-grid">
                  <div className="comparison-item">
                    <div className="comparison-label">Manual Planning</div>
                    <div className="comparison-value">245 km</div>
                  </div>
                  <div className="comparison-item optimized">
                    <div className="comparison-label">Optimized</div>
                    <div className="comparison-value success">198 km</div>
                  </div>
                </div>
                <div className="comparison-result">
                  <div className="result-value success">-19%</div>
                  <div className="result-label">Distance Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Tracking */}
      <section className="section">
        <div className="container">
          <div className="deep-dive reverse">
            <div className="deep-dive-content">
              <div className="deep-dive-label">Real-Time Visibility</div>
              <h2 className="deep-dive-title">Track every delivery as it happens</h2>
              <p className="deep-dive-description">
                No more calling drivers to ask where they are. See every vehicle and delivery status on a live map.
                Know instantly when something's off schedule.
              </p>
              <div className="deep-dive-list">
                <div className="deep-dive-item">Live GPS tracking of all drivers</div>
                <div className="deep-dive-item">Automatic status updates at each stop</div>
                <div className="deep-dive-item">Alerts when deliveries are running late</div>
                <div className="deep-dive-item">Share tracking links with customers</div>
                <div className="deep-dive-item">Historical route playback</div>
              </div>
            </div>
            <div className="deep-dive-visual">
              <div className="visual-placeholder">
                <div className="visual-header">
                  <div className="visual-title">Active Drivers</div>
                  <div className="visual-subtitle">8 on route</div>
                </div>
                <div className="visual-row">
                  <div className="visual-dot success"></div>
                  <div className="visual-content">
                    <div className="visual-name">James M.</div>
                    <div className="visual-info">12/14 stops complete</div>
                  </div>
                  <span className="visual-badge success">On time</span>
                </div>
                <div className="visual-row">
                  <div className="visual-dot success"></div>
                  <div className="visual-content">
                    <div className="visual-name">Sarah K.</div>
                    <div className="visual-info">8/11 stops complete</div>
                  </div>
                  <span className="visual-badge success">On time</span>
                </div>
                <div className="visual-row">
                  <div className="visual-dot warning"></div>
                  <div className="visual-content">
                    <div className="visual-name">Peter O.</div>
                    <div className="visual-info">5/9 stops complete</div>
                  </div>
                  <span className="visual-badge warning">+12 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof of Delivery */}
      <section className="section section-alt">
        <div className="container">
          <div className="deep-dive">
            <div className="deep-dive-content">
              <div className="deep-dive-label">Proof of Delivery</div>
              <h2 className="deep-dive-title">Capture proof automatically</h2>
              <p className="deep-dive-description">
                Drivers capture photos, signatures, and notes with one tap. Everything is timestamped, geotagged,
                and stored securely. Resolve disputes instantly.
              </p>
              <div className="deep-dive-list">
                <div className="deep-dive-item">Photo capture at delivery</div>
                <div className="deep-dive-item">Electronic signature collection</div>
                <div className="deep-dive-item">GPS coordinates logged automatically</div>
                <div className="deep-dive-item">Delivery notes and exceptions</div>
                <div className="deep-dive-item">Searchable delivery history</div>
              </div>
            </div>
            <div className="deep-dive-visual">
              <div className="visual-placeholder">
                <div className="visual-header">
                  <div className="visual-title">Delivery Confirmation</div>
                  <div className="visual-subtitle">Order #4521</div>
                </div>
                <div className="pod-demo">
                  <div className="pod-image">Photo captured</div>
                  <div className="pod-details">
                    <div className="pod-item">
                      <div className="pod-label">Time</div>
                      <div className="pod-value">14:32 EAT</div>
                    </div>
                    <div className="pod-item">
                      <div className="pod-label">Signed by</div>
                      <div className="pod-value">J. Mwangi</div>
                    </div>
                  </div>
                  <div className="pod-status">
                    <span className="visual-badge success">Delivered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Use Cases</div>
            <h2 className="section-title">Built for how you work</h2>
            <p className="section-subtitle">
              Whether you're running 10 deliveries or 10,000, LogixFleet scales with your business.
            </p>
          </div>

          <div className="use-cases-grid">
            <div className="use-case-card">
              <h3 className="use-case-title">E-commerce Fulfillment</h3>
              <p className="use-case-description">
                Handle daily delivery volumes from online orders. Integrate with your store and automate
                the entire fulfillment process.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Food &amp; Beverage Distribution</h3>
              <p className="use-case-description">
                Route deliveries to restaurants, shops, and retailers. Handle time-sensitive products
                with priority scheduling.
              </p>
            </div>
            <div className="use-case-card">
              <h3 className="use-case-title">Courier &amp; Express</h3>
              <p className="use-case-description">
                Manage same-day and next-day deliveries. Optimize for speed with real-time dispatching and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to optimize your deliveries?"
        subtitle="Book a demo and see how LogixFleet can help you deliver more with less."
        showContact={false}
      />
    </main>
  );
};

export default DeliverySolution;
