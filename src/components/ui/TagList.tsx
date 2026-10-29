import styles from './TagList.module.css'

type Props = {
  tags: string[]
  label: string
}

export function TagList({ tags, label }: Props) {
  return (
    <ul className={styles.list} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  )
}
