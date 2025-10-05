// import React from 'react';
import shotnoteImg from './shotnote_1.png';

function ProjectMemoApp() {
  return (
    <main className="project-page">
      <h1>Shotnote for Mac</h1>
      <p>
        Shotnote is a simple, fast screenshot memo utility for Mac. Capture, annotate, and organize your screenshots with ease.<br /><br />
        <strong>How to use:</strong><br />
        <ul style={{ margin: '1em 0', paddingLeft: '1.2em' }}>
          <li>Press <kbd>Command</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> to take a screenshot and open a memo dialog.</li>
          <li>All previous screenshots and memos are available in the journal.</li>
        </ul>
      </p>
      <img
        src={shotnoteImg}
        alt="Shotnote app preview"
        style={{ maxWidth: '100%', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
      />
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a
          href="https://jorgearevalo.lemonsqueezy.com/buy/128fcf03-ac70-4626-8a2e-ec66ead8199c?embed=1"
          className="lemonsqueezy-button"
          style={{
            display: 'inline-block',
            padding: '0.75rem 2rem',
            background: 'rgb(2 123 255)',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
            fontSize: '1.2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1rem',
            WebkitTextFillColor: '#fff',
          }}
        >
          Buy Shotnote
        </a>
        <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script>
      </div>
    </main>
  );
}

export default ProjectMemoApp;
