import type { SkillGroup } from '../../types.ts'
import { TagList } from '../ui/TagList.tsx'
import styles from './Skills.module.css'

type Props = {
  work: SkillGroup
  personal: SkillGroup[]
  personalTitle: string
}

export function Skills({ work, personal, personalTitle }: Props) {
  return (
    <div className={styles.layout}>
      <section className={styles.block} aria-labelledby="skills-work">
        <h3 id="skills-work" className={styles.blockTitle}>
          {work.title}
        </h3>
        <TagList tags={work.items} label={work.title} />
      </section>

      <section className={styles.block} aria-labelledby="skills-personal">
        <h3 id="skills-personal" className={styles.blockTitle}>
          {personalTitle}
        </h3>
        <dl className={styles.groups}>
          {personal.map((group) => (
            <div key={group.title} className={styles.group}>
              <dt className={styles.groupTitle}>{group.title}</dt>
              <dd className={styles.groupItems}>
                <TagList tags={group.items} label={group.title} />
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  )
}
