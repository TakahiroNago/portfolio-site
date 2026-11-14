import type { SiteContent } from '../../types.ts'
import styles from './Hero.module.css'

type Props = {
  profile: SiteContent['profile']
  labels: SiteContent['labels']
}

export function Hero({ profile, labels }: Props) {
  const { portrait } = profile

  return (
    <section id="top" className="container" aria-labelledby="hero-name">
      <div className={styles.hero}>
        <div className={styles.body}>
          <p className={styles.eyebrow}>{profile.eyebrow}</p>
          <h1 id="hero-name" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.lead}>
            {profile.lead.map((line, i) => (
              <span key={line}>
                {line}
                {i < profile.lead.length - 1 && <br />}
              </span>
            ))}
          </p>
          <p className={styles.sub}>{profile.sub}</p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#projects">
              {labels.viewProjects}
            </a>
            <a className="btn btn-secondary" href="#experience">
              {labels.viewExperience}
            </a>
          </div>
        </div>
        <div className={styles.portraitWrap}>
          {/* ファーストビューに表示されるため遅延読み込みにはしない */}
          <img
            className={styles.portrait}
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <dl className={styles.stats}>
        {profile.stats.map((stat) => (
          <div key={stat.value} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
