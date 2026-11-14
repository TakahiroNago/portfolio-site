import { Link } from '../ui/Link.tsx'
import type { ExternalLink } from '../../types.ts'
import styles from './Header.module.css'

type Props = {
  name: string
  nav: { id: string; label: string }[]
  github: ExternalLink
  navLabel: string
  externalLabel: string
}

export function Header({ name, nav, github, navLabel, externalLabel }: Props) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link className={styles.brand} href="/">
          {name}
        </Link>
        <nav aria-label={navLabel} className={styles.navWrap}>
          <ul className={styles.nav}>
            {nav.map((item) => (
              <li key={item.id}>
                <Link className={styles.navLink} href={`/#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className={`btn btn-primary ${styles.github}`} href={github.href} target="_blank" rel="noopener noreferrer">
          {github.label}
          <span aria-hidden="true">↗</span>
          <span className="visually-hidden">（{externalLabel}）</span>
        </a>
      </div>
    </header>
  )
}
