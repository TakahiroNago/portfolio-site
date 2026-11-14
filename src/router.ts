import { useEffect, useSyncExternalStore } from 'react'

// トップページ（/）とプロジェクトの詳細ページ（/projects/<id>）だけの小さなルーター。
// Cloudflare Pages は 404.html が無いとき、存在しないパスにも index.html を返すため、直接アクセスでも表示できる。

const listeners = new Set<() => void>()

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener('popstate', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('popstate', listener)
  }
}

function getPath() {
  return window.location.pathname
}

export function usePath() {
  return useSyncExternalStore(subscribe, getPath, () => '/')
}

export function navigate(href: string) {
  window.history.pushState(null, '', href)
  listeners.forEach((listener) => listener())
}

export function projectPath(id: string) {
  return `/projects/${id}`
}

/** パスに対応するプロジェクトの id。トップページなら null */
export function matchProject(path: string) {
  const match = /^\/projects\/([\w-]+)\/?$/.exec(path)
  return match ? match[1] : undefined
}

/**
 * ページを切り替えたあと、ハッシュがあればその見出しへ、無ければ先頭へ移動する。
 * html の scroll-behavior: smooth のままだと前のページの位置から長くスクロールするため、即座に移動する。
 */
export function useScrollOnNavigate(path: string) {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = id ? document.getElementById(id) : null
    if (target) {
      target.scrollIntoView({ behavior: 'instant' })
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [path])
}
