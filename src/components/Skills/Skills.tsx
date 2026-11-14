import type { SkillCategory } from '../../types.ts'
import styles from './Skills.module.css'

type Props = {
  categories: SkillCategory[]
  legendWork: string
  legendPersonal: string
}

/** 凡例。見出しの右側に置く */
export function SkillsLegend({ legendWork, legendPersonal }: Omit<Props, 'categories'>) {
  return (
    <ul className={styles.legend}>
      <li>
        <span className={styles.swatchWork} aria-hidden="true" />
        {legendWork}
      </li>
      <li>
        <span className={styles.swatchPersonal} aria-hidden="true" />
        {legendPersonal}
      </li>
    </ul>
  )
}

// 色だけに頼らないよう、実務で使用した項目には読み上げ用の補足を付ける
export function Skills({ categories, legendWork, legendPersonal }: Props) {
  return (
    <dl className={styles.rows}>
      {categories.map((category) => (
        <div key={category.title} className={styles.row}>
          <dt className={styles.title}>{category.title}</dt>
          <dd className={styles.items}>
            <ul className={styles.chips}>
              {category.items.map((item) => (
                <li key={item.name} className={item.work ? styles.work : styles.personal}>
                  {item.name}
                  <span className="visually-hidden">（{item.work ? legendWork : legendPersonal}）</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  )
}
