'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Users, Share2, Sparkles, FileSearch, Trophy } from 'lucide-react';
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
  { title: 'Dynamic Graphing & Analysis Tools', Icon: TrendingUp, color: '#dceac4' },
  { title: 'Collaborative Student Workspace', Icon: Users, color: '#d8cce4' },
  { title: 'Smart Study Planners & Mind Maps', Icon: Share2, color: '#fde2b7' },
  { title: 'Interactive Contextual AI Assistant', Icon: Sparkles, color: '#cce3f0' },
  { title: 'Exam-Relevant PYQ Identification', Icon: FileSearch, color: '#f9d5d0' },
  { title: 'Progress Tracking & Insights', Icon: Trophy, color: '#e9e3b4' },
];

export default function LandingPage() {
  return (
    <div className={`lp ${display.variable} ${body.variable} ${logo.variable}`}>
      {/* Header: logo only (no dead links) */}
      <header className="lp-header">
        <span className="lp-brand">Abhyaas</span>
        <span className="lp-badge">AIMPACT Hackathon</span>
      </header>

      <main className="lp-main">
        {/* Left column */}
        <section className="lp-left">
          <p className="lp-eyebrow">Smart study · Stress-free learning</p>

          <h1 className="lp-title">ABHYAAS</h1>

          <h2 className="lp-sub">
            Your academic partner for smart study &amp; stress-free learning.
          </h2>

          <p className="lp-mission">
            <strong>Our mission:</strong> Empowering students to achieve academic
            excellence through personalized tools, efficient resources, and
            innovative learning strategies. Transforming effort into achievement.
          </p>

          <ul className="lp-features">
            {FEATURES.map(({ title, Icon, color }) => (
              <li key={title} className="lp-chip" style={{ background: color }}>
                <span className="lp-chip-icon">
                  <Icon size={18} strokeWidth={2.4} color="#3b2a12" />
                </span>
                <span className="lp-chip-text">{title}</span>
              </li>
            ))}
          </ul>

          <Link href="/dashboard" className="lp-cta">
            Get Started <span aria-hidden>→</span>
          </Link>
        </section>

        {/* Right column */}
        <section className="lp-right">
          <div className="lp-art">
            <Image
              src="/student-workload.png"
              alt="Student workload diagram"
              fill
              priority
              sizes="(max-width: 900px) 95vw, 55vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <p className="lp-caption">Overwhelmed? Simplify your study with Abhyaas.</p>
        </section>
      </main>

      <footer className="lp-footer">
        <p>
          © {new Date().getFullYear()} Abhyaas, Inc.
        </p>
        <p className="lp-note">
          Submission for the <strong>AIMPACT</strong> hackathon. This website only
          shows the UI of how it would work.
        </p>
      </footer>

      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; }
        body { margin: 0; }

        .lp {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          padding: 28px 60px 24px;
          color: #2b2238;
          font-family: var(--font-body), system-ui, sans-serif;
          background-color: #f7f3e3;
          background-image: linear-gradient(rgba(247, 243, 227, 0.55), rgba(247, 243, 227, 0.55)),
            url('/star-paper.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          overflow-x: hidden;
        }

        /* Header */
        .lp-header {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .lp-brand {
          font-family: var(--font-logo), cursive;
          font-size: 2.2rem;
          letter-spacing: 0.04em;
          color: #2d2242;
        }
        .lp-badge {
          padding: 6px 14px;
          border: 2px solid #1f2a1f;
          border-radius: 999px;
          background: #fde2b7;
          box-shadow: 2px 2px 0 #1f2a1f;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        /* Main */
        .lp-main {
          flex: 1;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 0;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          align-items: center;
        }

        .lp-left { display: flex; flex-direction: column; gap: 18px; }

        .lp-eyebrow {
          margin: 0;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #4c3175;
        }
        .lp-title {
          margin: 0;
          font-family: var(--font-display), sans-serif;
          font-size: clamp(3.2rem, 9vw, 7rem);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.03em;
          color: #322353;
        }
        .lp-sub {
          margin: 0;
          max-width: 560px;
          font-family: var(--font-display), sans-serif;
          font-size: clamp(1.15rem, 2vw, 1.5rem);
          font-weight: 700;
          line-height: 1.3;
        }
        .lp-mission {
          margin: 0;
          max-width: 580px;
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(43, 34, 56, 0.85);
        }

        /* Feature chips */
        .lp-features {
          list-style: none;
          margin: 6px 0 0;
          padding: 0;
          max-width: 620px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .lp-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border: 2px solid #1f2a1f;
          border-radius: 16px;
          box-shadow: 3px 3px 0 #1f2a1f;
        }
        .lp-chip-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 2px solid #1f2a1f;
          border-radius: 10px;
          background: #fff;
        }
        .lp-chip-text { font-size: 0.82rem; font-weight: 700; line-height: 1.25; }

        /* CTA */
        .lp-cta {
          align-self: flex-start;
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 38px;
          border: 3px solid #1f2a1f;
          border-radius: 999px;
          background: #ff9678;
          box-shadow: 5px 5px 0 #1f2a1f;
          font-family: var(--font-display), sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #14101c;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .lp-cta:hover { transform: translate(-2px, -3px); box-shadow: 8px 8px 0 #1f2a1f; }
        .lp-cta:active { transform: translate(3px, 3px); box-shadow: 1px 1px 0 #1f2a1f; }
        .lp-cta:focus-visible { outline: 4px solid rgba(79, 70, 229, 0.6); outline-offset: 4px; }

        /* Right column */
        .lp-right { display: flex; flex-direction: column; align-items: center; gap: 12px; }
        .lp-art { position: relative; width: 100%; height: clamp(420px, 74vh, 760px); }
        .lp-caption {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(43, 34, 56, 0.7);
          text-align: center;
        }

        /* Footer */
        .lp-footer {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 16px;
          border-top: 1px solid rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(43, 34, 56, 0.75);
        }
        .lp-footer p { margin: 0; }
        .lp-note { text-align: right; }

        /* Responsive */
        @media (max-width: 900px) {
          .lp { padding: 20px 22px; }
          .lp-main { grid-template-columns: 1fr; gap: 32px; }
          .lp-right { order: -1; }
          .lp-art { height: 380px; }
        }
        @media (max-width: 560px) {
          .lp-features { grid-template-columns: 1fr; }
          .lp-footer { flex-direction: column; text-align: center; }
          .lp-note { text-align: center; }
          .lp-badge { font-size: 0.62rem; padding: 5px 10px; }
        }
      `}</style>
    </div>
  );
}