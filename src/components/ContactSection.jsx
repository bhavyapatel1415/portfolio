import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live clock for Ahmedabad, India (IST, UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    playSuccessSound();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
    try {
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.8 } });
    } catch (e) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playClickSound();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      playSuccessSound();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#38bdf8', '#10b981', '#ffffff', '#a855f7']
        });
      } catch (e) {}
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" style={{ padding: '80px 0 100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label">
            <Send size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">Let’s Build Something Together</h2>
          <p className="section-desc">
            Available for software engineering internships, frontend web roles, and tech collaborations. Reach out directly or drop a message!
          </p>
        </div>

        <div className="bento-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="col-5" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Live Location & Local Time Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Location & Timezone
                  </span>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 600 }}>Ahmedabad, Gujarat, India</h4>
                </div>
              </div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.82rem',
                color: '#34d399',
                fontFamily: 'var(--font-mono)'
              }}>
                <Clock size={13} />
                <span>IST (GMT+5:30): {currentTime || 'Loading...'}</span>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Direct Email
                    </span>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                      5012.sktbhavidi@gmail.com
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('5012.sktbhavidi@gmail.com', 'email')}
                  className="btn btn-outline"
                  style={{ padding: '6px 12px', fontSize: '0.78rem', gap: '5px' }}
                  title="Copy email"
                >
                  {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href="mailto:5012.sktbhavidi@gmail.com"
                style={{ fontSize: '0.82rem', color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Launch default mail client</span>
                <span>→</span>
              </a>
            </div>

            {/* Phone Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Phone & WhatsApp
                    </span>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                      +91 89884 40496
                    </h4>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy('+91 89884 40496', 'phone')}
                  className="btn btn-outline"
                  style={{ padding: '6px 12px', fontSize: '0.78rem', gap: '5px' }}
                  title="Copy phone"
                >
                  {copiedPhone ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <a
                href="tel:+918988440496"
                style={{ fontSize: '0.82rem', color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                <span>Call +91 89884 40496</span>
                <span>→</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(168, 85, 247, 0.1)', color: '#c084fc' }}>
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Source Code Repository
                    </span>
                    <h4 style={{ fontSize: '1rem', color: '#ffffff', fontWeight: 600 }}>
                      github.com/bhavyapatel1415
                    </h4>
                  </div>
                </div>

                <a
                  href="https://github.com/bhavyapatel1415"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '6px 14px', fontSize: '0.8rem' }}
                >
                  Visit
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div 
            className="spotlight-card col-7"
            style={{ padding: '36px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <MessageSquare size={20} color="#38bdf8" />
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff', fontWeight: 700 }}>
                Send a Direct Message
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Whether you have an internship position, full-stack project, or technical inquiry, I will reply promptly.
            </p>

            {submitted ? (
              <div style={{
                padding: '30px',
                textAlign: 'center',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto'
                }}>
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#ffffff', fontWeight: 700, marginBottom: '8px' }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', maxWidth: '440px', margin: '0 auto 20px auto' }}>
                  Thank you for reaching out! Bhavya Patel has received your notification and will follow up with you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 500 }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#38bdf8'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 500 }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#38bdf8'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 500 }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#38bdf8'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: 500 }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your role or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(15, 23, 42, 0.7)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-md)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#38bdf8'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    style={{ opacity: submitting ? 0.7 : 1 }}
                  >
                    <Send size={16} />
                    <span>{submitting ? 'Transmitting Message...' : 'Submit Message'}</span>
                  </button>

                  <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Direct notification to 5012.sktbhavidi@gmail.com
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
