import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
  /** 外部リンクであることをスクリーンリーダーに伝える補足文 */
  externalLabel: string
}

/** 新しいタブで開く外部リンク。末尾の ↗ は装飾として読み上げない */
export function ExternalAnchor({ href, children, className, externalLabel }: Props) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="visually-hidden">（{externalLabel}）</span>
    </a>
  )
}
