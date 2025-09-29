

import './App.css'
import profilePic from './assets/20250918_132814-EDIT.jpg';
import darkModeIcon from './assets/icons8-dark-mode-64.png';
import moonIcon from './assets/icons8-moon-48.png';
import sunIcon from './assets/icons8-sun-48.png';
import { useEffect, useState } from 'react';

function App() {
  // Manual dark mode switch
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'system');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('dark');
    body.classList.remove('light');
    if (theme === 'dark') {
      body.classList.add('dark');
    } else if (theme === 'light') {
      body.classList.add('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes if 'system' is selected
  // No need for system theme listener, prefers-color-scheme will handle it
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
    <>
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
            <p>
              <strong>Electronics Engineer</strong><br />
              <span style={{ fontWeight: 500, color: '#0073b1' }}>12+ years experience (since 2013)</span><br />
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
                <li><strong>Product Engineer (Self-employed)</strong><br />Aug 2025 – Present · Remote<br />Product Engineering · Embedded Devices · Electronic Engineering</li>
                <li><strong>Full Stack Software Developer (Trilogy)</strong><br />Feb 2024 – Aug 2025 · Remote<br />AI · Full-Stack Development · Python · JavaScript · AWS · C# · C++</li>
                <li><strong>Product Engineer (Freelance)</strong><br />Sep 2021 – Jan 2024 · Remote<br />Embedded Systems · Web Development · PCB Design · Python · C++</li>
                <li><strong>Full Stack Software Developer (PRODUBANCO - Grupo Promerica)</strong><br />Aug 2013 – Mar 2021 · Quito, Ecuador<br />Full-Stack Development · Project Management</li>
              </ul>
            </section>
            <section>
              <h2>Education</h2>
              <p><strong>Escuela Politécnica Nacional</strong><br />Bachelor's in Electronic Engineering and Control Systems (2007–2013)</p>
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
                <li>Spanish (Native)</li>
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
  <form style={{ position: 'fixed', left: '5%', bottom: '1rem', zIndex: 1000, background: 'rgba(255,255,255,0.25)', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center' }}>
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            name="theme"
            value="system"
            checked={theme === 'system'}
            onChange={() => setTheme('system')}
            style={{ display: 'none' }}
          />
          <img
            src={darkModeIcon}
            alt="System (auto)"
            width={32}
            height={32}
            style={{ border: theme === 'system' ? '2px solid #0073b1' : '2px solid transparent', borderRadius: '8px', padding: '2px', background: theme === 'system' ? '#e3f0ff' : 'none' }}
          />
        </label>
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            name="theme"
            value="light"
            checked={theme === 'light'}
            onChange={() => setTheme('light')}
            style={{ display: 'none' }}
          />
          <img
            src={sunIcon}
            alt="Light"
            width={32}
            height={32}
            style={{ border: theme === 'light' ? '2px solid #FFD600' : '2px solid transparent', borderRadius: '8px', padding: '2px', background: theme === 'light' ? '#fffde7' : 'none' }}
          />
        </label>
        <label style={{ cursor: 'pointer' }}>
          <input
            type="radio"
            name="theme"
            value="dark"
            checked={theme === 'dark'}
            onChange={() => setTheme('dark')}
            style={{ display: 'none' }}
          />
          <img
            src={moonIcon}
            alt="Dark"
            width={32}
            height={32}
            style={{ border: theme === 'dark' ? '2px solid #00c6fb' : '2px solid transparent', borderRadius: '8px', padding: '2px', background: theme === 'dark' ? '#181a20' : 'none' }}
          />
        </label>
      </form>
    </>
  )
}

export default App
