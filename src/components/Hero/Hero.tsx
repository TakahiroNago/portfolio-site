import type { SiteContent } from '../../types.ts'
import { LinkButton } from '../ui/LinkButton.tsx'
import styles from './Hero.module.css'

type Props = {
  profile: SiteContent['profile']
  externalLabel: string
  projectsLabel: string
}

export function Hero({ profile, externalLabel, projectsLabel }: Props) {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-name">
      <div className="container">
        <p className={styles.role}>{profile.role}</p>
        <h1 id="hero-name" className={styles.name}>
          {profile.name}
        </h1>
        <div className={styles.intro}>
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.actions}>
          <a className={styles.primary} href="#projects">
            {projectsLabel}
          </a>
          <LinkButton href={profile.github.href} label={profile.github.label} externalLabel={externalLabel} />
        </div>
      </div>
    </section>
  )
}
