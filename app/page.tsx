import Logo from "../components/Logo";

const electricalServices = [
  "Electrical Wiring & Installation",
  "LT / HT Panel Installation",
  "Electrical Maintenance & Repair",
  "Generator & Inverter Installation",
  "CCTV, Networking & Intercom",
  "Solar Power Solutions",
  "Fire Alarm & Safety Systems",
  "Electrical Consultation",
];

const civilServices = [
  "Building Construction",
  "Renovation & Remodeling",
  "Civil Engineering Works",
  "Plumbing & Sanitary Works",
  "Flooring & Tiling",
  "Painting Works",
  "Structural Repair & Strengthening",
  "Estimation & Consultancy",
];

const serviceCards = [
  {
    icon: "⚡",
    title: "Electrical Services",
    description:
      "Complete electrical installation, repair and maintenance solutions.",
  },
  {
    icon: "🏗️",
    title: "Civil Services",
    description:
      "Construction, renovation and civil engineering for residential and commercial projects.",
  },
  {
    icon: "🏠",
    title: "Residential",
    description:
      "Electrical and civil solutions for homes, apartments and renovations.",
  },
  {
    icon: "🏢",
    title: "Commercial",
    description:
      "Professional contracting solutions for offices, shops and commercial properties.",
  },
  {
    icon: "🏭",
    title: "Industrial",
    description:
      "Electrical infrastructure, panels, maintenance and industrial project support.",
  },
  {
    icon: "☀️",
    title: "Solar Solutions",
    description:
      "Practical solar power solutions for homes, businesses and facilities.",
  },
];

