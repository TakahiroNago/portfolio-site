import type { ExternalLink } from '../../types.ts'
import styles from './Header.module.css'

type Props = {
  name: string
  nav: { id: string; label: string }[]
  github: ExternalLink
  navLabel: string
}

export function Header({ name, nav, github, navLabel }: Props) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#top">
          {name}
        </a>
        <nav aria-label={navLabel}>
          <ul className={styles.nav}>
            {nav.map((item) => (
              <li key={item.id}>
                <a className={styles.navLink} href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
            <li className={styles.github}>
              <a className={styles.navLink} href={github.href} target="_blank" rel="noopener noreferrer">
                {github.label}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
