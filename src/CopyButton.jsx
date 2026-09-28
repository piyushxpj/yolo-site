import React, { useEffect, useState } from 'react';

export default function CopyButton({ asset, label }) {
  const [status, setStatus] = useState('idle');
  useEffect(() => {
    if (status !== 'copied') return;
    const timeout = setTimeout(() => setStatus('idle'), 2500);
    return () => clearTimeout(timeout);
  }, [status]);
  async function copy() {
    setStatus('loading');
    try {
      const response = await fetch(asset);
      if (!response.ok) throw new Error('Asset unavailable');
      if (asset.endsWith('.png')) {
        await navigator.clipboard.write([new ClipboardItem({ 'image/png': await response.blob() })]);
      } else {
        await navigator.clipboard.writeText(await response.text());
      }
      setStatus('copied');
    } catch {
      setStatus('error');
    }
  }
  return (
    <>
      <button className="copy-button" onClick={copy} disabled={status === 'loading'} aria-label={`Copy ${label}`} title={`Copy ${label}`}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {status === 'copied' ? <path d="m4 10 4 4 8-8" /> : <><rect x="3" y="6" width="11" height="11" rx="4" /><path d="M6 6a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v3a4 4 0 0 1-3 4" /></>}
        </svg>
      </button>
      <span className={`copy-status ${status === 'error' ? 'copy-error' : ''}`} role="status" aria-live="polite">
        {status === 'loading' && 'Copying…'}
        {status === 'copied' && 'Copied to clipboard'}
        {status === 'error' && <>Clipboard unavailable. <a href={asset} download>Download logo</a></>}
      </span>
    </>
  );
}

