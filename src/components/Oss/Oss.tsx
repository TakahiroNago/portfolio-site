import type { OssItem } from '../../types.ts'
import { LinkButton } from '../ui/LinkButton.tsx'
import styles from './Oss.module.css'

type Props = {
  items: OssItem[]
  statusLabel: string
  externalLabel: string
}

// 提出済みの PR / Issue を、マージ済みと誤解されないよう状況つきで表示する。
export function Oss({ items, statusLabel, externalLabel }: Props) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.href} className={styles.item}>
          <div className={styles.head}>
            <span className={styles.kind}>{item.kind}</span>
            <span className={styles.repository}>{item.repository}</span>
          </div>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
          <dl className={styles.status}>
            <dt>{statusLabel}</dt>
            <dd>{item.status}</dd>
          </dl>
          <div className={styles.links}>
            <LinkButton href={item.href} label={item.kind === 'PR' ? 'Pull Request を見る' : 'Issue を見る'} externalLabel={externalLabel} />
          </div>
        </li>
      ))}
    </ul>
  )
}
