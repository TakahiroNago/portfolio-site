import type { AnchorHTMLAttributes, MouseEvent } from 'react'
import { navigate } from '../../router.ts'

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

/** サイト内のページ間リンク。同じページ内のハッシュリンクはブラウザに任せる */
export function Link({ href, onClick, ...rest }: LinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin) return
    if (url.pathname === window.location.pathname && url.hash) return
    event.preventDefault()
    navigate(url.pathname + url.search + url.hash)
  }

  return <a href={href} onClick={handleClick} {...rest} />
}
