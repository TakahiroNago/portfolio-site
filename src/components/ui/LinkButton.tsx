import styles from './LinkButton.module.css'

type Props = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
  /** 外部リンクであることをスクリーンリーダーに伝える補足文 */
  externalLabel: string
}

export function LinkButton({ href, label, variant = 'secondary', externalLabel }: Props) {
  return (
    <a
      className={variant === 'primary' ? styles.primary : styles.secondary}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
        <path d="M5 3h8v8M13 3 4 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="visually-hidden">（{externalLabel}）</span>
    </a>
  )
}
