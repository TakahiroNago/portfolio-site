import styles from './Footer.module.css'

const currentYear = new Date().getFullYear()

type Props = {
  owner: string
}

export function Footer({ owner }: Props) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          <small>
            © {currentYear} {owner}
          </small>
        </p>
      </div>
    </footer>
  )
}
