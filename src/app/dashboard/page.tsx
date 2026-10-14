'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bricolage_Grotesque, DM_Sans, Caveat_Brush } from 'next/font/google';

const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-display',
  display: 'swap',
});
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});
const logo = Caveat_Brush({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
  display: 'swap',
});

const FEATURES = [
  {
    title: 'Upload PDF',
    popupTitle: 'Upload PDF',
    description: 'Upload your textbooks, notes, or research PDFs for AI analysis',
    details:
      'The Upload PDF feature allows students to upload notes, textbooks, syllabi, and PYQs for AI-powered analysis. VisualMind AI automatically color-codes definitions, formulas, examples, and high-priority exam topics while suggesting relevant PYQs based on the uploaded content, helping students identify what to focus on and prepare more effectively.',
    image: '/upload.png',
    color: '#cfc3e6',
    href: '/dashboard/upload',
  },
  {
    title: 'Create Study Plan',
    popupTitle: 'AI Study Planner',
    description: 'Auto-generate efficient, personalized schedules',
    details:
      "The AI Study Planner creates a personalized, day-by-day study schedule based on exam dates, topic difficulty, and PYQ frequency. It prioritizes high-weightage topics, allocates study time effectively, and adapts the plan to the student's progress, helping them decide what to study, when to study, and how to prepare strategically for better exam outcomes.",
    image: '/studyplan.png',
    color: '#bfe0b0',
    href: '/dashboard/study-plan',
  },
  {
    title: 'Visualize Metrics',
    popupTitle: 'AI Visualization',
    description: 'Track and analyze your progress and performance',
    details:
      'The AI Visualization feature transforms complex academic content into interactive mind maps, flowcharts, and concept diagrams. It helps students understand relationships between topics, simplify difficult concepts, and visualize processes clearly, making learning, memorization, and revision more effective.',
    image: '/visulaise.png',
    color: '#f6cd8a',
    href: '/dashboard/visualise',
  },
  {
    title: 'Interactive Canvas',
    popupTitle: 'Collaborative Canvas',
    description: 'Mind map, brainstorm, and visualize complex concepts',
    details:
      'The Collaborative Canvas provides a shared workspace where students can view AI-generated diagrams, annotate PDFs, add notes, and discuss concepts in real time. It brings study materials, visualizations, and AI explanations together, enabling students to collaborate, share insights, and learn more effectively as a group.',
    image: '/canvas.png.png',
    color: '#a9d3ec',
    href: '/dashboard/canvas',
  },
];

