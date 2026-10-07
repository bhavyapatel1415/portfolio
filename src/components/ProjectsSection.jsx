import { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  Database, 
  ArrowUpRight, 
  Activity, 
  Bot, 
  Code2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound } from '../utils/audio';

const projectsList = [
  {
    id: 'medical-mgmt',
    category: 'Python • SQL Database',
    filterCategory: 'systems',
    title: 'Medical Management System',
    description: 'Comprehensive academic software developed with Python and SQL for managing clinical records, patient diagnostic histories, and doctor appointments.',
    detailedDescription: 'Developed as a foundational academic software engineering project at Indus University. Designed to replace error-prone manual paper filing with a structured, query-driven relational database. It ensures high data integrity through normalized SQL schemas, automated appointment conflict checks, and secure record lookups.',
    icon: <Activity size={22} color="#10b981" />,
    features: [
      'Relational schema design with normalized tables',
      'Patient registration, diagnosis logs & history lookup',
      'Doctor scheduling & automated conflict check',
      'Prescription records & medication details',
      'Optimized SQL queries for rapid record retrieval',
      'Robust error handling and data input validation'
    ],
    tags: ['Python', 'SQL', 'DBMS', 'Relational Design', 'Data Integrity', 'Tkinter / CLI'],
    githubUrl: 'https://github.com/bhavyapatel1415'
  },
  {
    id: 'web-ai-capstone',
    category: 'React • Full-Stack • AI',
    filterCategory: 'ai',
    title: 'Web Development with AI (Capstone)',
    description: 'Capstone project built during Internshala Trainings, applying modern front-end engineering, relational databases, backend APIs, and integrated AI capabilities.',
    detailedDescription: 'Built as the final capstone for the 8-week intensive Internshala Web Development with AI certification. Combines a React frontend with server-side logic and database connectivity, incorporating AI-driven workflows to assist users with smart automated suggestions and content generation.',
    icon: <Bot size={22} color="#38bdf8" />,
    features: [
      'React component-driven modular user interface',
      'AI prompt integration for smart web assistance',
      'Database integration for persistent user sessions',
      'Clean REST API communication with JSON payloads',
      'Fully responsive UI styled with CSS3 and modern UX',
      'Modular state management with React Hooks'
    ],
    tags: ['React.js', 'JavaScript (ES6+)', 'PHP / APIs', 'DBMS', 'AI Integration', 'CSS3'],
    githubUrl: 'https://github.com/bhavyapatel1415'
  },
  {
    id: 'devpulse-studio',
    category: 'React • Web Tools • AI',
    filterCategory: 'web',
    title: 'DevPulse — AI Prompt & Code Hub',
    description: 'Interactive developer productivity application engineered for organizing, testing, and generating intelligent prompt templates and code snippets.',
    detailedDescription: 'A modern developer utility application built to enhance coding efficiency with AI. Provides a clean workspace for structuring system prompts, previewing formatted markdown snippets, and copying prompt variations with single-click shortcuts.',
    icon: <Sparkles size={22} color="#f59e0b" />,
    features: [
      'Structured prompt library categorized by dev stack',
      'Syntax-highlighted code output preview',
      'Instant copy-to-clipboard with toast feedback',
      'Local storage persistence for custom saved templates',
      'Responsive dark-mode UI with zero layout shifts'
    ],
    tags: ['React.js', 'Web APIs', 'Prompt Engineering', 'Vanilla CSS', 'LocalStorage'],
    githubUrl: 'https://github.com/bhavyapatel1415'
  },
  {
    id: 'dsa-visualizer',
    category: 'Algorithms • CS Foundations',
    filterCategory: 'systems',
    title: 'Data Structures & Algorithm Visualizer',
    description: 'Interactive simulation tool illustrating core sorting algorithms and search trees for deep computer science intuition.',
    detailedDescription: 'Built to provide visual clarity into core Data Structures & Algorithms coursework. Enables users to step through sorting passes (Bubble, Selection, QuickSort) with dynamic array bar height animations and real-time comparison counters.',
    icon: <Code2 size={22} color="#a855f7" />,
    features: [
      'Real-time step-by-step sorting visualizer',
      'Customizable array size and animation speed slider',
      'Color-coded comparison, swap, and sorted states',
      'Time & space complexity breakdown for each algorithm',
      'Built purely with modern JavaScript and HTML5 Canvas'
    ],
    tags: ['JavaScript', 'Algorithms', 'Data Structures', 'Canvas API', 'CSE Core'],
    githubUrl: 'https://github.com/bhavyapatel1415'
  }
];

export default function ProjectsSection({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsList
    : projectsList.filter((p) => p.filterCategory === filter || (filter === 'web' && (p.filterCategory === 'web' || p.filterCategory === 'ai')));

  const handleFilterClick = (f) => {
    playClickSound();
    setFilter(f);
  };

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="section-label">
              <FolderGit2 size={14} />
              <span>Project Portfolio</span>
            </div>
            <h2 className="section-title">Featured Engineering Projects</h2>
            <p className="section-desc">
              Practical implementations of full-stack web development, Python database architectures, and applied AI systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'web', label: 'Web & React' },
              { id: 'systems', label: 'Python & Systems' },
              { id: 'ai', label: 'AI Integrated' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterClick(tab.id)}
                className={`btn ${filter === tab.id ? 'btn-primary' : 'btn-outline'}`}
                style={{
                  padding: '7px 16px',
                  fontSize: '0.84rem',
                  borderColor: filter === tab.id ? '#38bdf8' : 'rgba(255, 255, 255, 0.1)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="bento-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="spotlight-card col-6"
              style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div>
                {/* Card Top */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      padding: '10px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.08)'
                    }}>
                      {project.icon}
                    </div>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#38bdf8',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {project.category}
                      </span>
                      <h3 style={{ fontSize: '1.28rem', color: '#ffffff', fontWeight: 700, marginTop: '2px' }}>
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '22px' }}>
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <button
                  className="btn btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  onClick={() => {
                    playClickSound();
                    onSelectProject(project);
                  }}
                >
                  <span>Inspect Details</span>
                  <ArrowUpRight size={15} />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                  title="View on GitHub"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
