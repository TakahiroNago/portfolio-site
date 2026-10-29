import type { Project, SiteContent } from '../../types.ts'
import { LinkButton } from '../ui/LinkButton.tsx'
import { TagList } from '../ui/TagList.tsx'
import styles from './ProjectCard.module.css'

type Props = {
  project: Project
  labels: SiteContent['labels']
}

// screenshot がないプロジェクトは画像枠を出さず、テキストのみで表示する。
export function ProjectCard({ project, labels }: Props) {
  return (
    <article className={styles.card} aria-labelledby={`${project.id}-title`}>
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
      <div className={styles.body}>
        <h4 id={`${project.id}-title`} className={styles.name}>
          {project.name}
        </h4>
        <p className={styles.tagline}>{project.tagline}</p>
        <p className={styles.summary}>{project.summary}</p>
        {project.highlights && (
          <ul className={styles.highlights}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {project.note && <p className={styles.note}>{project.note}</p>}
        <div className={styles.footer}>
          <TagList tags={project.tags} label={labels.techStack} />
          <div className={styles.links}>
            {project.links.map((link) => (
              <LinkButton key={link.href} href={link.href} label={link.label} externalLabel={labels.externalLink} />
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
