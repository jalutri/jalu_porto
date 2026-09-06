import React from 'react';
import { useScrollSpy } from './hooks/useScrollSpy';
import { LanguageProvider } from './hooks/useLanguage';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { OrganizationsSection } from './components/sections/OrganizationsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

// Data imports
import { personalData } from './data/personal';
import { skillsData } from './data/skills';
import { projectsData } from './data/projects';
import { organizationsData } from './data/organizations';
import { contactData, navLinks } from './data/contact';

export function App() {
  const sectionIds = ['hero', 'about', 'skills', 'projects', 'organizations', 'contact'];
  const { activeSection, isScrolled } = useScrollSpy(sectionIds, 100);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-[#1F2937] font-body selection:bg-[#EFF6FF] selection:text-[#1E3A8A]">
        {/* Animated Custom Cursor Follower */}
        <CustomCursor />

        {/* Sticky Header Navigation */}
        <Navbar
          activeSection={activeSection}
          isScrolled={isScrolled}
          navLinks={navLinks}
          logo={personalData.logo}
        />

        {/* Main Page Content */}
        <main>
          <HeroSection personalData={personalData} />
          <AboutSection personalData={personalData} />
          <SkillsSection skillsData={skillsData} />
          <ProjectsSection projectsData={projectsData} />
          <OrganizationsSection organizationsData={organizationsData} />
          <ContactSection contactData={contactData} />
        </main>

        {/* Footer */}
        <Footer navLinks={navLinks} logo={personalData.logo} />
      </div>
    </LanguageProvider>
  );
}

export default App;
