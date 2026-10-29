import type { ExperienceItem } from '../../types.ts'
import { TagList } from '../ui/TagList.tsx'
import styles from './Experience.module.css'

type Props = {
  work: ExperienceItem[]
  personal: ExperienceItem[]
  workTitle: string
  personalTitle: string
  responsibilitiesLabel: string
  techStackLabel: string
}

export function Experience({ work, personal, workTitle, personalTitle, responsibilitiesLabel, techStackLabel }: Props) {
  const groups = [
    { id: 'work', title: workTitle, items: work },
    { id: 'personal', title: personalTitle, items: personal },
  ]

  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <section key={group.id} className={styles.group} aria-labelledby={`experience-${group.id}`}>
          <h3 id={`experience-${group.id}`} className={styles.groupTitle} data-kind={group.id}>
            {group.title}
          </h3>
          <ul className={styles.items}>
            {group.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.description}>{item.description}</p>
                {item.responsibilities && (
                  <dl className={styles.responsibilities}>
                    <dt>{responsibilitiesLabel}</dt>
                    <dd>{item.responsibilities.join(' / ')}</dd>
                  </dl>
                )}
                <TagList tags={item.tags} label={techStackLabel} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
