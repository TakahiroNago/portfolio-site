import type { WorkGroup } from '../../types.ts'
import styles from './Experience.module.css'

type Props = {
  groups: WorkGroup[]
}

export function Experience({ groups }: Props) {
  return (
    <div className={styles.groups}>
      {groups.map((group) => (
        <div key={group.org} className={styles.group}>
          <div className={styles.org}>
            <h3 className={styles.orgName}>{group.org}</h3>
            <p>{group.period}</p>
            {group.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>

          <div className={styles.items}>
            {group.highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardHead}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={item.emphasizeScale ? 'badge badge-solid' : styles.scale}>{item.scale}</span>
                </div>
                {item.period && <p className={styles.period}>{item.period}</p>}
                <p className={styles.description}>{item.description}</p>
                <p className={styles.tags}>{item.tags.join(' · ')}</p>
              </article>
            ))}

            {group.others && (
              <table className={styles.table}>
                <thead className="visually-hidden">
                  <tr>
                    <th scope="col">期間</th>
                    <th scope="col">案件</th>
                  </tr>
                </thead>
                <tbody>
                  {group.others.map((row) => (
                    <tr key={row.title}>
                      <td className={styles.rowPeriod}>{row.period}</td>
                      <td>{row.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
