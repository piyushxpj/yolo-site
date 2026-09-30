import DownloadIcon from './DownloadIcon';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header';
import Colors from './Colors';
import Typography from './Typography';
import Mascot from './Mascot';
import './styles.css';
import './guide.css';

const principles = [
  ['Show the work', 'Everyone has a take. Few show proof before you decide.'],
  ['Win together', 'Trade together. The caller gets credit, and everyone shares the win.'],
  ['Make it yours', 'No autopilot. Understand the idea, shape it, decide. Your money, your choice.'],
];

function App() {
  return <div className="current-guide">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <div id="top"><Header /></div>
    <main id="main-content" tabIndex="-1">
      <section className="guide-hero" aria-label="Brand Guidelines">
        <div className="guide-hero-copy">
          <h1>Brand<br />Guidelines</h1>
          <a className="menu-download" href="/downloads/yolo-branding-assets.zip" download="Yolo Branding Assets.zip">
            <DownloadIcon />
            Download assets
          </a>
        </div>
        <img src="/assets/brand-hero-1280.webp" srcSet="/assets/brand-hero-640.webp 640w, /assets/brand-hero-1280.webp 1280w, /assets/brand-hero-1600.webp 1600w" sizes="(max-width: 767px) 112vw, 73vw" decoding="async" alt="Yolo's colorful plush mascot gang" fetchPriority="high" />
      </section>
      <section className="guide-purpose" aria-label="Our purpose">
        <p className="guide-intro">Everyone has a take. Few show the work. On YOLO, you find a thesis with real proof behind it, make it yours, and trade it across markets. The credit goes to whoever called it. Trade anything. Together.</p>
        <div className="guide-principles">{principles.map(([name,body]) => <article key={name}><h2>{name}</h2><p>{body}</p></article>)}</div>
      </section>
      <div className="guide-content">
        <section className="guide-logo" aria-labelledby="logo">
          <div className="guide-heading"><h2 id="logo" tabIndex="-1">Logo Mark</h2><p>Three sharp points rise up and to the right for momentum. A round base keeps it grounded. Half-lidded eyes, chill and a little arrogant. Sharp on top, soft underneath.</p></div>
          <div className="guide-lockup guide-card">
            <div role="img" aria-label="Yolo purple spark and black wordmark"><img src="/assets/brand-spark.svg" alt="" /><span>Yolo</span></div>
          </div>
          <div className="guide-expressions guide-card" id="mascot" tabIndex="-1" role="group" aria-label="Yolo mascot expressions">
            {['orange','green','yellow','blue','red','purple'].map((color, index) => <Mascot key={color} color={color} index={index} />)}
          </div>
          <div className="guide-plush guide-card"><img src="/assets/brand-plush-expressions-1280.webp" srcSet="/assets/brand-plush-expressions-640.webp 640w, /assets/brand-plush-expressions-1280.webp 1280w, /assets/brand-plush-expressions-1600.webp 1600w" sizes="(max-width: 900px) calc(100vw - 48px), (max-width: 1440px) calc(100vw - 160px), 1280px" decoding="async" alt="Six plush Yolo mascots in orange, green, yellow, blue, red, and purple with different eye expressions" width="3840" height="2160" loading="eager" fetchPriority="low" /></div>
          <div className="guide-characters guide-card"><img src="/assets/brand-characters-1280.webp" srcSet="/assets/brand-characters-640.webp 640w, /assets/brand-characters-1280.webp 1280w, /assets/brand-characters-1600.webp 1600w" sizes="(max-width: 900px) calc(100vw - 48px), (max-width: 1440px) calc(100vw - 160px), 1280px" decoding="async" width="2560" height="1384" alt="Purple Yolo mascot holding a phone and orange Yolo mascot with folded arms" loading="eager" fetchPriority="low" /></div>
        </section>
        <Colors />
        <Typography />
        <section className="guide-visual-language" aria-labelledby="visual-language">
          <div className="guide-heading"><h2 id="visual-language" tabIndex="-1">Visual Language</h2></div>
          {[
            ['Two Yolo posters on a brick wall, pairing the orange mascot with an orange graphic and brand messaging', 1672, 941],
            ['Conviction Needs A Reason, surrounded by colorful plush shapes', 3840, 2160],
            ['Show the Work. Trade Anything Together, in colorful blocks surrounded by plush shapes', 3840, 2160],
            ['Yolo billboard with a purple mascot and the headline The take is only the beginning', 1672, 941],
          ].map(([alt, width, height], index) => <div className="guide-card" key={index}><img src={`/assets/visual-language-${index + 1}-1280.webp`} srcSet={[640, 1280, 1600].map(size => `/assets/visual-language-${index + 1}-${size}.webp ${size}w`).join(', ')} sizes="(max-width: 900px) calc(100vw - 48px), (max-width: 1440px) calc(100vw - 160px), 1280px" decoding="async" alt={alt} width={width} height={height} loading="eager" fetchPriority="low" /></div>)}
        </section>
      </div>
    </main>
  </div>;
}

if (window.location.pathname.startsWith('/v2')) {
  window.history.replaceState(null, '', '/' + window.location.hash);
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
