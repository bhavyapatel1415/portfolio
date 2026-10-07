import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Target, ArrowRight } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="education" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label">
            <GraduationCap size={14} />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="section-title">Education & Certifications</h2>
          <p className="section-desc">
            Formal engineering education at Indus University paired with specialized, project-driven industry certifications.
          </p>
        </div>

        <div className="bento-grid">
          
          {/* Column 1: Formal Education */}
          <div className="col-6" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={20} color="#38bdf8" />
              <span>Formal Education</span>
            </h3>

            {/* B.Tech Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '28px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#38bdf8',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    Undergraduate Degree
                  </span>
                  <h4 style={{ fontSize: '1.22rem', color: '#ffffff', fontWeight: 700, marginTop: '2px' }}>
                    B.Tech — Computer Science & Engineering
                  </h4>
                </div>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  fontSize: '0.78rem',
                  color: '#38bdf8',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}>
                  2024 – 2028 (Pursuing)
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.86rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <MapPin size={14} color="#38bdf8" />
                  Indus Institute of Technology and Engineering, Ahmedabad
                </span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Undergoing rigorous coursework in computer engineering. Building high proficiency in data structures, algorithms, operating systems, networking protocols, database management, and system architecture.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Data Structures', 'Operating Systems', 'DBMS & SQL', 'Computer Networks', 'Linux', 'Software Engineering'].map((item, idx) => (
                  <span key={idx} style={{
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    color: '#cbd5e1'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Higher Secondary Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#10b981',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    Secondary Education
                  </span>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 700 }}>
                    Higher Secondary Certificate (HSC)
                  </h4>
                </div>
                <div style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '0.78rem',
                  color: '#34d399',
                  fontWeight: 700,
                  fontFamily: 'var(--font-mono)'
                }}>
                  87% Distinction (2025)
                </div>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '10px' }}>
                St. Kabir School, Ahmedabad
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Graduated with distinction with deep emphasis on mathematics, logical analysis, scientific methodology, and analytical thinking.
              </p>
            </div>
          </div>

          {/* Column 2: Industry Certifications & Career Objective */}
          <div className="col-6" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={20} color="#10b981" />
              <span>Specialized Certifications</span>
            </h3>

            {/* Certification Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '28px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                <div>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#10b981',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textTransform: 'uppercase'
                  }}>
                    Professional Training
                  </span>
                  <h4 style={{ fontSize: '1.22rem', color: '#ffffff', fontWeight: 700, marginTop: '2px' }}>
                    Web Development with AI
                  </h4>
                </div>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  fontSize: '0.78rem',
                  color: '#34d399',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)'
                }}>
                  Certified 14 Aug 2025
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-dim)', marginBottom: '16px' }}>
                <span>Internshala Trainings • 8-Week Intensive Program</span>
              </div>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                Rigorous 8-week curriculum covering end-to-end full stack web architecture, real-time database management, responsive UI development, and practical integration of AI in modern web applications.
              </p>

              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                  Modules & Curriculum Completed:
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                  {['HTML & Semantic Web', 'CSS & Responsive Design', 'Bootstrap 5', 'DBMS & SQL', 'PHP Backend', 'JavaScript (ES6+)', 'React Framework', 'AI in Web Development'].map((mod, mIdx) => (
                    <div key={mIdx} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.8rem',
                      color: '#e2e8f0',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '6px 8px',
                      borderRadius: '6px',
                      border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                      <CheckCircle size={12} color="#10b981" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ padding: '12px 14px', borderRadius: 'var(--radius-md)', background: 'rgba(56, 189, 248, 0.06)', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                <span style={{ fontSize: '0.82rem', color: '#38bdf8', fontWeight: 600 }}>
                  ✓ Completed Hands-on Capstone Project: Applied full-stack database, React UI, and AI automation.
                </span>
              </div>
            </div>

            {/* Career Objective / Ambition Card */}
            <div 
              className="spotlight-card"
              style={{ padding: '24px' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                  <Target size={18} />
                </div>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>
                  Career Objective
                </h4>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6 }}>
                "Seeking an internship or entry-level opportunity in software development, web development, or related technology roles where I can strengthen my technical skills, contribute to real-world projects, and continue learning."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
