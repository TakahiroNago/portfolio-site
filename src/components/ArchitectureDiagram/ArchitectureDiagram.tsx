import type { FeaturedProject, SiteContent } from '../../types.ts'
import styles from './ArchitectureDiagram.module.css'

type Props = {
  architecture: FeaturedProject['architecture']
  labels: SiteContent['labels']
}

// 処理の流れを縦方向のステップで表す。画像ではなくHTMLで描くため、文言はデータから差し替えられる。
export function ArchitectureDiagram({ architecture, labels }: Props) {
  return (
    <section className={styles.diagram} aria-labelledby="architecture-title">
      <div className={styles.header}>
        <p className={styles.eyebrow}>{labels.architecture}</p>
        <h4 id="architecture-title" className={styles.title}>
          {architecture.title}
        </h4>
        <p className={styles.lead}>{architecture.lead}</p>
      </div>

      <div className={styles.paths}>
        {architecture.paths.map((path) => (
          <div key={path.title} className={styles.path}>
            <h5 className={styles.pathTitle}>{path.title}</h5>
            <p className={styles.pathDescription}>{path.description}</p>
            <ol className={styles.steps}>
              {path.steps.map((step, i) => (
                <li key={step.label} className={styles.step}>
                  <div className={styles.node}>
                    <span className={styles.nodeLabel}>{step.label}</span>
                    {step.detail && <span className={styles.nodeDetail}>{step.detail}</span>}
                  </div>
                  {i < path.steps.length - 1 && (
                    <div className={styles.connector} aria-hidden="true">
                      {step.via && <span className={styles.via}>{step.via}</span>}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <p className={styles.core}>
        <span className={styles.coreLabel}>{labels.sharedCore}</span>
        <span>{architecture.sharedCore}</span>
      </p>
    </section>
  )
}
