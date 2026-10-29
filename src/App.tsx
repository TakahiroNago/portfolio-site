import { Experience } from './components/Experience/Experience.tsx'
import { FeaturedProject } from './components/FeaturedProject/FeaturedProject.tsx'
import { Footer } from './components/Footer/Footer.tsx'
import { Header } from './components/Header/Header.tsx'
import { Hero } from './components/Hero/Hero.tsx'
import { Links } from './components/Links/Links.tsx'
import { ProjectCard } from './components/ProjectCard/ProjectCard.tsx'
import { Skills } from './components/Skills/Skills.tsx'
import { Section } from './components/ui/Section.tsx'
import { ja } from './content/ja.ts'
import styles from './App.module.css'

// 英語版を追加する場合は src/content/en.ts を作成し、ここで切り替える。
const content = ja

function App() {
  const { sections, labels, profile } = content

  return (
    <>
      <a className="skip-link" href="#main">
        {labels.skipToContent}
      </a>
      <Header name={profile.name} nav={content.nav} github={profile.github} navLabel={labels.mainNav} />
      <main id="main">
        <Hero profile={profile} externalLabel={labels.externalLink} projectsLabel={labels.viewProjects} />

        <Section id="projects" title={sections.projects.title} lead={sections.projects.lead}>
          <FeaturedProject project={content.featuredProject} labels={labels} />

          <h3 className={styles.subheading}>{sections.projects.otherTitle}</h3>
          <div className={styles.projectGrid}>
            {content.projects.map((project) => (
              <ProjectCard key={project.id} project={project} labels={labels} />
            ))}
          </div>
        </Section>

        <Section id="experience" title={sections.experience.title} lead={sections.experience.lead} tone="subtle">
          <Experience
            work={content.experience.work}
            personal={content.experience.personal}
            workTitle={sections.experience.workTitle}
            personalTitle={sections.experience.personalTitle}
            responsibilitiesLabel={labels.responsibilities}
            techStackLabel={labels.techStack}
          />
        </Section>

        <Section id="skills" title={sections.skills.title} lead={sections.skills.lead}>
          <Skills
            work={content.skills.work}
            personal={content.skills.personal}
            personalTitle={sections.experience.personalTitle}
          />
        </Section>

        <Section id="links" title={sections.links.title} lead={sections.links.lead} tone="subtle">
          <Links github={profile.github} externalLabel={labels.externalLink} />
        </Section>
      </main>
      <Footer owner={content.footer} />
    </>
  )
}

export default App
