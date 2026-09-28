import React, { useState } from 'react';
import Menu from './Menu';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header relative flex items-center justify-between">
      <a className="wordmark" href="#top" aria-label="Yolo brand guide home">Yolo</a>
      <img className="header-spark" src="/assets/yolo-spark.svg" alt="" width="49.47" height="50" />
      <button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>
        <svg width="28" height="28" viewBox="0 0 34 34" aria-hidden="true">
          {open ? <path d="M5 5 29 29M29 5 5 29" /> : <path d="M3 5h28M3 17h28M3 29h28" />}
        </svg>
      </button>
      <Menu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

