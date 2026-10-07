import { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, Phone, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  const handleCopySummary = () => {
    playSuccessSound();
    const resumeText = `BHAVYA PATEL
Ahmedabad, Gujarat | +91 89884 40496 | 5012.sktbhavidi@gmail.com
B.Tech Computer Science & Engineering Student | Web Development & AI

PROFILE:
B.Tech Computer Science & Engineering student at Indus University with a strong interest in web development, AI, and software technologies. Completed an 8-week Web Development with AI training covering HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, and AI in Web Development.

EDUCATION:
• B.Tech — Computer Science & Engineering | Indus Institute of Technology and Engineering, Ahmedabad (2024 – 2028, Currently pursuing)
• Higher Secondary Education — St. Kabir School, Ahmedabad | 2025 | 87%

CERTIFICATION:
• Web Development with AI — Internshala Trainings | Certified 14 Aug 2025

TECHNICAL SKILLS:
• Web: HTML, CSS, Bootstrap, JavaScript, React
• Programming: Python, C++, Java
• Database: DBMS, SQL
• AI: AI concepts for Web Development
• Tools: Data Structures, Operating Systems, Computer Networks, Linux

PROJECTS:
• Medical Management System (Python & SQL)
• Web Development with AI Final Project (React, Database & AI)`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    try {
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ padding: '36px', maxWidth: '800px', width: '100%' }}
      >
        {/* Modal Controls Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: '#38bdf8', fontWeight: 600 }}>
              RESUME DOCUMENT PREVIEW
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopySummary}
              className="btn btn-outline"
              style={{ padding: '6px 12px', fontSize: '0.78rem', gap: '5px' }}
            >
              {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ padding: '6px 12px', fontSize: '0.78rem', gap: '5px' }}
            >
              <Printer size={13} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onClose();
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Clean Paper-Style Resume Container (Solid Typography) */}
        <div style={{
          background: '#090d15',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '20px 16px',
          fontFamily: 'var(--font-main)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.04em', marginBottom: '6px' }}>
              BHAVYA PATEL
            </h2>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px', marginBottom: '6px' }}>
              <span>Ahmedabad, Gujarat</span>
              <span>•</span>
              <span>+91 89884 40496</span>
              <span>•</span>
              <span>5012.sktbhavidi@gmail.com</span>
            </div>
            <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: 600 }}>
              B.Tech Computer Science & Engineering Student | Web Development & AI
            </div>
          </div>

          {/* Section: Profile */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              PROFILE
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.65 }}>
              B.Tech Computer Science & Engineering student at Indus University with a strong interest in web development, AI, and software technologies. Completed an 8-week Web Development with AI training covering HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, and AI in Web Development. Motivated to apply technical knowledge through internships, projects, and practical software development.
            </p>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              EDUCATION
            </h4>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>B.Tech — Computer Science & Engineering</strong>
                <span style={{ fontSize: '0.82rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>2024 – 2028 (Pursuing)</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Indus Institute of Technology and Engineering, Ahmedabad</div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>Higher Secondary Education</strong>
                <span style={{ fontSize: '0.82rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>2025 | 87%</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>St. Kabir School, Ahmedabad</div>
            </div>
          </div>

          {/* Section: Certification */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              CERTIFICATION
            </h4>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>Web Development with AI — Internshala Trainings</strong>
                <span style={{ fontSize: '0.82rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>Certified 14 Aug 2025</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                8-week online training. Modules: HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, React, Final Project, and AI in Web Development.
              </p>
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              TECHNICAL SKILLS
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px', fontSize: '0.85rem' }}>
              <div><strong style={{ color: '#ffffff' }}>• Web:</strong> <span style={{ color: '#cbd5e1' }}>HTML, CSS, Bootstrap, JavaScript, React</span></div>
              <div><strong style={{ color: '#ffffff' }}>• Programming:</strong> <span style={{ color: '#cbd5e1' }}>Python, C++, Java</span></div>
              <div><strong style={{ color: '#ffffff' }}>• Database:</strong> <span style={{ color: '#cbd5e1' }}>DBMS, SQL</span></div>
              <div><strong style={{ color: '#ffffff' }}>• AI:</strong> <span style={{ color: '#cbd5e1' }}>AI concepts for Web Development</span></div>
              <div style={{ gridColumn: '1 / -1' }}><strong style={{ color: '#ffffff' }}>• Tools & Concepts:</strong> <span style={{ color: '#cbd5e1' }}>Data Structures, Operating Systems, Computer Networks, Linux</span></div>
            </div>
          </div>

          {/* Section: Projects */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              ACADEMIC / PRACTICAL PROJECTS
            </h4>
            <div style={{ marginBottom: '10px' }}>
              <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>• Medical Management System:</strong>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '2px' }}>
                Developed an academic project using Python and SQL for managing medical records and related information.
              </p>
            </div>
            <div>
              <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>• Web Development with AI Final Project:</strong>
              <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginTop: '2px' }}>
                Built as part of the Internshala training, applying front-end, database, programming, and AI-related web development concepts.
              </p>
            </div>
          </div>

          {/* Section: Additional Skills & Objective */}
          <div>
            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              ADDITIONAL SKILLS & LANGUAGES
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '12px' }}>
              Problem Solving | Communication | Teamwork | Quick Learning | Presentation Skills | English, Hindi & Gujarati
            </p>

            <h4 style={{ fontSize: '0.86rem', color: '#38bdf8', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              CAREER OBJECTIVE
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Seeking an internship or entry-level opportunity in software development, web development, or related technology roles where I can strengthen my technical skills, contribute to real-world projects, and continue learning.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
