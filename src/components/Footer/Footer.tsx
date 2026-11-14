import { Link } from '../ui/Link.tsx'
import type { SiteContent } from '../../types.ts'
import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

type Props = {
  cta: SiteContent['cta']
  github: SiteContent['profile']['github']
  owner: string
  labels: SiteContent['labels']
}

export function Footer({ cta, github, owner, labels }: Props) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <div className={styles.ctaText}>
          <p className={styles.ctaTitle}>{cta.title}</p>
          <p className={styles.ctaSub}>{cta.sub}</p>
        </div>
        <a className={`btn ${styles.ctaButton}`} href={github.href} target="_blank" rel="noopener noreferrer">
          {cta.button}
          <span aria-hidden="true">↗</span>
          <span className="visually-hidden">（{labels.externalLink}）</span>
        </a>
      </div>
      <div className={styles.bottomWrap}>
        <div className={`container ${styles.bottom}`}>
          <small>
            © {currentYear} {owner}
          </small>
          <Link href="#top" className={styles.toTop}>
            {labels.toTop} <span aria-hidden="true">↑</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
