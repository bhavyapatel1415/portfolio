import { useState } from 'react';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Code2, 
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function Hero({ onOpenResume, onOpenTerminal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playSuccessSound();
    navigator.clipboard.writeText('5012.sktbhavidi@gmail.com');
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#38bdf8', '#10b981', '#ffffff', '#818cf8']
      });
    } catch (e) {
      // confetti fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id) => {
    playClickSound();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* Top Status & Location Badges */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div className="status-pill">
            <span className="status-dot-pulse" />
            <span>Available for Internships & Projects</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}>
            <MapPin size={13} color="#38bdf8" />
            <span>Ahmedabad, Gujarat</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'rgba(56, 189, 248, 0.06)',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.82rem',
            color: '#38bdf8',
            fontFamily: 'var(--font-mono)'
          }}>
            <span>B.Tech CSE (2024–2028)</span>
          </div>
        </div>

        {/* Hero Title and Bio - SOLID TEXT ONLY, NO GRADIENTS */}
        <div style={{ maxWidth: '900px', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5.8vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.035em',
            color: '#ffffff',
            marginBottom: '16px'
          }}>
            BHAVYA PATEL
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.25rem, 2.8vw, 1.85rem)',
            fontWeight: 600,
            color: '#38bdf8',
            marginBottom: '18px',
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexWrap: 'wrap'
          }}>
            <span>Web Development & AI Engineering</span>
            <span style={{ fontSize: '1rem', color: 'var(--text-dim)', fontWeight: 400 }}>•</span>
            <span style={{ color: '#e2e8f0', fontSize: '1.15rem', fontWeight: 500 }}>Indus University</span>
          </h2>

          <p style={{
            fontSize: 'clamp(1.02rem, 1.3vw, 1.18rem)',
            color: '#94a3b8',
            lineHeight: 1.7,
            maxWidth: '780px',
            marginBottom: '12px'
          }}>
            Computer Science & Engineering student with certified expertise in full-stack web architectures,
            React interfaces, Python backends, and AI web integration. Focused on shipping robust, user-centric software
            and engineering solutions for real-world impact.
          </p>

          <p style={{
            fontSize: '0.95rem',
            color: '#64748b',
            fontFamily: 'var(--font-mono)'
          }}>
            <span style={{ color: '#10b981' }}>➜</span> Seeking software engineering, web development, or AI technology internships.
          </p>
        </div>

        {/* Action Buttons (UIverse / 21st.dev inspired) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginBottom: '56px' }}>
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            <span>View Featured Projects</span>
            <ArrowRight size={17} />
          </button>

          <button
            className="btn btn-outline"
            onClick={handleCopyEmail}
            title="Click to copy email address"
          >
            {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
          </button>

          <button
            className="btn btn-outline"
            onClick={() => {
              playClickSound();
              onOpenResume();
            }}
          >
            <Download size={16} />
            <span>Resume View</span>
          </button>

          <button
            className="btn btn-emerald"
            onClick={() => {
              playClickSound();
              onOpenTerminal();
            }}
          >
            <Terminal size={16} />
            <span>Launch CLI Terminal</span>
          </button>
        </div>

        {/* Quick Highlights Bento Row */}
        <div className="bento-grid">
          
          {/* Card 1: Current Education */}
          <div 
            className="spotlight-card col-4"
            style={{ padding: '24px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                padding: '10px',
                borderRadius: '12px',
                background: 'rgba(56, 189, 248, 0.12)',
                color: '#38bdf8'
              }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Academic Degree
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>B.Tech in CSE</h4>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Indus Institute of Technology & Engineering, Ahmedabad. Active 2024 – 2028 batch pursuing core computer science.
            </p>
          </div>

          {/* Card 2: Specialized Certification */}
          <div 
            className="spotlight-card col-4"
            style={{ padding: '24px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                padding: '10px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981'
              }}>
                <Award size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Internshala Certified
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>Web Dev with AI</h4>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              8-week intensive certification covering HTML, CSS, React, PHP, DBMS, JavaScript, and applied AI in Web Development.
            </p>
          </div>

          {/* Card 3: Academic Excellence & Core Skills */}
          <div 
            className="spotlight-card col-4"
            style={{ padding: '24px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{
                padding: '10px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.12)',
                color: '#c084fc'
              }}>
                <Code2 size={22} />
              </div>
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Foundations
                </span>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>87% in Higher Sec.</h4>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              St. Kabir School, Ahmedabad. Strong foundation in mathematics, problem-solving, data structures, and computer systems.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
