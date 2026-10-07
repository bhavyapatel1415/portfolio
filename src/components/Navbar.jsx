import { useState, useEffect } from 'react';
import { Volume2, VolumeX, FileText, Terminal, Sparkles, Send } from 'lucide-react';
import { playClickSound, toggleAudio, isAudioEnabled } from '../utils/audio';

export default function Navbar({ onOpenResume, onOpenTerminal }) {
  const [soundOn, setSoundOn] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'skills', 'projects', 'education', 'terminal', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
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

  return (
    <header className="navbar-wrapper">
      <nav
        className="navbar-container"
        style={{
          boxShadow: scrolled ? '0 12px 35px rgba(0, 0, 0, 0.7)' : '0 10px 30px rgba(0, 0, 0, 0.4)',
          borderColor: scrolled ? 'rgba(56, 189, 248, 0.25)' : 'rgba(255, 255, 255, 0.1)',
        }}
      >
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

        <ul className="nav-links">
          <li>
            <button
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => handleNavClick('home')}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleNavClick('skills')}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => handleNavClick('education')}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className={`nav-link ${activeSection === 'terminal' ? 'active' : ''}`}
              onClick={() => handleNavClick('terminal')}
            >
              Terminal
            </button>
          </li>
        </ul>

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
            className="btn btn-outline"
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
            className="nav-cta"
            onClick={() => handleNavClick('contact')}
          >
            Get In Touch
          </button>
        </div>
      </nav>
    </header>
  );
}
