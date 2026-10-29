import type { ExternalLink } from '../../types.ts'
import { LinkButton } from '../ui/LinkButton.tsx'
import styles from './Links.module.css'

type Props = {
  github: ExternalLink
  externalLabel: string
}

// 連絡先（メールアドレスなど）は本人の指定後に追加する。
export function Links({ github, externalLabel }: Props) {
  return (
    <div className={styles.links}>
      <LinkButton href={github.href} label={github.label} variant="primary" externalLabel={externalLabel} />
      <span className={styles.url}>{github.href.replace(/^https:\/\//, '')}</span>
    </div>
  )
}
