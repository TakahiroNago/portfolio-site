import type { ExperienceItem, SiteContent } from '../../types.ts'
import { TagList } from '../ui/TagList.tsx'
import styles from './Experience.module.css'

type Props = {
  work: ExperienceItem[]
  personal: ExperienceItem[]
  workTitle: string
  personalTitle: string
  labels: Pick<SiteContent['labels'], 'responsibilities' | 'techStack' | 'outcome' | 'period' | 'company' | 'team' | 'role'>
}

export function Experience({ work, personal, workTitle, personalTitle, labels }: Props) {
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
                {item.meta && (
                  <dl className={styles.meta}>
                    <div className={styles.metaRow}>
                      <dt>{labels.period}</dt>
                      <dd>{item.meta.period}</dd>
                    </div>
                    {item.meta.company && (
                      <div className={styles.metaRow}>
                        <dt>{labels.company}</dt>
                        <dd>{item.meta.company}</dd>
                      </div>
                    )}
                    {item.meta.team && (
                      <div className={styles.metaRow}>
                        <dt>{labels.team}</dt>
                        <dd>{item.meta.team}</dd>
                      </div>
                    )}
                    {item.meta.role && (
                      <div className={styles.metaRow}>
                        <dt>{labels.role}</dt>
                        <dd>{item.meta.role}</dd>
                      </div>
                    )}
                  </dl>
                )}
                <p className={styles.description}>{item.description}</p>
                {item.responsibilities && (
                  <dl className={styles.responsibilities}>
                    <dt>{labels.responsibilities}</dt>
                    <dd>{item.responsibilities.join(' / ')}</dd>
                  </dl>
                )}
                {item.outcome && (
                  <dl className={styles.outcome}>
                    <dt>{labels.outcome}</dt>
                    <dd>{item.outcome}</dd>
                  </dl>
                )}
                <TagList tags={item.tags} label={labels.techStack} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
