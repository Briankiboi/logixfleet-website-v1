import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import './FleetSolution.css';

const FleetSolution = () => {
  return (
    <main>
      <SEO
        title="Fleet Control OS Software"
        description="Professional Fleet Control OS software with compliance tracking, AI fuel monitoring, approval workflows, and WhatsApp integration. Stay audit-ready and control costs."
        keywords="Fleet Control OS software, compliance tracking, fuel monitoring, vehicle maintenance, approval workflows, WhatsApp Fleet Control OS, Kenya fleet software"
        canonical="/fleet-solution"
      />
      {/* Hero */}
      <section className="fleet-hero">
        <div className="hero-inner">
          <span className="hero-badge">Compliance &amp; Control</span>
          <h1 className="hero-title">Fleet Control OS Built for Compliance</h1>
          <p className="hero-subtitle">
            Stay audit-ready with automated compliance tracking, control every expense with approval workflows,
            and catch fuel theft with AI monitoring. Complete fleet oversight in one platform.
          </p>
          <div className="hero-actions">
            <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
            <a href="#features" className="btn btn-secondary">Explore Features</a>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section" id="features">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Core Capabilities</div>
            <h2 className="section-title">Everything you need for professional Fleet Control OS</h2>
            <p className="section-subtitle">
              From compliance to cost control, WhatsApp integration to AI monitoring
            </p>
          </div>

          <div className="fleet-features-grid">
            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="Compliance">📋</span>
              </div>
              <h3>Compliance Tracking</h3>
              <p>Never operate illegally. Automated tracking for insurance, licenses, inspections, and logbooks.</p>
              <ul className="feature-list">
                <li>Insurance expiry alerts (30 days advance)</li>
                <li>Driver license tracking &amp; renewals</li>
                <li>Digital inspection certificates</li>
                <li>Automated logbooks for regulations</li>
                <li>Document central storage</li>
                <li>Audit-ready reports in 5 minutes</li>
              </ul>
            </div>

            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="Approvals">✅</span>
              </div>
              <h3>Approval Workflows</h3>
              <p>Control every expense before it happens. Multi-level approvals via WhatsApp.</p>
              <ul className="feature-list">
                <li>Parts request approvals</li>
                <li>Fuel purchase authorization</li>
                <li>Maintenance job sign-offs</li>
                <li>Expense claim reviews</li>
                <li>WhatsApp one-tap approvals</li>
                <li>Complete audit trail</li>
              </ul>
            </div>

            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="AI">🤖</span>
              </div>
              <h3>AI Fuel Monitoring</h3>
              <p>Siphyy AI learns each vehicle's baseline and flags unusual consumption patterns.</p>
              <ul className="feature-list">
                <li>Baseline consumption learning</li>
                <li>Real-time anomaly detection</li>
                <li>Siphoning alerts</li>
                <li>Unauthorized detour tracking</li>
                <li>Excessive idling detection</li>
                <li>Instant WhatsApp alerts</li>
              </ul>
            </div>

            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="Maintenance">🔧</span>
              </div>
              <h3>Maintenance Management</h3>
              <p>Schedule preventive maintenance and manage all repairs from one dashboard.</p>
              <ul className="feature-list">
                <li>Preventive maintenance schedules</li>
                <li>Service reminders</li>
                <li>Work order management</li>
                <li>Labor &amp; parts cost tracking</li>
                <li>Service provider management</li>
                <li>Complete service history</li>
              </ul>
            </div>

            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="Parts">📦</span>
              </div>
              <h3>Parts Tracking</h3>
              <p>Record every part installation and catch false replacement claims instantly.</p>
              <ul className="feature-list">
                <li>Installation date recording</li>
                <li>Odometer reading at install</li>
                <li>Auto-calculate part lifetime</li>
                <li>Inventory management</li>
                <li>Reorder point alerts</li>
                <li>Supplier tracking</li>
              </ul>
            </div>

            <div className="fleet-feature-card">
              <div className="feature-icon">
                <span role="img" aria-label="WhatsApp">💬</span>
              </div>
              <h3>WhatsApp Integration</h3>
              <p>Fleet Control OS where your team already works. No new apps to learn.</p>
              <ul className="feature-list">
                <li>Driver check-ins via WhatsApp</li>
                <li>Issue reporting with photos</li>
                <li>Parts requests via chat</li>
                <li>Manager approvals (one tap)</li>
                <li>Critical alerts delivered instantly</li>
                <li>Custom message templates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Deep Dive */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-column">
            <div className="column-content">
              <div className="section-label">Compliance First</div>
              <h3>Pass audits in 5 minutes, not 5 days</h3>
              <p>
                When regulators show up, you have 10 vehicles, 10 insurance policies, 10 expiry dates.
                One Excel sheet nobody updates. Good luck.
              </p>
              <p><strong>LogixFleet makes compliance automatic:</strong></p>
              <ul className="feature-list">
                <li>30-day advance insurance expiry alerts</li>
                <li>Driver license tracking &amp; reminders</li>
                <li>Digital pre-trip inspection checklists</li>
                <li>GPS-based automated logbooks</li>
                <li>Document storage with version history</li>
                <li>One-click audit report export</li>
              </ul>
            </div>
            <div className="column-visual">
              <div className="compliance-demo">
                <div className="demo-title">Fleet Compliance Status</div>
                <div className="compliance-items">
                  <div className="compliance-item success">
                    <span className="compliance-icon">✅</span>
                    <span className="compliance-text">Insurance Current</span>
                    <span className="compliance-value success">18/24</span>
                  </div>
                  <div className="compliance-item warning">
                    <span className="compliance-icon">⚠️</span>
                    <span className="compliance-text">Expires in 25 days</span>
                    <span className="compliance-value warning">6/24</span>
                  </div>
                  <div className="compliance-item success">
                    <span className="compliance-icon">✅</span>
                    <span className="compliance-text">Licenses Valid</span>
                    <span className="compliance-value success">24/24</span>
                  </div>
                  <div className="compliance-item success">
                    <span className="compliance-icon">✅</span>
                    <span className="compliance-text">Inspections Current</span>
                    <span className="compliance-value success">22/24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Fuel Monitoring */}
      <section className="section">
        <div className="container">
          <div className="two-column reverse">
            <div className="column-content">
              <div className="section-label">AI-Powered</div>
              <h3>Catch fuel theft before it costs you thousands</h3>
              <p>
                Your vehicles are burning 60% more fuel than they should. Drivers are siphoning.
                Routes are unauthorized. You know it's happening, but proving it is impossible—until now.
              </p>
              <p><strong>Siphyy AI watches your fleet 24/7:</strong></p>
              <ul className="feature-list">
                <li>Learns normal consumption per vehicle</li>
                <li>Detects anomalies in real-time</li>
                <li>Flags siphoning incidents</li>
                <li>Tracks unauthorized detours</li>
                <li>Identifies excessive idling</li>
                <li>WhatsApp alerts with GPS proof</li>
              </ul>
              <div className="beta-notice">
                <strong>Beta Access:</strong> Currently testing with select fleet operators.
                Contact us to join the early access program.
              </div>
            </div>
            <div className="column-visual">
              <div className="fuel-demo">
                <div className="fuel-header">
                  <div className="fuel-title">Fuel Anomaly Detected</div>
                  <div className="fuel-vehicle">Vehicle KBZ 123X</div>
                </div>
                <div className="fuel-stats">
                  <div className="fuel-stat success">
                    <div className="fuel-stat-value">12.48</div>
                    <div className="fuel-stat-label">Baseline L/100KM</div>
                  </div>
                  <div className="fuel-stat danger">
                    <div className="fuel-stat-value">20.02</div>
                    <div className="fuel-stat-label">Actual L/100KM</div>
                  </div>
                  <div className="fuel-stat warning">
                    <div className="fuel-stat-value">+60.4%</div>
                    <div className="fuel-stat-label">Deviation</div>
                  </div>
                </div>
                <div className="fuel-alert">
                  <div className="alert-title">🚨 Critical Severity</div>
                  <div className="alert-subtitle">Immediate investigation required</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Workflows */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-column">
            <div className="column-content">
              <div className="section-label">Just Launched</div>
              <h3>Stop unauthorized spending instantly</h3>
              <p>
                Every unauthorized expense is money you'll never see again. Parts that weren't needed.
                Fuel that wasn't purchased. Repairs that never happened.
              </p>
              <p><strong>Now you control every dollar before it's spent:</strong></p>
              <ul className="feature-list">
                <li>Customizable approval chains</li>
                <li>Amount-based thresholds</li>
                <li>One-tap WhatsApp approvals</li>
                <li>Photo verification required</li>
                <li>Complete audit trail</li>
                <li>Backup approver delegation</li>
              </ul>
              <div className="whatsapp-example">
                <div className="example-label">Example WhatsApp Alert:</div>
                <div className="whatsapp-message">
                  <div className="message-title">🔔 Parts Request from James</div>
                  <div className="message-content">Brake pads for KBZ 123X</div>
                  <div className="message-cost">Est. Cost: $80</div>
                  <div className="message-actions">
                    <span className="action-approve">✅ Approve</span>
                    <span className="action-reject">❌ Reject</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-visual">
              <div className="workflow-demo">
                <div className="workflow-title">Approval Workflow</div>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <div className="step-title">Driver Requests</div>
                      <div className="step-desc">Submits via WhatsApp with photo</div>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <div className="step-title">Manager Notified</div>
                      <div className="step-desc">Instant WhatsApp alert</div>
                    </div>
                  </div>
                  <div className="workflow-step success">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <div className="step-title">One-Tap Decision</div>
                      <div className="step-desc">Approve or reject in seconds</div>
                    </div>
                  </div>
                  <div className="workflow-step success">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <div className="step-title">Driver Informed</div>
                      <div className="step-desc">Instant notification + audit log</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Analytics &amp; Reporting</div>
            <h2 className="section-title">Ask your fleet anything. Get instant answers.</h2>
            <p className="section-subtitle">
              Siphyy AI turns your fleet data into actionable insights with natural language queries
            </p>
          </div>

          <div className="analytics-content">
            <div className="analytics-queries">
              <div className="queries-title">Natural Language Queries</div>
              <div className="query-examples">
                <div className="query-item">"Which vehicle costs the most to run this month?"</div>
                <div className="query-item">"Show me drivers with late deliveries this week"</div>
                <div className="query-item">"What's my average fuel cost per kilometer?"</div>
                <div className="query-item">"Which vehicles are due for service?"</div>
              </div>
            </div>

            <div className="analytics-features">
              <div className="analytics-feature">
                <span role="img" aria-label="Reports">📊</span>
                <div className="analytics-feature-title">5 Essential Reports</div>
                <div className="analytics-feature-desc">Driver performance, utilization, costs, revenue, collections</div>
              </div>
              <div className="analytics-feature">
                <span role="img" aria-label="TCO">💰</span>
                <div className="analytics-feature-title">TCO Analysis</div>
                <div className="analytics-feature-desc">Total cost of ownership per vehicle</div>
              </div>
              <div className="analytics-feature">
                <span role="img" aria-label="Dashboard">📈</span>
                <div className="analytics-feature-title">Custom Dashboards</div>
                <div className="analytics-feature-desc">Build the exact view you need</div>
              </div>
              <div className="analytics-feature">
                <span role="img" aria-label="Export">📄</span>
                <div className="analytics-feature-title">Export Everything</div>
                <div className="analytics-feature-desc">CSV, Excel, PDF formats</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Complete Solution</div>
            <h2 className="section-title">Everything else you need</h2>
          </div>

          <div className="additional-features-grid">
            <div className="additional-feature">
              <h4>🔍 Digital Inspections</h4>
              <p>Pre-trip checklists via mobile app. Failed items auto-create maintenance tickets. Complete inspection history per vehicle.</p>
            </div>
            <div className="additional-feature">
              <h4>📅 Service Scheduling</h4>
              <p>Set reminders based on time, mileage, or engine hours. Never miss a maintenance window. Prevent breakdowns.</p>
            </div>
            <div className="additional-feature">
              <h4>📝 Work Orders</h4>
              <p>Create, assign, and track repairs. Labor and parts cost tracking. In-house or external mechanics supported.</p>
            </div>
            <div className="additional-feature">
              <h4>💵 Expense Management</h4>
              <p>Track all fleet expenses by category and vehicle. Receipt upload. Approval workflows. Complete financial visibility.</p>
            </div>
            <div className="additional-feature">
              <h4>🚗 Vehicle Registry</h4>
              <p>Complete vehicle profiles with capacity, permits, assignments. Track operational status: Available, In Use, Maintenance.</p>
            </div>
            <div className="additional-feature">
              <h4>📱 Driver Mobile App</h4>
              <p>Drivers check in, report issues, request parts, and submit inspections—all from their phone. Works offline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Trusted by professional fleet operators</h2>
          </div>
          <div className="stats-grid">
            <div className="stat-item">
              <h4>30+</h4>
              <p>Enterprise Customers</p>
            </div>
            <div className="stat-item">
              <h4>10M+</h4>
              <p>GPS Points Processed Daily</p>
            </div>
            <div className="stat-item">
              <h4>15 min</h4>
              <p>Average Approval Time</p>
            </div>
            <div className="stat-item">
              <h4>48 hrs</h4>
              <p>Typical Driver Adoption</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Talk to us today"
        subtitle="See how LogixFleet can help you stay compliant, control costs, and run professional fleet operations. No commitment, no pressure—just honest answers."
        showContact={true}
      />
    </main>
  );
};

export default FleetSolution;
