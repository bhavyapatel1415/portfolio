import { useState, useEffect } from 'react';
import { Volume2, VolumeX, FileText, Menu, X, ArrowRight, Send } from 'lucide-react';
import { playClickSound, toggleAudio, isAudioEnabled } from '../utils/audio';

export default function Navbar({ onOpenResume, onOpenTerminal }) {
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'skills', 'projects', 'education', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    playClickSound();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSoundToggle = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    toggleAudio(newState);
    if (newState) playClickSound();
  };

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'terminal', label: 'Terminal' },
  ];

  return (
    <>
      <header className="navbar-wrapper">
        <nav
          className="navbar-container"
          style={{
            boxShadow: scrolled ? '0 12px 35px rgba(0, 0, 0, 0.7)' : '0 10px 30px rgba(0, 0, 0, 0.4)',
            borderColor: scrolled ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Brand Logo */}
          <a
            href="#home"
            className="nav-brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span>Bhavya</span>
            <span className="brand-badge">CSE</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-only">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop & Shared Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              className="nav-sound-btn"
              onClick={handleSoundToggle}
              title={soundOn ? 'Mute sound effects' : 'Unmute sound effects'}
              aria-label="Sound Toggle"
            >
              {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            <button
              className="btn btn-outline desktop-only"
              style={{ padding: '6px 12px', fontSize: '0.8rem', gap: '6px' }}
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            <button
              className="nav-cta desktop-only"
              onClick={() => handleNavClick('contact')}
            >
              Get In Touch
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-menu-toggle"
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Animated Dropdown Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-nav-drawer-overlay"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="mobile-nav-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontWeight: 800, color: '#ffffff' }}>Bhavya Patel</span>
                <span className="brand-badge">CSE</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      borderRadius: 'var(--radius-md)',
                      background: activeSection === item.id ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: activeSection === item.id ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                      color: activeSection === item.id ? '#38bdf8' : '#e2e8f0',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={14} opacity={0.6} />
                  </button>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                className="btn btn-outline"
                style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
              >
                <FileText size={16} />
                <span>View Full Resume</span>
              </button>

              <button
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.9rem' }}
                onClick={() => handleNavClick('contact')}
              >
                <span>Get In Touch</span>
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
