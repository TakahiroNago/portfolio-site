import { useEffect, useState } from 'react'
import { ArchitectureDiagram } from '../components/ArchitectureDiagram/ArchitectureDiagram.tsx'
import { ExternalAnchor } from '../components/ui/ExternalAnchor.tsx'
import { Link } from '../components/ui/Link.tsx'
import { projectPath } from '../router.ts'
import type { FeaturedProject, SiteContent } from '../types.ts'
import styles from './ProjectPage.module.css'

type Props = {
  project: FeaturedProject
  next?: FeaturedProject
  labels: SiteContent['labels']
}

type TocItem = { id: string; label: string }

/** 目次の項目のうち、画面上部に最も近い見出しの id を返す */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const targets = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    const visible = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting)
        const first = ids.find((id) => visible.get(id))
        if (first) setActive(first)
      },
      { rootMargin: '-80px 0px -60% 0px' },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

export function ProjectPage({ project, next, labels }: Props) {
  const toc: TocItem[] = [
    ...(project.background ? [{ id: 'why', label: labels.background }] : []),
    { id: 'overview', label: labels.overview },
    { id: 'architecture', label: labels.architecture },
    ...project.featureGroups.map((group, i) => ({ id: `feature-${i + 1}`, label: group.title })),
    { id: 'stack', label: labels.techStack },
  ]
  const [ids] = useState(() => toc.map((item) => item.id))
  const active = useActiveSection(ids)
  const [primary, ...secondary] = project.links

  return (
    <article>
      <header id="top" className={`container ${styles.hero}`}>
        <Link className={styles.back} href="/#projects">
          <span aria-hidden="true">← </span>
          {labels.backToList}
        </Link>
        <p className={styles.eyebrow}>Case Study / {project.category}</p>
        <h1 className={styles.title}>{project.name}</h1>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.links}>
          {primary && (
            <ExternalAnchor className="btn btn-primary" href={primary.href} externalLabel={labels.externalLink}>
              {primary.label}
            </ExternalAnchor>
          )}
          {secondary.map((link) => (
            <ExternalAnchor key={link.href} className="btn btn-secondary" href={link.href} externalLabel={labels.externalLink}>
              {link.label}
            </ExternalAnchor>
          ))}
        </div>
        <dl className={styles.meta}>
          {project.meta.map((item) => (
            <div key={item.label} className={styles.metaItem}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className={`container ${styles.layout}`}>
        <nav aria-label={labels.toc} className={styles.toc}>
          <p className={styles.tocTitle}>{labels.toc}</p>
          <ol className={styles.tocList}>
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={item.id === active ? styles.tocLinkActive : styles.tocLink}
                  aria-current={item.id === active ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.content}>
          {project.background && (
            <section id="why" className={styles.section} aria-labelledby="why-heading">
              <h2 id="why-heading" className={styles.h2}>
                {labels.background}
              </h2>
              {project.background.map((paragraph) => (
                <p key={paragraph} className={styles.text}>
                  {paragraph}
                </p>
              ))}
              {project.keyDecision && (
                <p className={styles.decision}>
                  <b>{labels.keyDecision}：</b>
                  {project.keyDecision}
                </p>
              )}
            </section>
          )}

          <section id="overview" className={styles.section} aria-labelledby="overview-heading">
            <h2 id="overview-heading" className={styles.h2}>
              {labels.overview}
            </h2>
            <p className={styles.text}>{project.summary}</p>
            {!project.background && project.keyDecision && (
              <p className={styles.decision}>
                <b>{labels.keyDecision}：</b>
                {project.keyDecision}
              </p>
            )}
          </section>

          <section id="architecture" className={styles.section} aria-labelledby="architecture-heading">
            <h2 id="architecture-heading" className={styles.h2}>
              {labels.architecture}
            </h2>
            <p className={styles.text}>
              <b className={styles.archTitle}>{project.architecture.title}</b>
              {project.architecture.lead}
            </p>
            <ArchitectureDiagram architecture={project.architecture} />
            {project.screenshot && (
              <figure className={styles.figure}>
                <img
                  src={project.screenshot.src}
                  alt={project.screenshot.alt}
                  width={project.screenshot.width}
                  height={project.screenshot.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            )}
          </section>

          {project.featureGroups.map((group, i) => {
            const id = `feature-${i + 1}`
            return (
              <section key={group.title} id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
                <h2 id={`${id}-heading`} className={styles.h2}>
                  {group.title}
                </h2>
                {group.stats && (
                  <dl className={styles.stats}>
                    {group.stats.map((stat) => (
                      <div key={stat.label} className={styles.stat}>
                        <dt>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <ol className={styles.points}>
                  {group.items.map((item, n) => (
                    <li key={item} className={styles.point}>
                      <span className={styles.pointNo} aria-hidden="true">
                        {String(n + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </section>
            )
          })}

          <section id="stack" className={styles.section} aria-labelledby="stack-heading">
            <h2 id="stack-heading" className={styles.h2}>
              {labels.techStack}
            </h2>
            <dl className={styles.stackTable}>
              {project.stack.map((row) => (
                <div key={row.label} className={styles.stackRow}>
                  <dt>{row.label}</dt>
                  <dd>{row.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          <nav className={styles.pager} aria-label={labels.backToListShort}>
            <Link href="/#projects">
              <span aria-hidden="true">← </span>
              {labels.backToListShort}
            </Link>
            {next && (
              <Link href={projectPath(next.id)}>
                {labels.next}：{next.name}
                <span aria-hidden="true"> →</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </article>
  )
}
