// サイトに表示する文言とデータの型。
// 言語ごとに SiteContent を1つ用意する構成（現在は src/content/ja.ts のみ）。

export type ExternalLink = {
  label: string
  href: string
}

export type Screenshot = {
  src: string
  alt: string
  width: number
  height: number
}

export type FeatureGroup = {
  title: string
  items: string[]
}

export type FlowStep = {
  label: string
  detail?: string
  /** 次のステップへの接続の説明（例: "gRPC"） */
  via?: string
}

export type ArchitecturePath = {
  title: string
  description: string
  steps: FlowStep[]
}

export type Project = {
  id: string
  name: string
  tagline: string
  summary: string
  tags: string[]
  links: ExternalLink[]
  /** 実際の画面のスクリーンショットがある場合のみ指定する */
  screenshot?: Screenshot
  highlights?: string[]
  note?: string
}

export type FeaturedProject = Project & {
  featureGroups: FeatureGroup[]
  architecture: {
    title: string
    lead: string
    paths: ArchitecturePath[]
    sharedCore: string
  }
}

export type ExperienceItem = {
  title: string
  description: string
  responsibilities?: string[]
  tags: string[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type SiteContent = {
  lang: string
  nav: { id: string; label: string }[]
  profile: {
    name: string
    role: string
    intro: string[]
    portrait: Screenshot
    github: ExternalLink
  }
  sections: {
    projects: { title: string; lead: string; otherTitle: string }
    experience: { title: string; lead: string; workTitle: string; personalTitle: string }
    skills: { title: string; lead: string }
    links: { title: string; lead: string }
  }
  labels: {
    skipToContent: string
    mainNav: string
    viewProjects: string
    featured: string
    architecture: string
    sharedCore: string
    techStack: string
    responsibilities: string
    externalLink: string
  }
  featuredProject: FeaturedProject
  projects: Project[]
  experience: {
    work: ExperienceItem[]
    personal: ExperienceItem[]
  }
  skills: {
    work: SkillGroup
    personal: SkillGroup[]
  }
  footer: string
}
