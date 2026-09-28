import React, { useEffect, useState } from 'react';

const palette = [
  ['Black', '#000000'], ['Purple', '#9B56FF'], ['Orange', '#FF7F38'],
  ['Green', '#20D684'], ['Yellow', '#FDCE35'], ['Blue', '#2C93FF'], ['Red', '#FF3D3D'],
];

export default function Colors() {
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (!message) return;
    const timeout = setTimeout(() => setMessage(null), 2500);
    return () => clearTimeout(timeout);
  }, [message]);
  async function copyColor(index) {
    setActive(index);
    const [name, hex] = palette[index];
    try {
      await navigator.clipboard.writeText(hex);
      setMessage({ index, text: 'Copied!' });
    } catch {
      setMessage({ index, text: 'Copy unavailable' });
    }
  }
  return (
    <section className="colors-section guide-colors" aria-labelledby="colors">
      <div className="guide-heading"><h2 id="colors" tabIndex="-1">Brand Colors</h2></div>
      <div className="color-palette" onPointerLeave={() => setActive(0)}>
        {palette.map(([name, hex], index) => (
          <button key={hex} className={`color-card ${active === index ? 'is-expanded' : ''}`}
            style={{ backgroundColor: hex, color: index === 0 ? '#fff' : '#000' }}
            aria-label={`Copy ${name} hex code ${hex}`} onFocus={() => setActive(index)}
            onPointerEnter={event => {
              if (event.pointerType === 'mouse' && matchMedia('(hover: hover) and (pointer: fine)').matches) setActive(index);
            }} onClick={() => copyColor(index)}>
            <span className="color-details"><span>{name}</span><span>{hex}</span></span>
            <span className="color-copy-status" role="status" aria-live="polite">{message?.index === index ? message.text : ''}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
