import type { ReactNode } from 'react'
import type { SectionHeading as Heading } from '../../types.ts'
import styles from './SectionHeading.module.css'

type Props = {
  id: string
  heading: Heading
  /** 見出しの右側に置く要素（凡例など）。lead より優先する */
  aside?: ReactNode
}

/** 「01 / Projects」の小見出しと h2、右側の説明文 */
export function SectionHeading({ id, heading, aside }: Props) {
  return (
    <div className={styles.row}>
      <div className={styles.titles}>
        <p className={styles.eyebrow}>{heading.eyebrow}</p>
        <h2 id={id} className={styles.title}>
          {heading.title}
        </h2>
      </div>
      {aside ?? (heading.lead && <p className={styles.lead}>{heading.lead}</p>)}
    </div>
  )
}
