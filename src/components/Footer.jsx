import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: '#05070b',
      padding: '48px 0 32px 0',
      position: 'relative'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>BHAVYA PATEL</span>
              <span className="brand-badge">CSE</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', maxWidth: '420px' }}>
              Computer Science & Engineering Student at Indus University. Dedicated to web engineering, Python systems, and AI integration.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="https://github.com/bhavyapatel1415"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href="mailto:5012.sktbhavidi@gmail.com"
              className="btn btn-outline"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
            >
              <Mail size={16} />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-outline"
              style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              title="Return to top"
            >
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Bhavya Patel. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            Designed for high performance • Vercel Ready
          </div>
        </div>
      </div>
    </footer>
  );
}
