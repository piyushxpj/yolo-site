import DownloadIcon from './DownloadIcon';
import React from 'react';

export default function Typography() {
  return (
    <section className="typography-section" aria-labelledby="typography">
      <div className="guide-heading"><h2 id="typography" tabIndex="-1">Brand Typography</h2></div>
      {[
        ['Alte Haas Grotesk', 'type-alte', 'AlteHaasGroteskBold.ttf'],
        ['Uncut Sans Variable', 'type-uncut', 'UncutSans-Variable.ttf'],
      ].map(([name, className, file]) => (
        <article key={name} className={`type-card ${className}`} aria-label={`${name} specimen`}>
          <span className="type-watermark" aria-hidden="true">AaBbCc</span>
          <h3 className="type-name">{name}</h3>
          <a className="font-download" href={`/fonts/${file}`} download={file} aria-label={`Download ${name} font`} title={`Download ${name} font`}>
            <DownloadIcon />
          </a>
          <div className="type-specimen">
            <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span><br />
            1234567890 
            {'!@#$%^&*(){}[]:”?'}
          </div>
        </article>
      ))}
    </section>
  );
}
