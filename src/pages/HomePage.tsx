import { Experience } from '../components/Experience/Experience.tsx'
import { Hero } from '../components/Hero/Hero.tsx'
import { Oss } from '../components/Oss/Oss.tsx'
import { OtherProjects, ProjectCard, SpotlightCard } from '../components/Projects/Projects.tsx'
import { Skills, SkillsLegend } from '../components/Skills/Skills.tsx'
import { SectionHeading } from '../components/ui/SectionHeading.tsx'
import type { SiteContent } from '../types.ts'
import styles from './HomePage.module.css'

type Props = {
  content: SiteContent
}

export function HomePage({ content }: Props) {
  const { sections, labels } = content
  const [spotlight, ...rest] = content.featuredProjects

  return (
    <>
      <Hero profile={content.profile} labels={labels} />

      <section id="projects" aria-labelledby="projects-heading" className={styles.band}>
        <div className={`container ${styles.stack}`}>
          <SectionHeading id="projects-heading" heading={sections.projects} />
          {spotlight && <SpotlightCard project={spotlight} labels={labels} />}
          <div className={styles.cardGrid}>
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} labels={labels} />
            ))}
          </div>
          <div className={styles.others}>
            <h3 className={styles.othersTitle}>{sections.projects.otherTitle}</h3>
            <OtherProjects projects={content.otherProjects} labels={labels} />
          </div>
        </div>
      </section>

      <section id="experience" aria-labelledby="experience-heading" className={styles.plain}>
        <div className="container">
          <SectionHeading id="experience-heading" heading={sections.experience} />
          <Experience groups={content.experience} />
        </div>
      </section>

      <section id="oss" aria-labelledby="oss-heading" className={styles.band}>
        <div className={`container ${styles.stack}`}>
          <SectionHeading id="oss-heading" heading={sections.oss} />
          <Oss items={content.oss} externalLabel={labels.externalLink} />
        </div>
      </section>

      <section id="skills" aria-labelledby="skills-heading" className={styles.plain}>
        <div className={`container ${styles.stack}`}>
          <SectionHeading
            id="skills-heading"
            heading={sections.skills}
            aside={<SkillsLegend legendWork={sections.skills.legendWork} legendPersonal={sections.skills.legendPersonal} />}
          />
          <p className={styles.note}>{sections.skills.lead}</p>
          <Skills
            categories={content.skills}
            legendWork={sections.skills.legendWork}
            legendPersonal={sections.skills.legendPersonal}
          />
        </div>
      </section>
    </>
  )
}
