

import './App.css'
import profilePic from './assets/20250918_132814-EDIT.jpg';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Inject Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Inject Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize badge widget after script loads
    script.onload = function() {
      // @ts-ignore
      if (window.Calendly) {
        // @ts-ignore
        window.Calendly.initBadgeWidget({
          url: 'https://calendly.com/1-jorge-arevalo/30min',
          text: 'Schedule time with me',
          color: '#0069ff',
          textColor: '#ffffff',
          branding: true
        });
      }
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);
  return (
    <main className="about-me about-me-row">
      <div className="about-me-container">
        <div className="about-me-left">
          <img
            src={profilePic}
            alt="Jorge Arévalo portrait"
            className="profile-pic"
          />
        </div>
        <div className="about-me-right">
          <h1>Jorge Arévalo</h1>
          <p><strong>Product Engineer</strong><br />
          Escuela Politécnica Nacional, Ecuador<br />
          <a href="https://www.linkedin.com/in/jorgeearevalo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <br/>
          <a href="https://github.com/drftrcld" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
          <section>
            <h2>About</h2>
            <p>I design and develop products end to end, from first concept to real-world use. My work spans software, embedded systems, electronics, and product design. I believe meaningful solutions require understanding context, constraints, and the people who use them. My approach is human-centered, technically grounded, and focused on delivering results that matter.</p>
          </section>
          <section>
            <h2>Skills</h2>
            <ul>
              <li>Full-Stack Development</li>
              <li>Embedded Devices & Software</li>
              <li>Technical Drawing</li>
              <li>Application & Web Development</li>
              <li>Cloud & Database Development</li>
              <li>Mobile Development</li>
              <li>Illustration</li>
              <li>IT Consulting</li>
            </ul>
          </section>
          <section>
            <h2>Experience</h2>
            <ul>
              <li><strong>Product Engineer (Self-employed)</strong><br />Aug 2025 – Present | Remote<br />Embedded Devices, Embedded Software</li>
              <li><strong>Software Engineer (Trilogy)</strong><br />Feb 2024 – Aug 2025 | Remote<br />Artificial Intelligence (AI), JavaScript</li>
              <li><strong>Product Engineer (Freelance)</strong><br />Sep 2021 – Jan 2024 | Remote<br />Back-End Web Development, AI</li>
              <li><strong>Full Stack Software Developer (PRODUBANCO - Grupo Promerica)</strong><br />Aug 2015 – Mar 2021 | Quito, Ecuador<br />Back-End Web Development, CSS</li>
            </ul>
          </section>
          <section>
            <h2>Education</h2>
            <p><strong>Escuela Politécnica Nacional</strong><br />Bachelor of Engineering, Electronics and Control Systems (2007–2013)</p>
          </section>
          <section>
            <h2>Certifications</h2>
            <ul>
              <li>Scrum Master Professional Certified (SMPC), Certiprof</li>
              <li>EF SET English Certificate C2 Proficient</li>
            </ul>
          </section>
          <section>
            <h2>Languages</h2>
            <ul>
              <li>English (Full professional proficiency)</li>
              <li>Spanish (Native or bilingual proficiency)</li>
            </ul>
          </section>
          <section>
            <h2>Contact</h2>
            <ul>
              <li>Email: <a href="mailto:contact@jorgearevalo.net">contact@jorgearevalo.net</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/jorgeearevalo/" target="_blank" rel="noopener noreferrer">jorgeearevalo</a></li>
            </ul>
            {/* Calendly badge widget will appear automatically */}
          </section>
        </div>
      </div>
    </main>
  )
}

export default App
