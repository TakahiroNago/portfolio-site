import type { OssItem } from '../../types.ts'
import styles from './Oss.module.css'

type Props = {
  items: OssItem[]
  externalLabel: string
}

export function Oss({ items, externalLabel }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.href}>
          <a className={styles.row} href={item.href} target="_blank" rel="noopener noreferrer">
            <span className={styles.repo}>
              <span className={styles.repoName}>{item.repository}</span>
              <span className={styles.ref}>{item.ref}</span>
            </span>
            <span className={styles.summary}>{item.summary}</span>
            <span className={`badge badge-${item.badge.tone} ${styles.badge}`}>{item.badge.label}</span>
            <span className="visually-hidden">（{externalLabel}）</span>
          </a>
        </li>
      ))}
    </ul>
  )
}
