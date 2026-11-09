import type { SkillTier } from '../../types.ts'
import { TagList } from '../ui/TagList.tsx'
import styles from './Skills.module.css'

type Props = {
  tiers: SkillTier[]
}

// 技術は「自力で設計・実装できる」「実務で使用した」「個人開発・学習で使用した」の3区分で表示する。
export function Skills({ tiers }: Props) {
  return (
    <div className={styles.tiers}>
      {tiers.map((tier, index) => (
        <section key={tier.id} className={styles.tier} aria-labelledby={`skills-${tier.id}`}>
          <header className={styles.tierHeader}>
            <span className={styles.tierIndex} aria-hidden="true">
              {index + 1}
            </span>
            <div>
              <h3 id={`skills-${tier.id}`} className={styles.tierTitle}>
                {tier.title}
              </h3>
              <p className={styles.tierDescription}>{tier.description}</p>
            </div>
          </header>
          <TagList tags={tier.items} label={tier.title} />
        </section>
      ))}
    </div>
  )
}