export default function DashboardPage() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === 'Escape' && setActive(null);
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <div className={`page ${display.variable} ${body.variable} ${logo.variable}`}>
      {/* Header */}
      <header className="header">
        <Link href="/" className="brand">Abhyaas</Link>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/dashboard" className="current">Dashboard</Link>
          <Link href="/#explore">Explore</Link>
        </nav>
      </header>

      {/* Main */}
      <main className="main">
        <h1 className="heading">Features We Offer</h1>

        <div className="grid">
          {FEATURES.map((f, i) => (
            <button
              key={f.href}
              type="button"
              className="card"
              style={{ background: f.color }}
              onClick={() => setActive(f)}
            >
              <h2 className="card-title">{f.title}</h2>
              <div className="art">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                  style={{ objectFit: 'contain' }}
                  priority={i < 2}
                />
              </div>
              <p className="card-desc">{f.description}</p>
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Abhyaas, Inc. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/links">Links</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </footer>

      {/* Feature details popup */}
      {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div
            className="popup"
            style={{ background: active.color }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="popup-x"
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ×
            </button>

            <p className="popup-kicker">Feature</p>
            <h3 id="popup-title" className="popup-title">
              {active.popupTitle}
            </h3>
            <p className="popup-details">{active.details}</p>

            <div className="popup-actions">
              <button type="button" className="btn" onClick={() => setActive(null)}>
                Close
              </button>
              
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }

        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f7f3e3;
          color: #2b2238;
          font-family: var(--font-body), system-ui, sans-serif;
          overflow-x: hidden;
        }
        .page a { color: inherit; text-decoration: none; }

        /* Header */
        .header {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-family: var(--font-logo), cursive;
          font-size: 2.4rem;
          letter-spacing: 0.04em;
          color: #2d2242;
        }
        .brand:hover { opacity: 0.75; }
        .nav { display: flex; gap: 32px; }
        .nav a {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .nav a:hover { color: #4f46e5; }
        .nav a.current {
          color: #4338ca;
          text-decoration: underline;
          text-underline-offset: 6px;
        }

        /* Main */
        .main {
          flex: 1;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 16px 40px 24px;
        }
        .heading {
          margin: 0 0 28px;
          font-family: var(--font-display), sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #322353;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 28px 20px 24px;
          border: 3px solid #1f2a1f;
          border-radius: 32px;
          box-shadow: 5px 5px 0 #1f2a1f;
          text-align: center;
          font: inherit;
          color: #14101c;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover { transform: translateY(-8px); box-shadow: 8px 10px 0 #1f2a1f; }
        .card:active { transform: translateY(0); box-shadow: 2px 2px 0 #1f2a1f; }
        .card:focus-visible { outline: 4px solid rgba(79, 70, 229, 0.6); outline-offset: 3px; }

        .card-title {
          margin: 0;
          font-family: var(--font-display), sans-serif;
          font-size: 1.7rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* The image wrapper MUST be positioned for next/image "fill" */
        .art {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
        }
        .art img { transition: transform 0.3s; }
        .card:hover .art img { transform: scale(1.05); }

        .card-desc {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1.4;
          color: rgba(20, 16, 28, 0.85);
        }

        /* Footer */
        .footer {
          width: 100%;
          max-width: 1280px;
          margin: 24px auto 0;
          padding: 18px 40px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(43, 34, 56, 0.7);
        }
        .footer p { margin: 0; }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { text-decoration: underline; text-underline-offset: 4px; }
        .footer-links a:hover { color: #3730a3; }

        /* Popup */
        .overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: rgba(45, 34, 66, 0.6);
          backdrop-filter: blur(4px);
          animation: fade-in 0.15s ease-out;
        }
        .popup {
          position: relative;
          width: 100%;
          max-width: 540px;
          max-height: calc(100vh - 32px);
          overflow-y: auto;
          padding: 36px 32px 28px;
          border: 3px solid #1f2a1f;
          border-radius: 32px;
          box-shadow: 8px 8px 0 #1f2a1f;
          text-align: left;
          animation: pop-in 0.22s cubic-bezier(0.2, 0.9, 0.3, 1.2);
        }
        .popup-x {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border: 2px solid #1f2a1f;
          border-radius: 50%;
          background: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          line-height: 1;
        }
        .popup-x:hover { transform: scale(1.1); }
        .popup-kicker {
          margin: 0;
          font-family: var(--font-display), sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(20, 16, 28, 0.55);
        }
        .popup-title {
          margin: 6px 0 0;
          padding-right: 40px;
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.8rem, 4vw, 2.3rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #14101c;
        }
        .popup-details {
          margin: 16px 0 0;
          padding: 16px 18px;
          border: 2px solid #1f2a1f;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.55);
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.65;
          color: rgba(20, 16, 28, 0.9);
        }
        .popup-actions { display: flex; gap: 12px; margin-top: 24px; }
        .btn {
          flex: 1;
          padding: 10px 18px;
          border: 2px solid #1f2a1f;
          border-radius: 999px;
          background: #fff;
          box-shadow: 3px 3px 0 #1f2a1f;
          font: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          text-align: center;
          color: #14101c;
          cursor: pointer;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(2px); box-shadow: none; }
        .btn-dark { background: #2d2242; color: #fff !important; }

        @keyframes pop-in {
          from { opacity: 0; transform: translateY(12px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .header, .main, .footer { padding-left: 20px; padding-right: 20px; }
          .nav { display: none; }
          .grid { grid-template-columns: 1fr; }
          .footer { flex-direction: column; }
          .popup { padding: 30px 20px 22px; }
        }
      `}</style>
    </div>
  );
}