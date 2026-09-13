import './App.css'

function App() {
  return (
    <div className="site">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Dr. Kishore</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#thinking">Thinking</a>
          <a href="#projects">Projects</a>
          <a href="#writing">Writing</a>
          <a href="#ai-lab">AI Lab</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">AI STRATEGY • ENTERPRISE TRANSFORMATION • HUMAN FUTURES</p>

          <h1>
            Building the bridge between
            <span> AI, business and humanity.</span>
          </h1>

          <p className="hero-text">
            I work with enterprises, technology leaders and governments
            to understand what AI can actually do — and how to turn
            it into meaningful transformation.
          </p>

          <div className="hero-buttons">
            <a href="#thinking" className="button primary">
              Explore my thinking
            </a>

            <a href="#about" className="button secondary">
              About me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-label">CURRENT EXPLORATION</div>
          <h2>AI × Enterprise</h2>
          <p>
            From LLMs and agents to AI platforms, FinTech,
            telecom and the future of human capability.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-label">01 — ABOUT</p>

        <h2>
          A technologist who likes asking
          <br />
          uncomfortable questions.
        </h2>

        <p className="section-text">
          My journey has moved through computer science, AI research,
          telecom, enterprise transformation, consulting and executive
          advisory. Today I am exploring what comes next.
        </p>
      </section>

      {/* Thinking */}
      <section id="thinking" className="section thinking-section">
        <p className="section-label">02 — THINKING</p>

        <h2>Ideas I am currently obsessed with.</h2>

        <div className="idea-grid">
          <div className="idea-card">
            <span>01</span>
            <h3>Enterprise AI</h3>
            <p>
              What decision makers really need to understand before
              investing millions in AI.
            </p>
          </div>

          <div className="idea-card">
            <span>02</span>
            <h3>AI + FinTech</h3>
            <p>
              Intelligent banking, financial intelligence,
              risk, agents and the future of financial services.
            </p>
          </div>

          <div className="idea-card">
            <span>03</span>
            <h3>AI + Human Futures</h3>
            <p>
              Biology, longevity, intelligence augmentation and
              the strange possibilities ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-label">03 — PROJECTS</p>

        <h2>Things I am building.</h2>

        <div className="project-list">
          <div className="project">
            <div>
              <span className="project-number">01</span>
              <h3>Enterprise AI Lab</h3>
            </div>
            <p>
              Experiments, architectures and practical AI systems
              for enterprise environments.
            </p>
          </div>

          <div className="project">
            <div>
              <span className="project-number">02</span>
              <h3>AI × Telecom</h3>
            </div>
            <p>
              AI-native telecom, intelligent networks, agents and
              new AI-driven service models.
            </p>
          </div>

          <div className="project">
            <div>
              <span className="project-number">03</span>
              <h3>AI × FinTech</h3>
            </div>
            <p>
              Exploring how AI changes banking, financial products,
              risk and customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="section writing-section">
        <p className="section-label">04 — WRITING</p>

        <h2>Notes from the journey.</h2>

        <p className="section-text">
          Long-form explanations, technical experiments and occasionally
          strange ideas about AI, humans and the future.
        </p>

        <div className="article-preview">
          <p className="article-category">FEATURED IDEA</p>
          <h3>The Dopamine Chain</h3>
          <p>
            A slightly crazy attempt to connect neuroscience,
            human behavior, technology and the systems we are building.
          </p>
          <span>Coming soon →</span>
        </div>
      </section>

      {/* AI Lab */}
      <section id="ai-lab" className="section dark-section ai-section">
        <p className="section-label">05 — AI LAB</p>

        <h2>Not just articles.</h2>

        <p className="section-text">
          This space will eventually host AI experiments, tools,
          prototypes and services that you can actually interact with.
        </p>

        <div className="lab-status">
          <span className="status-dot"></span>
          AI LAB — UNDER CONSTRUCTION
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div>
          <strong>Dr. Kishore</strong>
          <p>AI Strategy · Technology · Human Futures</p>
        </div>

        <p>© 2026 Dr. Kishore</p>
      </footer>

    </div>
  )
}

export default App
