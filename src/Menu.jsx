import DownloadIcon from './DownloadIcon';
import React, { useEffect, useRef, useState } from 'react';
import MenuArtwork from './MenuArtwork';

const options = [
  ['logo', 'Logo'], ['colors', 'Colors'], ['typography', 'Typography'],
  ['mascot', 'Mascot'], ['visual-language', 'Visual Language'],
];
const hoverColors = ['#9B56FF', '#FF7F38', '#20D684', '#FDCE35', '#2C93FF', '#FF3D3D'];

export default function Menu({ open, onClose }) {
  const dialog = useRef(null);
  const panel = useRef(null);
  const [active, setActive] = useState(null);
  const [hoverColor, setHoverColor] = useState('#000000');
  const motion = useRef(null);
  const restoreOverflow = useRef(null);
  const destination = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (!open && !element.open) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wasOpen = element.open;
    const current = wasOpen ? getComputedStyle(panel.current) : null;
    const from = reduced
      ? { opacity: current?.opacity ?? '0' }
      : { transform: current?.transform ?? 'translateY(100%)' };
    motion.current?.cancel();
    if (open) {
      destination.current = null;
      setActive(null);
      if (!wasOpen) {
        restoreOverflow.current = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        element.showModal();
        element.querySelector('.menu-close').focus();
      }
    }
    const animation = panel.current.animate(
      [from, reduced ? { opacity: open ? 1 : 0 } : { transform: open ? 'translateY(0)' : 'translateY(100%)' }],
      { duration: reduced ? 120 : open ? 280 : 200, easing: 'cubic-bezier(0.32, 0.72, 0, 1)', fill: 'forwards' },
    );
    motion.current = animation;
    animation.onfinish = () => {
      if (motion.current !== animation) return;
      if (!open) {
        element.close();
        document.body.style.overflow = restoreOverflow.current ?? '';
        restoreOverflow.current = null;
        const target = destination.current;
        destination.current = null;
        if (target) {
          target.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth', block: 'start' });
          target.focus({ preventScroll: true });
          history.replaceState(null, '', `#${target.id}`);
        }
      }
      animation.cancel();
      motion.current = null;
    };
  }, [open]);
  useEffect(() => () => {
    motion.current?.cancel();
    if (restoreOverflow.current !== null) {
      document.body.style.overflow = restoreOverflow.current;
      restoreOverflow.current = null;
    }
  }, []);
  function navigate(id) {
    setActive(id);
    const target = document.getElementById(id);
    if (!target) return;
    destination.current = target;
    onClose();
  }
  function hover(id, event) {
    if (event.pointerType === 'mouse' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoverColor(previous => {
        const choices = hoverColors.filter(color => color !== previous);
        return choices[Math.floor(Math.random() * choices.length)];
      });
      setActive(id);
    }
  }
  return (
    <dialog ref={dialog} className="menu-page" id="site-navigation" aria-label="Brand guide menu" onCancel={event => { event.preventDefault(); onClose(); }}>
      <div className="menu-header site-header flex items-center justify-between">
        <a className="wordmark" href="#top" onClick={event => { event.preventDefault(); navigate('top'); }} aria-label="Yolo brand guide home">Yolo</a>
        <img className="header-spark" src="/assets/yolo-spark.svg" alt="" width="49.47" height="50" />
        <button className="menu-toggle menu-close" onClick={onClose} aria-label="Close navigation" autoFocus>
          <svg viewBox="0 0 34 34" aria-hidden="true"><path d="M7 7 27 27M27 7 7 27" /></svg>
        </button>
      </div>
      <div className="menu-viewport">
      <div ref={panel} className="menu-panel">
      <nav className="menu-options" aria-label="Brand guide sections">
        {options.map(([id, label]) => (
          <div key={id} data-option={id} style={{ '--menu-hover-color': hoverColor }} className={`menu-row ${active === id ? 'is-active' : ''}`}>
            <span className="menu-decoration" aria-hidden="true"><MenuArtwork option={id} /></span>
            <button className="menu-option" onPointerEnter={event => hover(id, event)} onPointerLeave={() => setActive(current => current === id ? null : current)} onFocus={() => setActive(id)} onBlur={() => setActive(current => current === id ? null : current)} onClick={() => navigate(id)}>{label}</button>
          </div>
        ))}
      </nav>
      <div className="menu-footer">
        <a className="menu-download" href="/downloads/yolo-brand-assets.zip" download="yolo-brand-assets.zip">
          <DownloadIcon />
          Download assets
        </a>
      </div>
      </div>
      </div>
    </dialog>
  );
}
