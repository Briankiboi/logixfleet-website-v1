import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './UseCases.css';

const UseCases = () => {
  return (
    <main className="use-cases-page">
      <SEO
        title="Case Study: RJ Logistics 12.5% Fleet Uptime Improvement"
        description="How RJ Logistics achieved 12.5% fleet uptime improvement in 60 days by moving from WhatsApp + paper operations to SIPHYY's end-to-end fleet operating system."
        keywords="case study, fleet operations, fleet uptime, RJ Logistics, SIPHYY case study, fleet management success story"
        canonical="/use-cases/rj-logistics"
      />

      {/* Hero Section */}
      <section className="use-case-hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-badge-group">
              <span className="hero-badge">Case Study</span>
              <span className="hero-date">Feb 03, 2026</span>
            </div>

            <h1 className="hero-main-title">
              From WhatsApp chaos to<br />
              <span className="gradient-text">complete fleet control</span>
            </h1>

            <p className="hero-lead">
              How a 26-vehicle ride-hailing fleet achieved 12.5% uptime improvement in 60 days
              without disrupting daily operations
            </p>

            <div className="hero-stats-inline">
              <div className="inline-stat">
                <span className="inline-stat-value">12.5%</span>
                <span className="inline-stat-label">Uptime boost</span>
              </div>
              <span className="stat-divider">•</span>
              <div className="inline-stat">
                <span className="inline-stat-value">26+</span>
                <span className="inline-stat-label">Vehicles</span>
              </div>
              <span className="stat-divider">•</span>
              <div className="inline-stat">
                <span className="inline-stat-value">60 days</span>
                <span className="inline-stat-label">To results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Grid */}
      <section className="section section-overview">
        <div className="container-narrow">
          <div className="overview-grid">
            <div className="overview-card">
              <div className="overview-label">Company</div>
              <div className="overview-value">RJ Logistics</div>
              <div className="overview-desc">Ride-hailing operations</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Challenge</div>
              <div className="overview-value">Scaling chaos</div>
              <div className="overview-desc">WhatsApp + paper trails</div>
            </div>
            <div className="overview-card">
              <div className="overview-label">Approach</div>
              <div className="overview-value">Iterative rollout</div>
              <div className="overview-desc">Module-by-module deployment</div>
            </div>
            <div className="overview-card highlight">
              <div className="overview-label">Result</div>
              <div className="overview-value">12.5% uptime</div>
              <div className="overview-desc">In first 60 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="section">
        <div className="container-narrow">
          <div className="content-block">
            <div className="section-number">01</div>
            <h2 className="section-heading">The breaking point</h2>
            <div className="content-text">
              <p className="lead-paragraph">
                RJ Logistics is a growing ride-hailing fleet with 26+ vehicles. As the fleet scaled,
                the operational workload scaled faster than the team's ability to track work end-to-end.
              </p>
              <p>
                Before SIPHYY, information lived in WhatsApp threads and paper. Issues were handled,
                but not consistently recorded — which made it hard to prevent repeat failures, close
                compliance gaps, and stop small spend leaks from compounding over time.
              </p>
            </div>
          </div>

          <div className="problem-grid">
            <div className="problem-card">
              <h3>No single source of truth</h3>
              <p>
                Repeat faults return as "new" problems because there's no searchable vehicle history.
              </p>
            </div>
            <div className="problem-card">
              <h3>Receipts not tied to vehicles</h3>
              <p>
                Leaks hide inside month-end reconciliation. Duplicates hard to spot early.
              </p>
            </div>
            <div className="problem-card">
              <h3>Manual renewals</h3>
              <p>
                Compliance becomes a surprise event. Expiry risk increases as the fleet grows.
              </p>
            </div>
            <div className="problem-card">
              <h3>No preventive maintenance</h3>
              <p>
                Repairs treated as one-off events. Without history, prevention is impossible.
              </p>
            </div>
          </div>

          <div className="insight-box">
            <div className="insight-content">
              <strong>The operator reality</strong>
              <p>What breaks first isn't effort. It's traceability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="content-block">
            <div className="section-number">02</div>
            <h2 className="section-heading">The rollout strategy</h2>
            <div className="content-text">
              <p className="lead-paragraph">
                SIPHYY was introduced in installments to avoid disrupting daily operations.
                Each installment added one control point that made the next installment easier to adopt.
              </p>
              <p className="why-order">
                We started with vehicle-level traceability because it becomes the foundation for compliance control and preventive maintenance.
              </p>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Vehicle-level tracking</h3>
                <p>
                  Every event (issue, repair, part, cost) must be tied to a specific vehicle record.
                  No more scattered information.
                </p>
              </div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Compliance register</h3>
                <p>
                  Expiry dates become visible system states. Renewals only closed when evidence is uploaded.
                  Zero surprises.
                </p>
              </div>
            </div>
            <div className="timeline-connector"></div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Maintenance workflow</h3>
                <p>
                  Issue → review → approval → work done → evidence → closure. Creates vehicle history
                  that enables preventive maintenance.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Transformation */}
      <section className="section">
        <div className="container-narrow">
          <div className="content-block">
            <div className="section-number">03</div>
            <h2 className="section-heading">What changed day-to-day</h2>
          </div>

          <div className="transformation-grid">
            <div className="transformation-item">
              <h3>Issue reporting</h3>
              <div className="before-after-comparison">
                <div className="comparison-side before">
                  <span className="comparison-label">Before</span>
                  <p>An issue starts as a message and ends as a memory</p>
                </div>
                <div className="comparison-arrow">→</div>
                <div className="comparison-side after">
                  <span className="comparison-label">After</span>
                  <p>Tracked record with status and evidence at closure</p>
                </div>
              </div>
            </div>

            <div className="transformation-item">
              <h3>Maintenance & parts</h3>
              <div className="before-after-comparison">
                <div className="comparison-side before">
                  <span className="comparison-label">Before</span>
                  <p>Hard to know what was fitted recently</p>
                </div>
                <div className="comparison-arrow">→</div>
                <div className="comparison-side after">
                  <span className="comparison-label">After</span>
                  <p>Complete vehicle timeline enables smarter decisions</p>
                </div>
              </div>
            </div>

            <div className="transformation-item">
              <h3>Compliance</h3>
              <div className="before-after-comparison">
                <div className="comparison-side before">
                  <span className="comparison-label">Before</span>
                  <p>Manual tracking, renewals could be missed</p>
                </div>
                <div className="comparison-arrow">→</div>
                <div className="comparison-side after">
                  <span className="comparison-label">After</span>
                  <p>Visible per vehicle with automated reminders</p>
                </div>
              </div>
            </div>

            <div className="transformation-item">
              <h3>Admin workload</h3>
              <div className="before-after-comparison">
                <div className="comparison-side before">
                  <span className="comparison-label">Before</span>
                  <p>Time spent chasing updates and assembling info</p>
                </div>
                <div className="comparison-arrow">→</div>
                <div className="comparison-side after">
                  <span className="comparison-label">After</span>
                  <p>Time spent making decisions, not searching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="section section-results">
        <div className="container-narrow">
          <div className="content-block">
            <div className="section-number">04</div>
            <h2 className="section-heading">Results after 60 days</h2>
            <p className="section-subtitle">Measured results on SIPHYY</p>
          </div>

          <div className="results-hero">
            <div className="results-main">
              <div className="results-big-number">12.5%</div>
              <div className="results-big-label">Fleet uptime improvement</div>
              <div className="results-footnote">
                Uptime = vehicles available for trips (not grounded by breakdowns, maintenance holds, or compliance blocks).
              </div>
            </div>
          </div>

          <div className="what-we-didnt-do">
            <h3>What we didn't do</h3>
            <ul>
              <li>We didn't buy new vehicles</li>
              <li>We didn't hire additional fleet admin</li>
              <li>We didn't pause daily operations</li>
            </ul>
          </div>

          <div className="results-grid">
            <div className="result-card">
              <h3>Operational control</h3>
              <p>Faster access to vehicle history, clearer approvals/evidence, and fewer "unknowns" during incidents</p>
            </div>
            <div className="result-card">
              <h3>Preventive capability</h3>
              <p>Maintenance easier to schedule and execute because issues and actions are recorded consistently</p>
            </div>
            <div className="result-card">
              <h3>Reduced pressure to hire</h3>
              <p>Same team managing more vehicles because workflows and statuses are centralized</p>
            </div>
          </div>

          <div className="final-quote">
            <div className="final-quote-content">
              <p className="final-quote-text">
                "Growth used to mean chaos. Now it means scale. We're managing more vehicles
                with the same team, and we actually know what's happening."
              </p>
              <div className="final-quote-attribution">
                <strong>RJ Logistics Operations Team</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="section case-study-cta">
        <div className="container-narrow">
          <div className="cta-box">
            <h2>Ready to get the same results?</h2>
            <p>See how SIPHYY can transform your fleet operations in 60 days.</p>
            <div className="cta-buttons">
              <Link to="/book-a-demo" className="btn btn-primary btn-large">Book a Demo</Link>
              <Link to="/fleet-solution" className="btn btn-secondary">Learn more about Fleet Control OS</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UseCases;
