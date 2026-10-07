import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducation from './components/ExperienceEducation';
import TerminalSection from './components/TerminalSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ProjectDetailModal from './components/ProjectDetailModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenTerminal = () => {
    const el = document.getElementById('terminal');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app-layout" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Dynamic Ambient Background with Grid and Lighting Orbs */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
      </div>

      {/* Smooth Trailing Interactive Cursor */}
      <CustomCursor />

      {/* Floating Smart Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenTerminal={handleOpenTerminal}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={handleOpenTerminal}
        />

        <SkillsSection />

        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <ExperienceEducation />

        <TerminalSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
