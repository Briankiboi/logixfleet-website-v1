import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import './PitchDeck.css';

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle image load errors - fall back to placeholder
  const handleImageError = (slideId) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  const slides = [
    {
      id: 1,
      title: "Cover Slide",
      slideContent: "Siphyy",
      slideSubtitle: "Powered by",
      image: "/img/slide1.png",
      content: [
        `The very first slide in Siphyy's deck is as clean as it gets—just the company logo with "Powered by" on a plain background. No subtitle. No clutter. And honestly? That's what makes it powerful.`,
        `I've seen a lot of founders overthink the cover slide, stuffing it with taglines, mission statements, or logos of companies they hope to impress. But Siphyy does the opposite. It's calm. Confident. Minimal.`,
        `It sets the tone for a clear, focused pitch—and shows polish without trying too hard.`
      ],
      takeaway: `Keep your cover slide minimal and intentional. A clean design with your logo or company name is more than enough. It signals confidence and gives your pitch room to breathe from the very first moment.`
    },
    {
      id: 2,
      title: "What is Siphyy?",
      slideContent: "Siphyy brings observability to what breaks and accountability to what's spent, turning fleet guesswork into governed profit.",
      slideSubtitle: "What is Siphyy?",
      image: "/img/slide2.png",
      content: [
        `"Siphyy brings observability to what breaks and accountability to what's spent, turning fleet guesswork into governed profit."`,
        `This single sentence does heavy lifting. It clearly articulates the problem (fleet guesswork), the solution (observability and accountability), and the outcome (governed profit). Investors can immediately understand what the company does without wading through jargon.`,
        `The best value propositions answer three questions in one breath: What's broken? What do you do about it? What's the result? Siphyy nails all three.`
      ],
      takeaway: `Your value proposition should fit in one sentence. If you can't explain it simply, you don't understand it well enough. Aim for problem → solution → outcome in a single statement.`
    },
    {
      id: 3,
      title: "The Core Insight",
      slideContent: "You can't optimize last-mile delivery if your fleet is broken.",
      slideSubtitle: "The Core Insight",
      image: "/img/slide3.png",
      content: [
        `"You can't optimize last-mile delivery if your fleet is broken."`,
        `This slide presents the fundamental insight that drives the entire business. It's a powerful statement that reframes the problem: while everyone focuses on delivery optimization, they're ignoring the foundation—fleet health.`,
        `The simplicity is intentional. One bold statement, no bullet points, no charts. This forces investors to pause and consider the logic. It's counterintuitive enough to be memorable but obvious enough to be undeniable once stated.`
      ],
      takeaway: `Lead with an insight, not a feature list. A single powerful observation can be more compelling than a dozen data points. Make investors see the problem differently.`
    },
    {
      id: 4,
      title: "Why I Built Siphyy",
      slideContent: "The problem wasn't bad drivers or broken cars. It was no data.",
      slideSubtitle: "25 Uber cars • 4–5 years • $12k/month revenue",
      image: "/img/slide4.png",
      content: [
        `This slide humanizes the pitch by sharing the founder's firsthand experience: 25 Uber cars operated over 4–5 years, $12k/month revenue with daily cash flow management, and repair spend that swung wildly from 10% to 120% of revenue.`,
        `The brutal reality: one month saw $5k in repairs against $12k earnings. The key insight? "The problem wasn't bad drivers or broken cars—it was no data."`,
        `No system of record. Untracked parts, duplicate replacements, counterfeit components. Without audit trails, you can't distinguish fraud from legitimate expenses. This personal narrative establishes credibility and demonstrates deep domain expertise.`
      ],
      takeaway: `Founder-market fit matters. Show investors you understand the problem because you've experienced it firsthand. Personal stories create emotional connection and credibility.`
    },
    {
      id: 5,
      title: "The Problem: FMCG Fleet Operators",
      slideContent: "Losing 10–20% monthly to invisible waste",
      slideSubtitle: "The Problem: FMCG Fleet Operators",
      image: "/img/slide5.png",
      content: [
        `This slide systematically breaks down the customer's pain points with specificity that signals deep customer understanding:`,
        `• Thin margins: Operating $30–100k/month in fleet revenue, but lose 10–20% monthly to invisible waste (repairs, fraud, duplicates)
• Duplicate work: Battery replaced twice in one month. Drivers don't know. No history.
• No supplier truth: Can't verify original vs. counterfeit parts. No audit trail.
• Operations on WhatsApp + paper: Procurement approval? Untracked. Fuel siphoning? Undetected.
• Tender risk: Can't bid confidently, forced to hedge with extra vehicles`,
        `Each pain point is specific and quantified where possible. This isn't abstract—it's the daily reality of the target customer.`
      ],
      takeaway: `Quantify the pain. Specific numbers and real scenarios are more compelling than generic problem statements. Show you've talked to customers.`
    },
    {
      id: 6,
      title: "Why Existing Tools Don't Work",
      slideContent: "Trackers solve symptoms, not causes. ERPs are built for global ops, not African fleet ops.",
      slideSubtitle: "Why Existing Tools Don't Work",
      image: "/img/slide6.png",
      content: [
        `Rather than positioning against competitors feature-by-feature, this slide explains why entire categories fail to solve the problem:`,
        `Trackers (Leta, Songa, etc.): Optimize routing and ETA. Don't address root fleet problems: breakdown prevention, fraud detection, cost governance. Solve symptoms, not causes.`,
        `Generic ERPs (Odoo, SAP): Solve everything. Require heavy customization, specialist teams, and months to deploy. Built for global ops, not African fleet ops.`,
        `This framing is strategic—it's not about being better at the same thing, it's about solving a fundamentally different problem.`
      ],
      takeaway: `Don't just compare features. Explain why existing categories can't solve this problem—it creates space for a new solution and positions you as a category creator.`
    },
    {
      id: 7,
      title: "Our Thesis",
      slideContent: "Purpose-built for FMCG fleets in Africa. Fix fleet operations at the root layer.",
      slideSubtitle: "System of record + Governance + Anomaly detection",
      image: "/img/slide7.png",
      content: [
        `"Purpose-built for FMCG fleets in Africa."`,
        `The thesis slide distills the company's strategic bet into three pillars:`,
        `1. System of Record — Capture what actually happens
2. Governance — Control what gets approved and spent
3. Anomaly Detection — Flag what doesn't look right`,
        `The tagline "Fix fleet operations at the root layer" positions Siphyy as infrastructure, not a feature. This is a deliberate choice to signal ambition and defensibility to investors.`
      ],
      takeaway: `Frame your solution as a platform or system, not a feature. Infrastructure plays command higher valuations and signal long-term defensibility.`
    },
    {
      id: 8,
      title: "Market Sizing",
      slideContent: "$100M+ Pan-Africa opportunity",
      slideSubtitle: "Market Sizing from Kenya to East Africa Scale",
      image: "/img/slide8.png",
      content: [
        `The market sizing follows a clear bottom-up approach that investors love:`,
        `Kenya FMCG Market: 3,500-5,000 vehicles across 80-100 operators, $27K-$54K ACV per customer.`,
        `Venture-Scale TAM (Multi-Segment + Multi-Region): Pan-Africa opportunity $100M+, East Africa (Tanzania + Uganda) = $20M+ TAM in 24–36 months, West Africa (Nigeria/Ghana) = 5–10x TAM.`,
        `Year 1 target: 3 customers × $36K = $108K ARR by Q4. The pricing model ($1.5K base + $15/vehicle) is transparent and shows clear unit economics.`
      ],
      takeaway: `Show your math. Bottom-up market sizing with clear assumptions is more credible than top-down TAM claims. Investors want to see you understand your beachhead.`
    },
    {
      id: 9,
      title: "Why Now?",
      slideContent: "5 Tailwinds driving fleet SaaS adoption",
      slideSubtitle: "Why now?",
      image: "/img/slide9.png",
      content: [
        `This slide answers the critical investor question: "Why hasn't someone already solved this?"`,
        `1. Fuel price volatility — Operators can't afford hidden waste. Every liter counts.
2. Tender requirements tightening — Logistics companies demanding "proof of fleet uptime" before awarding contracts.
3. Insurance & compliance pressure — Regulators pushing for audit trails on fleet spend and maintenance.
4. WhatsApp ubiquity — Zero training cost, instant adoption.
5. ERP failure in Africa — Customization too slow/expensive.`,
        `Each tailwind is specific to the African market context, demonstrating local knowledge that global competitors lack.`
      ],
      takeaway: `The 'Why Now?' slide separates good ideas from investable opportunities. Show the tailwinds that make this moment unique for your solution.`
    },
    {
      id: 10,
      title: "Capture Reality",
      slideContent: "No new app. Drivers capture reality from the field in minutes via WhatsApp.",
      slideSubtitle: "Capture Reality",
      image: "/img/slide10.png",
      content: [
        `The first product pillar focuses on getting ground truth from the field without requiring new app adoption:`,
        `• Pre-trip inspections: Checklist + photos. Issues auto-created as work orders.
• Shift check-ins: Start/end shifts, odometer, notes, all via WhatsApp or web.
• Issue reporting: Drivers flag problems instantly. Escalate to ops team.`,
        `The key insight: "No new app." Drivers already use WhatsApp daily. This dramatically reduces adoption friction and training costs—critical in markets with high driver turnover.`
      ],
      takeaway: `Meet users where they are. Building on existing behavior (WhatsApp) beats forcing new app adoption every time.`
    },
    {
      id: 11,
      title: "Govern Spend",
      slideContent: "Stop duplicate repairs and fraudulent spend with auditable approval workflows.",
      slideSubtitle: "Govern Spend",
      image: "/img/slide11.png",
      content: [
        `The second pillar addresses the fraud and waste problem with auditable approval workflows:`,
        `• Parts/repair requests: Driver or ops requests via WhatsApp/Web.
• Auto-check history: When was this part last replaced? Warranty? Shelf life?
• Approve with evidence: Full audit trail. Prevents duplicates, fraud, unnecessary spend.`,
        `This feature directly addresses the founder's original pain point—uncontrolled spending with no visibility. The before/after is clear: chaotic WhatsApp threads become structured, auditable workflows.`
      ],
      takeaway: `Connect features to pain points. Every capability should trace back to a specific problem you've already established in your deck.`
    },
    {
      id: 12,
      title: "Detect Anomalies & AI",
      slideContent: "Fleet AI • Fuel AI • Carbon Tracking",
      slideSubtitle: "Detect Anomalies & AI",
      image: "/img/slide12.png",
      content: [
        `The third pillar adds an intelligence layer that's practical rather than hype-driven:`,
        `• Fleet AI: Ask your fleet: "What's broken?" "Who's at risk this week?" One question view.
• Fuel AI: Anomaly detection. Efficiency drops? Unusual consumption? Flag it. Diagnose: theft vs. mechanical fault vs. bad data.
• Carbon tracking: Less fuel used = lower emissions. ESG-ready reporting.`,
        `The AI positioning is pragmatic. It's presented as a tool for answering specific operational questions, not as magic. The carbon tracking ties into growing ESG requirements from enterprise customers.`
      ],
      takeaway: `Position AI as a tool that answers specific questions, not as a silver bullet. Practical AI beats vaporware every time.`
    },
    {
      id: 13,
      title: "Who We Serve",
      slideContent: "The FMCG Fleet Operator",
      slideSubtitle: "50-500 vehicles • $30-100k/month",
      image: "/img/slide13.png",
      content: [
        `This slide paints a vivid picture of the ideal customer profile:`,
        `• 50-500 vehicles
• Delivering daily to retailers along Kenya
• Operating $30-100k/month in fleet revenue
• Losing 10-20% monthly to invisible leaks (duplicate repairs, fraud, fuel anomalies)`,
        `The customer quote crystallizes the pain: "I bid for a big tender, but I can't confidently commit because I don't know if my fleet will hold up. So I hire extra vehicles to hedge my risk. But that cuts my margin."`,
        `This specificity helps investors understand exactly who will buy and why.`
      ],
      takeaway: `A detailed ICP (Ideal Customer Profile) shows you know exactly who you're selling to. Vague target markets raise red flags with investors.`
    },
    {
      id: 14,
      title: "Why Siphyy Wins",
      slideContent: "Purpose-built for FMCG fleet ops in Africa. Deploy in weeks. No customization.",
      slideSubtitle: "Why Siphyy Wins",
      image: "/img/slide14.png",
      content: [
        `This slide directly addresses competition across three dimensions:`,
        `vs. Trackers (Leta, Songa, etc.): Purpose: Routing + ETA optimization. Siphyy: Fix fleet operations at root layer, maintenance governance, fraud detection, cost control, uptime prediction. Different category entirely.`,
        `vs. Generic ERPs (Odoo, SAP, ERPNext): Build time: 6–12 months customization + specialist teams. Siphyy: Purpose-built for FMCG fleet ops in Africa. Deploy in weeks. No customization. Workflow pre-baked.`,
        `vs. Status Quo (WhatsApp + Spreadsheets): Today: No audit trails, no system of record, uncontrolled spend, no anomaly detection. Siphyy: First-mover in FMCG fleet operations SaaS.`
      ],
      takeaway: `Position against alternatives, not just competitors. The status quo (spreadsheets + WhatsApp) is often your biggest competitor.`
    },
    {
      id: 15,
      title: "Integrations",
      slideContent: "Seamless integration with existing systems",
      slideSubtitle: "ERP, e-commerce, and accounting systems",
      image: "/img/slide15.png",
      content: [
        `This slide addresses a key enterprise concern: integration with existing systems.`,
        `Siphyy integrates seamlessly with your existing: ERP, e-commerce, and accounting systems. This is critical for enterprise customers who can't rip and replace their entire tech stack.`,
        `By positioning as a layer that works with existing infrastructure rather than replacing it, Siphyy reduces implementation risk and shortens sales cycles. It's a pragmatic approach that acknowledges the reality of enterprise software adoption.`
      ],
      takeaway: `Show how you fit into existing workflows. Enterprise buyers need to know you won't disrupt their current systems—integration capability is often a deal-breaker.`
    },
    {
      id: 16,
      title: "Go-To-Market Strategy",
      slideContent: "Founder-led sales → Pilots → Expansion",
      slideSubtitle: "Go-To-Market Strategy",
      image: "/img/slide16.png",
      content: [
        `The GTM strategy is broken into clear phases that show discipline:`,
        `Phase 1 (Months 0-3): Close 3 FMCG fleet pilots in Kenya. Prove unit level. Direct Sales Model: Founder-led sales in Year 1. Sales hire only after validating conversion + pricing.`,
        `Phase 2 (Months 3-6): Convert 3 pilots to paying customers. Lock in repeatable economics.`,
        `Phase 3 (Months 6-12): Reach 5+ paying customers (~$180k ARR run-rate). Expand to Tanzania/Uganda. Build case studies + referral engine.`,
        `No premature scaling—validate in Kenya first, then expand. This staged approach resonates with investors who've seen startups burn cash on expansion too early.`
      ],
      takeaway: `Show a phased GTM plan. Investors want to see you'll validate before scaling, not burn cash on premature expansion.`
    },
    {
      id: 17,
      title: "The Team",
      slideContent: "Operator-led with full-stack capability",
      slideSubtitle: "The Team",
      image: "/img/slide17.png",
      content: [
        `The team slide introduces the core team building Siphyy:`,
        `• Surajit Das — Founder (with direct fleet operations experience)
• Brian Kiboi — QA Tester
• Elvis Kangethe — Full Stack Developer
• Nicky Chemos — Backend Developer
• Mordecai Junior — Frontend Developer`,
        `The founder's operational background is the key differentiator—this isn't a tech team guessing at fleet problems. They're building from lived experience with a capable development team to execute.`
      ],
      takeaway: `Highlight founder-market fit. Technical skills matter, but domain expertise in your target market is often more valuable to investors.`
    },
    {
      id: 18,
      title: "Rationale + Unit Economics",
      slideContent: "ROI payback and unit economics breakdown",
      slideSubtitle: "Rationale + Unit Economics",
      image: "/img/slide19.png",
      content: [
        `This slide addresses the critical question of ROI and unit economics:`,
        `• Value Anchor: Trackers solve routing. Siphyy solves cost control (audit trail + governance + anomalies). Not comparable—different category.
• ROI payback: 100-vehicle fleet loses $1.5–5k/month to maintenance fraud + duplicate repairs + fuel anomalies. Siphyy at $3k/month becomes ROI-positive by preventing one fraud/duplicate incident or avoiding one major downtime day per month.`,
        `• Unit econ: Typical customer $36k/year ACV × 80% GM = $28.8k gross profit/year. CAC ~$8k (includes pilot support + travel + founder-led sales) → CAC payback 3–4 months.
• Transparent scaling: Every vehicle adds $15/mo value. No cliff pricing. Revenue grows as customer success grows.`
      ],
      takeaway: `Show clear ROI math. Investors want to see that your customers will obviously benefit from using your product—and that your unit economics support a scalable business.`
    },
    {
      id: 19,
      title: "Pre-Seed Ask",
      slideContent: "$500k Pre-Seed: Allocation & Year 1 Ramp",
      slideSubtitle: "Use of Funds (12–15mo runway)",
      image: "/img/slide20.png",
      content: [
        `This slide clearly breaks down the $500k pre-seed ask:`,
        `• GTM & Sales (45%): $225k — Founder-led sales + 1 sales rep + customer success
• Product & Eng (35%): $175k — Founder + 2 engineers (backend, mobile); Q2/Q4 hiring per plan
• Ops & Infra (15%): $75k — Cloud hosting, legal, WhatsApp API, compliance tooling
• Buffer (5%): $25k — Contingency + travel`,
        `Year 1 Sales Path (Realistic, Pilot-Driven):
• 3 pilots in flight (overlapping): 10–14 week cycle
• Q2 2026: 1st paid conversion ($36k ACV)
• Q3 2026: 2nd paid ($72k ARR run-rate)
• Q4 2026: 3rd paid ($108k run-rate)
• Q1 2027: 5+ customers (~$180k ARR run-rate)`
      ],
      takeaway: `Be specific about how you'll use the money. Break down allocations by function and show a realistic path to milestones. Investors appreciate transparency and realistic projections.`
    },
    {
      id: 20,
      title: "ESG Impact",
      slideContent: "Inefficient fleets don't just leak profit, they leak emissions.",
      slideSubtitle: "Environmental Impact",
      image: "/img/slide21.png",
      content: [
        `"Inefficient fleets don't just leak profit, they leak emissions."`,
        `This slide connects operational efficiency to environmental impact—a growing priority for enterprise customers and investors alike. When fleets run better, they consume less fuel and produce fewer emissions.`,
        `The ESG angle isn't greenwashing—it's a natural consequence of the core product. Better Fleet Control OS = less waste = lower carbon footprint. This positions Siphyy favorably for companies with sustainability mandates.`
      ],
      takeaway: `If your product has genuine ESG benefits, highlight them. Many enterprise customers now have sustainability requirements in their procurement processes.`
    },
    {
      id: 21,
      title: "Let's Fix the Backbone",
      slideContent: "Siphyy is building the Fleet Control OS for reliable African logistics.",
      slideSubtitle: "Join us in solving the root layer.",
      image: "/img/slide22.png",
      content: [
        `"Let's Fix the Backbone"`,
        `The closing slide brings the pitch full circle with a clear call to action. It restates the vision: Siphyy is building the Fleet Control OS for reliable African logistics.`,
        `The tagline "Join us in solving the root layer" invites investors to be part of building critical infrastructure—not just backing another app. It's a compelling close that reinforces the platform positioning established throughout the deck.`
      ],
      takeaway: `End with a strong, memorable close. Restate your vision and invite investors to join the mission. Leave them with a clear sense of what you're building and why it matters.`
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Share functionality
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://siphyy.com/pitch-deck';
  const shareTitle = "Siphyy Pitch Deck - Fleet Operations Platform";
  const shareText = "Check out Siphyy's pitch deck - building the fleet operations OS for Africa's FMCG industry.";

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    const encodedText = encodeURIComponent(shareText);

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(pageUrl);
      alert('Link copied to clipboard!');
    } else {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
    setShowShareMenu(false);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle keyboard events for fullscreen navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsFullscreen(false);
        setShowShareMenu(false);
      }
      if (isFullscreen) {
        if (e.key === 'ArrowLeft') handlePrevSlide();
        if (e.key === 'ArrowRight') handleNextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showShareMenu) setShowShareMenu(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showShareMenu]);

  // Render slide image or placeholder
  const renderSlideImage = (slide, isViewer = false) => {
    const hasError = imageErrors[slide.id];

    if (slide.image && !hasError) {
      return (
        <img
          src={slide.image}
          alt={`Slide ${slide.id}: ${slide.title}`}
          className={isViewer ? "viewer-slide-img" : "slide-actual-img"}
          onError={() => handleImageError(slide.id)}
        />
      );
    }

    // Fallback placeholder
    return (
      <div className={isViewer ? "slide-display" : "slide-placeholder"}>
        {slide.slideSubtitle && (
          <span className={isViewer ? "slide-display-label" : "slide-subtitle"}>{slide.slideSubtitle}</span>
        )}
        <span className={isViewer ? "slide-display-title" : "slide-main-text"}>{slide.slideContent}</span>
      </div>
    );
  };

  return (
    <main className="pitch-deck-page">
      <SEO
        title="Siphyy Pitch Deck (Detailed Slide Breakdown) - Fleet Operations Platform"
        description="Explore Siphyy's investor pitch deck with detailed analysis of each slide. Learn how this fleet operations startup is bringing observability and accountability to African logistics."
        keywords="pitch deck, investor deck, Siphyy, Fleet Control OS, FMCG, Africa, startup, logistics, pitch deck analysis"
        canonical="/pitch-deck"
      />

      {/* Article Header */}
      <article className="deck-article">
        <header className="deck-header">
          <div className="container">
            <div className="deck-header-inner">
              <div className="deck-header-main">
                <span className="deck-date">Updated January 2025</span>
                <h1 className="deck-title">
                  Siphyy Pitch Deck (Detailed Slide Breakdown)
                </h1>
                <div className="deck-author">
                  <div className="author-avatar">SD</div>
                  <div className="author-info">
                    <span className="author-name">Surajit Das</span>
                    <span className="author-role">Founder of Siphyy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="deck-content">
          <div className="container">
            <div className="deck-layout">
              {/* Sidebar - Jump To */}
              <aside className="deck-sidebar">
                <div className="sidebar-sticky">
                  <div className="jump-to">
                    <h3>Jump to</h3>
                    <nav className="jump-nav">
                      {slides.map((slide, index) => (
                        <a key={slide.id} href={`#slide-${slide.id}`} className="jump-link">
                          Slide {index + 1}: {slide.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="sidebar-cta">
                    <a href="/assets/siphyy-pitch-deck.pptx" download className="btn btn-primary btn-full">
                      Download Full Deck
                    </a>
                  </div>
                </div>
              </aside>

              {/* Main Article Content */}
              <div className="deck-main">
                {/* Introduction */}
                <section className="deck-intro">
                  <p>
                    Siphyy is building the fleet operations OS for Africa's FMCG industry. Founded by an operator who ran 25 Uber cars and experienced firsthand the chaos of untracked repairs, duplicate parts, and invisible waste—this deck shows how to turn operational pain into a compelling investor pitch.
                  </p>
                  <p>
                    Whether you're building in logistics, operations, or any B2B vertical where the status quo is "WhatsApp + spreadsheets," this deck is worth studying.
                  </p>
                  <p>
                    In this slide-by-slide breakdown of the <strong>Siphyy pitch deck</strong>, I'll walk you through what worked, what could've been better, and how you can borrow the same playbook for your pitch.
                  </p>
                  <p>Let's dive in.</p>
                </section>

                {/* Embedded Slide Viewer */}
                <section className="deck-viewer">
                  <div className="viewer-container">
                    <div className="viewer-slide">
                      {renderSlideImage(slides[currentSlide], true)}
                    </div>
                    <div className="viewer-controls">
                      <a href="/assets/siphyy-pitch-deck.pptx" download className="viewer-link">
                        Download PPTX
                      </a>
                      <div className="viewer-nav">
                        <button onClick={handlePrevSlide} className="nav-btn" aria-label="Previous slide">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15,18 9,12 15,6"/>
                          </svg>
                        </button>
                        <span className="nav-counter">{currentSlide + 1} of {slides.length}</span>
                        <button onClick={handleNextSlide} className="nav-btn" aria-label="Next slide">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9,18 15,12 9,6"/>
                          </svg>
                        </button>
                      </div>
                      <div className="viewer-actions">
                        <div className="share-wrapper">
                          <button
                            className="action-btn"
                            aria-label="Share"
                            onClick={(e) => { e.stopPropagation(); setShowShareMenu(!showShareMenu); }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="18" cy="5" r="3"/>
                              <circle cx="6" cy="12" r="3"/>
                              <circle cx="18" cy="19" r="3"/>
                              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                            </svg>
                          </button>
                          {showShareMenu && (
                            <div className="share-menu" onClick={(e) => e.stopPropagation()}>
                              <button onClick={() => handleShare('linkedin')} className="share-option">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                LinkedIn
                              </button>
                              <button onClick={() => handleShare('whatsapp')} className="share-option">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
                                WhatsApp
                              </button>
                              <button onClick={() => handleShare('twitter')} className="share-option">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                                X (Twitter)
                              </button>
                              <button onClick={() => handleShare('facebook')} className="share-option">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                Facebook
                              </button>
                              <button onClick={() => handleShare('copy')} className="share-option">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                                </svg>
                                Copy Link
                              </button>
                            </div>
                          )}
                        </div>
                        <button className="action-btn" aria-label="Fullscreen" onClick={toggleFullscreen}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15,3 21,3 21,9"/>
                            <polyline points="9,21 3,21 3,15"/>
                            <line x1="21" y1="3" x2="14" y2="10"/>
                            <line x1="3" y1="21" x2="10" y2="14"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* About Section */}
                <section className="deck-about">
                  <h2>About Siphyy (then vs. now)</h2>
                  <p>
                    Back in 2020, Surajit Das was running 25 Uber cars in Kenya—managing daily cash flows, monthly P&L, and watching repair costs swing wildly from 10% to 120% of revenue. One brutal month: $5k in repairs against $12k earnings.
                  </p>
                  <p>
                    The insight wasn't that drivers were bad or cars were broken—it was that there was no data. No system of record. No audit trail. No way to distinguish fraud from legitimate expenses.
                  </p>
                  <p>
                    That pain became Siphyy: a fleet operations platform purpose-built for African FMCG operators who currently manage everything on WhatsApp and paper.
                  </p>
                </section>

                {/* Detailed Analysis Section */}
                <section className="deck-analysis">
                  <h2>Detailed Siphyy pitch deck analysis (slide-by-slide)</h2>
                  <p>
                    In this section, I'll walk you through each slide of Siphyy's pitch deck—what they did right, where they kept it simple, and what you can learn from it to shape a pitch that gets a yes.
                  </p>
                  <p>Let's dive in.</p>

                  {/* Individual Slides */}
                  {slides.map((slide, index) => (
                    <div key={slide.id} id={`slide-${slide.id}`} className="slide-section">
                      <h3 className="slide-heading">Slide {index + 1}: {slide.title}</h3>

                      {/* Slide Image */}
                      <div className="slide-image">
                        {renderSlideImage(slide, false)}
                      </div>

                      {/* Slide Content */}
                      <div className="slide-body">
                        {slide.content.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      </div>

                      {/* Takeaway */}
                      <p className="slide-takeaway">
                        <strong>Takeaway:</strong> {slide.takeaway}
                      </p>
                    </div>
                  ))}
                </section>

                {/* Summary */}
                <section className="deck-summary">
                  <h2>What makes this deck work</h2>
                  <p>
                    Siphyy's pitch deck succeeds because it's built on a foundation of real operational experience. The founder didn't just identify a problem in a spreadsheet—they lived it for years running their own fleet.
                  </p>
                  <ul>
                    <li>Clear, quantified problem statement backed by personal experience</li>
                    <li>Simple product thesis: System of Record + Governance + Anomaly Detection</li>
                    <li>WhatsApp-first approach reduces adoption friction dramatically</li>
                    <li>Bottom-up market sizing with transparent assumptions</li>
                    <li>Phased GTM that validates before scaling</li>
                  </ul>
                  <p>
                    If you're building for operators who currently run their business on WhatsApp and paper, this deck offers a strong template for how to frame your pitch.
                  </p>
                </section>

                {/* CTA */}
                <section className="deck-cta-section">
                  <div className="cta-box">
                    <h3>Want to learn more about Siphyy?</h3>
                    <p>Schedule a demo to see how the platform can transform your fleet operations.</p>
                    <div className="cta-buttons">
                      <Link to="/book-a-demo" className="btn btn-primary">Book a Demo</Link>
                      <a href="/assets/siphyy-pitch-deck.pptx" download className="btn btn-outline">Download Deck</a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fullscreen-modal" onClick={toggleFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <button className="fullscreen-close" onClick={toggleFullscreen} aria-label="Close fullscreen">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="fullscreen-slide">
              {renderSlideImage(slides[currentSlide], true)}
            </div>
            <div className="fullscreen-controls">
              <button onClick={handlePrevSlide} className="fullscreen-nav-btn" aria-label="Previous slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"/>
                </svg>
              </button>
              <span className="fullscreen-counter">{currentSlide + 1} / {slides.length}</span>
              <button onClick={handleNextSlide} className="fullscreen-nav-btn" aria-label="Next slide">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </button>
            </div>
            <p className="fullscreen-hint">Use arrow keys to navigate • Press ESC to close</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default PitchDeck;
