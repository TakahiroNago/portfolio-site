import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer.tsx'
import { Header } from './components/Header/Header.tsx'
import { ja } from './content/ja.ts'
import { HomePage } from './pages/HomePage.tsx'
import { ProjectPage } from './pages/ProjectPage.tsx'
import { Link } from './components/ui/Link.tsx'
import { matchProject, usePath, useScrollOnNavigate } from './router.ts'
import styles from './App.module.css'

// 英語版を追加する場合は src/content/en.ts を作成し、ここで切り替える。
const content = ja
const SITE_ORIGIN = 'https://art-full-stack.com'

function App() {
  const { labels, profile } = content
  const path = usePath()
  const projectId = matchProject(path)
  const index = projectId ? content.featuredProjects.findIndex((p) => p.id === projectId) : -1
  const project = index >= 0 ? content.featuredProjects[index] : undefined
  const next = project ? content.featuredProjects[(index + 1) % content.featuredProjects.length] : undefined
  const isHome = path === '/'

  useScrollOnNavigate(path)

  // ページごとにタイトルと正規URLを切り替える
  useEffect(() => {
    document.title = project ? `${project.name} | ${profile.name}` : content.siteTitle
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = SITE_ORIGIN + (project ? path : '/')
  }, [project, path, profile.name])

  return (
    <>
      <a className="skip-link" href="#main">
        {labels.skipToContent}
      </a>
      <Header
        name={profile.name}
        nav={content.nav}
        github={profile.github}
        navLabel={labels.mainNav}
        externalLabel={labels.externalLink}
      />
      <main id="main">
        {isHome && <HomePage content={content} />}
        {project && <ProjectPage key={project.id} project={project} next={next} labels={labels} />}
        {!isHome && !project && (
          <div className={`container ${styles.notFound}`}>
            <p>{labels.notFound}</p>
            <Link href="/">{profile.name}</Link>
          </div>
        )}
      </main>
      <Footer cta={content.cta} github={profile.github} owner={content.footer} labels={labels} />
    </>
  )
}

export default App
