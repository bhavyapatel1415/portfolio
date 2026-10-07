import { useState } from 'react';
import { 
  Globe, 
  Code, 
  Database, 
  Bot, 
  Cpu, 
  Users, 
  Languages, 
  CheckCircle2, 
  TerminalSquare 
} from 'lucide-react';
import { playClickSound } from '../utils/audio';

const skillCategories = [
  { id: 'all', label: 'All Domains' },
  { id: 'web', label: 'Web & Frontend' },
  { id: 'programming', label: 'Programming & Logic' },
  { id: 'database', label: 'Database & Systems' },
  { id: 'ai', label: 'AI & Engineering' }
];

const skillsData = [
  {
    category: 'web',
    title: 'Web & Frontend Development',
    icon: <Globe size={22} color="#38bdf8" />,
    description: 'Developing responsive, interactive client-side applications with modern frameworks and clean architecture.',
    skills: [
      { name: 'React.js', level: 'Advanced', tag: 'Core Library' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', tag: 'Async/DOM' },
      { name: 'HTML5 & Semantic Web', level: 'Mastery', tag: 'Structure' },
      { name: 'CSS3 & Vanilla CSS', level: 'Advanced', tag: 'Responsive/Animations' },
      { name: 'Bootstrap 5', level: 'Proficient', tag: 'Components' },
      { name: 'PHP', level: 'Intermediate', tag: 'Full-stack' }
    ]
  },
  {
    category: 'programming',
    title: 'Core Programming & Languages',
    icon: <Code size={22} color="#10b981" />,
    description: 'Object-oriented programming, algorithmic problem solving, and backend logic across major languages.',
    skills: [
      { name: 'Python', level: 'Proficient', tag: 'Scripting & Logic' },
      { name: 'C++', level: 'Proficient', tag: 'DSA & Systems' },
      { name: 'Java', level: 'Proficient', tag: 'OOP Architecture' },
      { name: 'Data Structures', level: 'Intermediate', tag: 'Trees, Graphs, Maps' },
      { name: 'Algorithms', level: 'Intermediate', tag: 'Sorting, Searching, DP' }
    ]
  },
  {
    category: 'database',
    title: 'Database & Computer Systems',
    icon: <Database size={22} color="#a855f7" />,
    description: 'Relational data modeling, query optimization, operating system fundamentals, and network architectures.',
    skills: [
      { name: 'DBMS Principles', level: 'Proficient', tag: 'Relational Modeling' },
      { name: 'SQL / MySQL', level: 'Proficient', tag: 'Complex Queries & Joins' },
      { name: 'Operating Systems', level: 'Academic', tag: 'Processes, Memory' },
      { name: 'Computer Networks', level: 'Academic', tag: 'TCP/IP, OSI Layers' },
      { name: 'Linux OS', level: 'Proficient', tag: 'Bash, Shell, CLI' }
    ]
  },
  {
    category: 'ai',
    title: 'AI Concepts & Modern Tooling',
    icon: <Bot size={22} color="#f59e0b" />,
    description: 'Certified in integrating AI workflows into web products, intelligent prompting, and automated dev pipelines.',
    skills: [
      { name: 'AI in Web Development', level: 'Certified', tag: 'Internshala Spec' },
      { name: 'Prompt Engineering', level: 'Advanced', tag: 'LLM Integration' },
      { name: 'Git & GitHub', level: 'Proficient', tag: 'Version Control' },
      { name: 'REST APIs', level: 'Proficient', tag: 'Endpoints & JSON' },
      { name: 'Cursor & Antigravity IDE', level: 'Proficient', tag: 'Agentic Workflows' }
    ]
  }
];

const softSkills = [
  'Problem Solving',
  'Analytical Thinking',
  'Team Collaboration',
  'Quick Learning',
  'Presentation Skills',
  'Technical Communication'
];

const spokenLanguages = [
  { lang: 'English', desc: 'Professional Working Proficiency' },
  { lang: 'Hindi', desc: 'Fluent & Conversational' },
  { lang: 'Gujarati', desc: 'Native Fluency' }
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((item) => item.category === activeTab);

  const handleTabChange = (tabId) => {
    playClickSound();
    setActiveTab(tabId);
  };

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div className="section-label">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Technical Expertise & Core Skills</h2>
          <p className="section-desc">
            Acquired through rigorous B.Tech coursework at Indus University and intensive 8-week certified training in Web Development with AI.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-outline'}`}
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                borderWidth: activeTab === tab.id ? '1px' : '1px',
                borderColor: activeTab === tab.id ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Bento Grid */}
        <div className="bento-grid" style={{ marginBottom: '40px' }}>
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="spotlight-card col-6"
              style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    padding: '10px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 600 }}>{cat.title}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>Domain Competency</p>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.6 }}>
                  {cat.description}
                </p>

                {/* Skill Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 14px',
                        background: 'rgba(15, 23, 42, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.85rem'
                      }}
                    >
                      <CheckCircle2 size={13} color="#38bdf8" />
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>{skill.name}</span>
                      <span style={{
                        fontSize: '0.72rem',
                        color: 'var(--text-dim)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        {skill.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  Verified by coursework & practical projects
                </span>
                <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                  Active Focus
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Professional Strengths & Languages Bento Row */}
        <div className="bento-grid">
          
          {/* Soft & Collaborative Strengths */}
          <div 
            className="spotlight-card col-7"
            style={{ padding: '24px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                <Users size={18} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>
                Professional & Interpersonal Skills
              </h4>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Complementing technical rigor with structured communication, rapid problem solving, and effective team dynamics.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {softSkills.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.82rem',
                    color: '#e2e8f0',
                    fontWeight: 500
                  }}
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Multilingual Proficiency */}
          <div 
            className="spotlight-card col-5"
            style={{ padding: '24px' }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{ padding: '8px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Languages size={18} />
              </div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>
                Languages Spoken
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {spokenLanguages.map((l, idx) => (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.88rem' }}>{l.lang}</span>
                  <span style={{ color: 'var(--text-dim)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>{l.desc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
