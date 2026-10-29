import type { FeaturedProject as FeaturedProjectData, SiteContent } from '../../types.ts'
import { ArchitectureDiagram } from '../ArchitectureDiagram/ArchitectureDiagram.tsx'
import { LinkButton } from '../ui/LinkButton.tsx'
import { TagList } from '../ui/TagList.tsx'
import styles from './FeaturedProject.module.css'

type Props = {
  project: FeaturedProjectData
  labels: SiteContent['labels']
}

export function FeaturedProject({ project, labels }: Props) {
  return (
    <article className={styles.card} aria-labelledby={`${project.id}-title`}>
      <div className={styles.intro}>
        <p className={styles.badge}>{labels.featured}</p>
        <h3 id={`${project.id}-title`} className={styles.name}>
          {project.name}
        </h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.links}>
          {project.links.map((link, i) => (
            <LinkButton
              key={link.href}
              href={link.href}
              label={link.label}
              variant={i === 0 ? 'primary' : 'secondary'}
              externalLabel={labels.externalLink}
            />
          ))}
        </div>
      </div>

      {project.screenshot && (
        <figure className={styles.screenshot}>
          <img
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            width={project.screenshot.width}
            height={project.screenshot.height}
            loading="lazy"
          />
        </figure>
      )}

      <ArchitectureDiagram architecture={project.architecture} labels={labels} />

      <div className={styles.features}>
        {project.featureGroups.map((group) => (
          <section key={group.title} className={styles.feature}>
            <h4 className={styles.featureTitle}>{group.title}</h4>
            <ul className={styles.featureList}>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className={styles.tags}>
        <TagList tags={project.tags} label={labels.techStack} />
      </div>
    </article>
  )
}
