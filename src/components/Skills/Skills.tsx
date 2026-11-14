import type { SkillTier } from '../../types.ts'
import { TagList } from '../ui/TagList.tsx'
import styles from './Skills.module.css'

type Props = {
  tiers: SkillTier[]
}

// 技術は「実務で使用した」「個人開発・学習で使用した」の2区分で表示する（番号は職務経歴書の①②に対応）。
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
