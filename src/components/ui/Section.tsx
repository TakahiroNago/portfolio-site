import type { ReactNode } from 'react'
import styles from './Section.module.css'

type Props = {
  id: string
  title: string
  lead?: string
  tone?: 'default' | 'subtle'
  children: ReactNode
}

export function Section({ id, title, lead, tone = 'default', children }: Props) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className={tone === 'subtle' ? styles.subtle : styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 id={headingId} className={styles.title}>
            {title}
          </h2>
          {lead && <p className={styles.lead}>{lead}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
