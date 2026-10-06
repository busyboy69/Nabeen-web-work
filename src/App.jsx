import { useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Globe,
  Menu,
  MessageCircle,
  Smartphone,
  X,
} from "lucide-react";
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "916370373202"; // Replace with your actual WhatsApp number

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo" onClick={() => scrollTo("home")}>
            <div className="logo-mark">NW</div>
            <span>Nabeen Web Work</span>
          </div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollTo("services")}>Services</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("pricing")}>Pricing</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">
              <span className="badge-dot"></span>
              Websites for modern businesses
            </div>

            <h1>
              Websites that make
              <span> businesses stand out.</span>
            </h1>

            <p>
              I build modern, fast and mobile-friendly websites that help
              small businesses attract customers and grow online.
            </p>

            <div className="hero-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollTo("contact")}
              >
                Get Your Website
                <ArrowRight size={18} />
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => scrollTo("projects")}
              >
                View My Work
              </button>
            </div>

            <div className="hero-trust">
              <span>
                <Check size={16} /> Mobile Friendly
              </span>
              <span>
                <Check size={16} /> Fast Loading
              </span>
              <span>
                <Check size={16} /> WhatsApp Ready
              </span>
            </div>
          </div>

          <div className="hero-card">
            <div className="browser-bar">
              <div className="browser-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="browser-url">yourbusiness.com</div>
            </div>

            <div className="mock-website">
              <div className="mock-nav">
                <strong>YOUR BRAND</strong>
                <div className="mock-nav-links">
                  <span>Home</span>
                  <span>About</span>
                  <span>Contact</span>
                </div>
              </div>

              <div className="mock-hero">
                <small>WELCOME TO OUR BUSINESS</small>
                <h3>Grow your business online.</h3>
                <div className="mock-button">Get Started</div>
              </div>

              <div className="mock-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <span>WHAT I OFFER</span>
            <h2>Everything your business needs online.</h2>
            <p>
              Professional websites designed to turn visitors into customers.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon-box">
                <Globe size={25} />
              </div>
              <h3>Business Websites</h3>
              <p>
                Professional websites that showcase your business, services,
                location and contact information.
              </p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <Smartphone size={25} />
              </div>
              <h3>Mobile-Friendly Design</h3>
              <p>
                Your website will look great on phones, tablets and desktops.
              </p>
            </div>

            <div className="service-card">
              <div className="icon-box">
                <Code2 size={25} />
              </div>
              <h3>Landing Pages</h3>
              <p>
                High-converting landing pages for products, campaigns and
                special offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
{/* PROJECTS */}
<section className="section projects-section" id="projects">
  <div className="container">
    <div className="section-heading">
      <span>MY WORK</span>
      <h2>Website concepts I've built.</h2>
      <p>
        Sample designs created for different types of businesses.
      </p>
    </div>

    <div className="projects-grid">

      {/* TASTE & SPICE */}
      <div className="project-card restaurant">
        <div className="project-image">
          <span>RESTAURANT</span>
        </div>

        <div className="project-info">
          <h3>Taste & Spice</h3>
          <p>Restaurant Website</p>

          <div className="project-buttons">
            <a
              href="https://taste-spice.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="demo-button"
            >
              View Demo
              <ArrowRight size={16} />
            </a>

            <button onClick={() => scrollTo("contact")}>
              Build Something Similar
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* IRONCORE FITNESS */}
      <div className="project-card gym">
        <div className="project-image">
          <span>FITNESS</span>
        </div>

        <div className="project-info">
          <h3>IRONCORE FITNESS</h3>
          <p>Gym & Fitness Website</p>

          <div className="project-buttons">
            <a
              href="https://ironcore-fitness-opal.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="demo-button"
            >
              View Demo
              <ArrowRight size={16} />
            </a>

            <button onClick={() => scrollTo("contact")}>
              Build Something Similar
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* LUMIÈRE SALON */}
      <div className="project-card salon">
        <div className="project-image">
          <span>SALON</span>
        </div>

        <div className="project-info">
          <h3>LUMIÈRE SALON</h3>
          <p>Salon & Beauty Website</p>

          <div className="project-buttons">
            <a
              href="https://lumiere-salon-ten.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="demo-button"
            >
              View Demo
              <ArrowRight size={16} />
            </a>

            <button onClick={() => scrollTo("contact")}>
              Build Something Similar
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* WHY ME */}
      <section className="section why-section">
        <div className="container why-grid">
          <div>
            <div className="section-heading left">
              <span>WHY CHOOSE ME</span>
              <h2>A website shouldn't just look good.</h2>
              <p>
                It should help your business get more enquiries, calls and
                customers.
              </p>
            </div>
          </div>

          <div className="features">
            <div className="feature">
              <Check />
              <div>
                <h3>Mobile Responsive</h3>
                <p>Looks great on every screen size.</p>
              </div>
            </div>

            <div className="feature">
              <Check />
              <div>
                <h3>Fast Loading</h3>
                <p>Optimized for a smooth browsing experience.</p>
              </div>
            </div>

            <div className="feature">
              <Check />
              <div>
                <h3>WhatsApp Integration</h3>
                <p>Customers can contact you directly.</p>
              </div>
            </div>

            <div className="feature">
              <Check />
              <div>
                <h3>SEO-Friendly Structure</h3>
                <p>Built with search engines in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-heading">
            <span>SIMPLE PRICING</span>
            <h2>Choose the right package.</h2>
            <p>Affordable websites for growing businesses.</p>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <h3>Starter</h3>
              <div className="price">
                ₹5,000 <small>/ website</small>
              </div>

              <ul>
                <li><Check /> 1–3 Pages</li>
                <li><Check /> Mobile Responsive</li>
                <li><Check /> WhatsApp Button</li>
                <li><Check /> Contact Information</li>
              </ul>

              <button
                className="price-button"
                onClick={() => scrollTo("contact")}
              >
                Get Started
              </button>
            </div>

            <div className="price-card featured">
              <div className="popular">MOST POPULAR</div>
              <h3>Business</h3>
              <div className="price">
                ₹8,000 <small>/ website</small>
              </div>

              <ul>
                <li><Check /> Up to 5 Pages</li>
                <li><Check /> Mobile Responsive</li>
                <li><Check /> WhatsApp Integration</li>
                <li><Check /> Basic SEO</li>
                <li><Check /> Google Maps</li>
              </ul>

              <button
                className="price-button"
                onClick={() => scrollTo("contact")}
              >
                Get Started
              </button>
            </div>

            <div className="price-card">
              <h3>Premium</h3>
              <div className="price">
                ₹12,000+ <small>/ website</small>
              </div>

              <ul>
                <li><Check /> Custom Design</li>
                <li><Check /> Multiple Pages</li>
                <li><Check /> Advanced Sections</li>
                <li><Check /> SEO Optimization</li>
                <li><Check /> Priority Support</li>
              </ul>

              <button
                className="price-button"
                onClick={() => scrollTo("contact")}
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container contact-content">
          <div>
            <span>LET'S WORK TOGETHER</span>
            <h2>Ready to take your business online?</h2>
            <p>
              Tell me about your business and I'll help you build a website
              that fits your needs.
            </p>
          </div>

          <a
            className="whatsapp-button"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={22} />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container footer-content">
          <div className="logo">
            <div className="logo-mark">NW</div>
            <span>Nabeen Web Work</span>
          </div>

          <p>© 2026 Nabeen Web Work. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;