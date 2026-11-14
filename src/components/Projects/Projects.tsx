import { projectPath } from '../../router.ts'
import { Link } from '../ui/Link.tsx'
import type { FeaturedProject, OtherProject, SiteContent } from '../../types.ts'
import { ExternalAnchor } from '../ui/ExternalAnchor.tsx'
import styles from './Projects.module.css'

type Labels = SiteContent['labels']

function Badges({ project, featured, labels }: { project: FeaturedProject; featured?: boolean; labels: Labels }) {
  return (
    <div className={styles.badges}>
      {featured && <span className="badge badge-solid">{labels.featured}</span>}
      <span className="badge badge-outline">{project.category}</span>
      {project.badge && <span className={`badge badge-${project.badge.tone}`}>{project.badge.label}</span>}
    </div>
  )
}

function KeyTags({ project, plain }: { project: FeaturedProject; plain?: boolean }) {
  const rest = project.tags.length - project.keyTags.length
  return (
    <ul className={styles.tags}>
      {project.keyTags.map((tag) => (
        <li key={tag} className={plain ? 'chip' : `chip ${styles.chipOnTint}`}>
          {tag}
        </li>
      ))}
      {rest > 0 && <li className={styles.more}>+{rest}</li>}
    </ul>
  )
}

/** 1件目のプロジェクト。説明と処理の流れを横に並べる */
export function SpotlightCard({ project, labels }: { project: FeaturedProject; labels: Labels }) {
  const headingId = `card-${project.id}`
  return (
    <article className={styles.spotlight} aria-labelledby={headingId}>
      <div className={styles.spotlightBody}>
        <Badges project={project} featured labels={labels} />
        <h3 id={headingId} className={styles.spotlightTitle}>
          {project.name}
        </h3>
        <p className={styles.spotlightShort}>{project.short}</p>
        <ul className={styles.points}>
          {project.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <KeyTags project={project} />
        <div className={styles.actions}>
          <Link className="btn btn-primary btn-sm" href={projectPath(project.id)}>
            {labels.detailsLong} <span aria-hidden="true">→</span>
          </Link>
          {project.links.map((link) => (
            <ExternalAnchor key={link.href} className="btn btn-secondary btn-sm" href={link.href} externalLabel={labels.externalLink}>
              {link.short ?? link.label}
            </ExternalAnchor>
          ))}
        </div>
      </div>

      {project.cardFlow && (
        <div className={styles.flow}>
          <p className={styles.flowTitle}>{project.cardFlow.title}</p>
          <ol className={styles.flowSteps}>
            {project.cardFlow.steps.map((step) => (
              <li key={step.label} className={step.emphasis === 'filled' ? styles.flowStepFilled : styles.flowStep}>
                <b>{step.label}</b>
                {step.detail && <span>{step.detail}</span>}
              </li>
            ))}
          </ol>
        </div>
      )}
    </article>
  )
}

export function ProjectCard({ project, labels }: { project: FeaturedProject; labels: Labels }) {
  const headingId = `card-${project.id}`
  return (
    <article className={styles.card} aria-labelledby={headingId}>
      <Badges project={project} labels={labels} />
      <h3 id={headingId} className={styles.cardTitle}>
        {project.name}
      </h3>
      <p className={styles.cardShort}>{project.short}</p>
      <ul className={styles.cardPoints}>
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className={styles.cardFooter}>
        <KeyTags project={project} plain />
        <div className={`textLinks ${styles.cardLinks}`}>
          {project.links.map((link) => (
            <ExternalAnchor key={link.href} href={link.href} externalLabel={labels.externalLink}>
              {link.short ?? link.label}
            </ExternalAnchor>
          ))}
          <Link className={styles.detailLink} href={projectPath(project.id)} aria-label={`${project.name}の${labels.details}`}>
            {labels.details} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export function OtherProjects({ projects, labels }: { projects: OtherProject[]; labels: Labels }) {
  return (
    <ul className={styles.others}>
      {projects.map((project) => (
        <li key={project.id} className={styles.other}>
          <div className={styles.otherText}>
            <b>{project.name}</b>
            <span>{project.short}</span>
            <ul className={`${styles.tags} ${styles.otherTags}`} aria-label={`${project.name}の使用技術`}>
              {project.tags.map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="textLinks">
            {project.links.map((link) => (
              <ExternalAnchor key={link.href} href={link.href} externalLabel={labels.externalLink}>
                {link.short ?? link.label}
                <span className="visually-hidden">（{project.name}）</span>
              </ExternalAnchor>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
