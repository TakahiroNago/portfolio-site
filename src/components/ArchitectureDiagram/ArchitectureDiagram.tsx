import type { FeaturedProject, FlowStep } from '../../types.ts'
import styles from './ArchitectureDiagram.module.css'

type Props = {
  architecture: FeaturedProject['architecture']
}

function nodeClass(step: FlowStep) {
  if (step.emphasis === 'filled') return styles.nodeFilled
  if (step.emphasis === 'dashed') return styles.nodeDashed
  return styles.node
}

// 処理の流れを縦方向のステップで表す。画像ではなくHTMLで描くため、文言はデータから差し替えられる。
export function ArchitectureDiagram({ architecture }: Props) {
  return (
    <div className={styles.diagram}>
      <div className={styles.paths}>
        {architecture.paths.map((path) => (
          <div key={path.title} className={styles.path}>
            <h3 className={styles.pathTitle}>{path.title}</h3>
            <p className={styles.pathDescription}>{path.description}</p>
            <ol className={styles.steps}>
              {path.steps.map((step, i) => (
                <li key={step.label}>
                  <div className={nodeClass(step)}>
                    <b>{step.label}</b>
                    {step.detail && <span className={styles.detail}>{step.detail}</span>}
                  </div>
                  {i < path.steps.length - 1 && (
                    <p className={styles.arrow}>
                      <span aria-hidden="true">↓</span>
                      {step.via && <span className={styles.via}>{step.via}</span>}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {architecture.sharedCore && (
        <p className={styles.core}>
          <span className={styles.coreLabel}>{architecture.sharedCore.label}</span>
          <span>{architecture.sharedCore.value}</span>
        </p>
      )}
    </div>
  )
}