export default function Home() {
  const phone = "+918249024718";

  const whatsappHref =
    "https://wa.me/918249024718?text=Hello%20Sanjaya%20Electricals%2C%20I%20would%20like%20to%20discuss%20a%20project.";

  const quoteHref =
    "mailto:support@sanjayaelectricals.com?subject=Project%20Quote%20Request&body=Hello%20Sanjaya%20Electricals%2C%0A%0AI%20would%20like%20a%20quote%20for%3A%0A%0ALocation%3A%0AProject%20type%3A%0ARequirements%3A%0A%0AThank%20you.";

  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=House+No+7+Lane+no+2+Gundicha+Vihar+Puri+Odisha+752002";

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav">
          <a className="header-brand" href="#top" aria-label="Sanjaya Electricals home">
            <Logo compact />

            <span className="header-memory">
              In Memory of Sanjay Suar
            </span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="header-phone" href={`tel:${phone}`}>
              <span className="header-phone-icon" aria-hidden="true">
                ☎
              </span>

              <span className="header-phone-text">
                <small>Call us</small>
                <strong>+91 82490 24718</strong>
              </span>
            </a>

            <a className="mobile-contact-button" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* HERO */}

        <section id="top" className="hero">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker">
                ELECTRICAL & CIVIL CONTRACTORS
              </div>

              <h1>
                Powering Today,
                <span>Building Tomorrow.</span>
              </h1>

              <p className="hero-description">
                Reliable electrical solutions and civil construction services
                for homes, businesses and industries across Odisha.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-orange"
                  href={`tel:${phone}`}
                >
                  <span aria-hidden="true">☎</span>
                  Call Now
                </a>

                <a
                  className="button button-whatsapp"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span aria-hidden="true">●</span>
                  WhatsApp
                </a>

                <a
                  className="button button-outline"
                  href={quoteHref}
                >
                  <span aria-hidden="true">✉</span>
                  Get a Quote
                </a>
              </div>

              <div className="hero-trust">
                <div>
                  <span className="trust-icon">✓</span>
                  <div>
                    <strong>Licensed</strong>
                    <small>Contractor</small>
                  </div>
                </div>

                <div>
                  <span className="trust-icon">✓</span>
                  <div>
                    <strong>Insured</strong>
                    <small>Reliable service</small>
                  </div>
                </div>

                <div>
                  <span className="trust-icon">✓</span>
                  <div>
                    <strong>Trusted</strong>
                    <small>Quality work</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-panel">
              <div className="panel-circle" />

              <div className="electrical-panel">
                <div className="breaker-row">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="breaker-row second">
                  <span />
                  <span />
                  <span />
                </div>
              </div>

              <div className="hero-object construction">
                🏗️
              </div>

              <div className="hero-object bulb">
                💡
              </div>

              <div className="hero-object helmet">
                ⛑️
              </div>

              <div className="proprietor-card">
                <small>Proprietor</small>

                <strong>
                  Sushree Sangeeta Mohanty
                </strong>

                <div className="proprietor-line" />

                <p>
                  Electrical • Civil • Residential • Commercial • Industrial
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT */}

        <section className="quick-contact" aria-label="Quick contact options">
          <div className="container quick-contact-grid">
            <a href={`tel:${phone}`}>
              <span className="quick-icon" aria-hidden="true">
                ☎
              </span>

              <div>
                <small>Call us</small>
                <strong>+91 82490 24718</strong>
              </div>
            </a>

            <a href="mailto:support@sanjayaelectricals.com">
              <span className="quick-icon" aria-hidden="true">
                ✉
              </span>

              <div>
                <small>Email</small>
                <strong>
                  support@sanjayaelectricals.com
                </strong>
              </div>
            </a>

            <a
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              <span className="quick-icon" aria-hidden="true">
                ⌖
              </span>

              <div>
                <small>Location</small>
                <strong>Puri, Odisha</strong>
              </div>
            </a>
          </div>
        </section>

        {/* ABOUT */}

        <section id="about" className="section about-section">
          <div className="container section-split">
            <div>
              <div className="section-kicker">
                ABOUT US
              </div>

              <h2>
                One trusted team for electrical and civil work.
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Sanjaya Electricals & Civil Contractors provides complete
                electrical and civil contracting solutions for residential,
                commercial and industrial projects.
              </p>

              <p>
                From electrical wiring and panel installation to construction,
                renovation and maintenance, we focus on safe execution,
                dependable service and quality workmanship from start to
                finish.
              </p>

              <div className="about-points">
                <span>Licensed Contractor</span>
                <span>Experienced Professionals</span>
                <span>Committed to Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section id="services" className="section services-section">
          <div className="container">
            <div className="section-heading centered">
              <div className="section-kicker">
                OUR SERVICES
              </div>

              <h2>
                Complete solutions for every stage of your project.
              </h2>

              <p>
                Electrical, civil and maintenance services handled by one
                dependable team.
              </p>
            </div>

            <div className="service-card-grid">
              {serviceCards.map((service) => (
                <article
                  className="service-card"
                  key={service.title}
                >
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </article>
              ))}
            </div>

            <div className="service-list-grid">
              <article className="service-list-card">
                <div className="service-list-heading">
                  <div className="service-list-icon">
                    ⚡
                  </div>

                  <div>
                    <small>COMPLETE</small>
                    <h3>Electrical Services</h3>
                  </div>
                </div>

                <ul>
                  {electricalServices.map((service) => (
                    <li key={service}>
                      <span aria-hidden="true">⚡</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="service-list-card">
                <div className="service-list-heading">
                  <div className="service-list-icon">
                    🏠
                  </div>

                  <div>
                    <small>COMPLETE</small>
                    <h3>Civil Services</h3>
                  </div>
                </div>

                <ul>
                  {civilServices.map((service) => (
                    <li key={service}>
                      <span aria-hidden="true">◆</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* WHY US */}

        <section id="why-us" className="section why-section">
          <div className="container">
            <div className="section-heading centered light">
              <div className="section-kicker">
                WHY CHOOSE US
              </div>

              <h2>
                Built around safety, quality and reliability.
              </h2>
            </div>

            <div className="why-grid">
              <article>
                <div className="why-icon">
                  🛡
                </div>

                <h3>Safe & Reliable</h3>

                <p>
                  Safety-focused execution and dependable project delivery.
                </p>
              </article>

              <article>
                <div className="why-icon">
                  👥
                </div>

                <h3>Expert Team</h3>

                <p>
                  Experienced professionals across electrical and civil work.
                </p>
              </article>

              <article>
                <div className="why-icon">
                  ✓
                </div>

                <h3>Quality Work</h3>

                <p>
                  Quality materials, professional workmanship and attention to
                  detail.
                </p>
              </article>

              <article>
                <div className="why-icon why-icon-text">
                  24
                </div>

                <h3>On-Time Service</h3>

                <p>
                  Clear coordination with a strong focus on project schedules.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-shell">
              <div className="contact-copy">
                <div className="section-kicker">
                  CONTACT US
                </div>

                <h2>
                  Need a reliable electrical or civil partner?
                </h2>

                <p>
                  Tell us what you need. Call, WhatsApp or email us for project
                  enquiries, service requests and quotations.
                </p>

                <div className="contact-actions">
                  <a
                    className="button button-orange"
                    href={`tel:${phone}`}
                  >
                    ☎ Call Now
                  </a>

                  <a
                    className="button button-whatsapp"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ● WhatsApp
                  </a>

                  <a
                    className="button button-navy"
                    href={quoteHref}
                  >
                    ✉ Get a Quote
                  </a>
                </div>
              </div>

              <div className="contact-card">
                <a
                  className="contact-item"
                  href={`tel:${phone}`}
                >
                  <span className="contact-icon">
                    ☎
                  </span>

                  <div>
                    <small>Phone</small>
                    <strong>
                      +91 82490 24718
                    </strong>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon whatsapp-icon">
                    ●
                  </span>

                  <div>
                    <small>WhatsApp</small>
                    <strong>
                      Message us directly
                    </strong>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href="mailto:support@sanjayaelectricals.com"
                >
                  <span className="contact-icon">
                    ✉
                  </span>

                  <div>
                    <small>Email</small>
                    <strong>
                      support@sanjayaelectricals.com
                    </strong>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-icon">
                    ⌖
                  </span>

                  <div>
                    <small>Address</small>

                    <strong>
                      House No 7, Lane no 2,
                      <br />
                      Gundicha Vihar, Puri,
                      <br />
                      Odisha - 752002
                    </strong>

                    <span className="open-maps">
                      Open in Google Maps →
                    </span>
                  </div>
                </a>

                <a
                  className="contact-item"
                  href="https://sanjayaelectricals.com"
                >
                  <span className="contact-icon">
                    ◎
                  </span>

                  <div>
                    <small>Website</small>
                    <strong>
                      sanjayaelectricals.com
                    </strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer>
        <div className="container footer-main">
          <div className="footer-brand">
            <Logo />

            <span className="footer-memory">
              In Memory of Sanjay Suar
            </span>
          </div>

          <div className="footer-message">
            <p>
              Powering Today,
              <span> Building Tomorrow.</span>
            </p>

            <a href={`tel:${phone}`}>
              +91 82490 24718
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Sanjaya Electricals & Civil Contractors.
          </span>

          <span>
            Licensed • Insured • Trusted
          </span>
        </div>
      </footer>

      {/* MOBILE CONTACT DOCK */}

      <nav
        className="mobile-contact-dock"
        aria-label="Quick contact"
      >
        <a href={`tel:${phone}`}>
          <span aria-hidden="true">☎</span>
          <strong>Call</strong>
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <span aria-hidden="true">●</span>
          <strong>WhatsApp</strong>
        </a>

        <a href={quoteHref}>
          <span aria-hidden="true">✉</span>
          <strong>Quote</strong>
        </a>
      </nav>
    </>
  );
}