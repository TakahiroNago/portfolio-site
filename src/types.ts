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
    /** 複数の経路で共通して使う部分（例: 変換コア、ドメインロジック） */
    sharedCore?: { label: string; value: string }
  }
}

/** 実務案件の期間・所属・規模・役割。個人開発の項目では省略する */
export type ExperienceMeta = {
  period: string
  company?: string
  team?: string
  role?: string
}

export type ExperienceItem = {
  title: string
  description: string
  meta?: ExperienceMeta
  responsibilities?: string[]
  /** 数値などで示せる成果がある場合のみ記載する */
  outcome?: string
  tags: string[]
}

/** スキルの習熟区分（①自力で設計・実装できる ②実務で使用した ③個人開発・学習で使用した） */
export type SkillTier = {
  id: string
  title: string
  description: string
  items: string[]
}

export type OssItem = {
  /** 例: "emilk/egui" */
  repository: string
  /** PR か Issue か */
  kind: 'PR' | 'Issue'
  title: string
  description: string
  href: string
  status: string
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
    oss: { title: string; lead: string }
    skills: { title: string; lead: string }
    links: { title: string; lead: string }
  }
  labels: {
    skipToContent: string
    mainNav: string
    viewProjects: string
    featured: string
    architecture: string
    techStack: string
    responsibilities: string
    outcome: string
    period: string
    company: string
    team: string
    role: string
    status: string
    externalLink: string
  }
  featuredProjects: FeaturedProject[]
  projects: Project[]
  experience: {
    work: ExperienceItem[]
    personal: ExperienceItem[]
  }
  oss: OssItem[]
  skills: {
    tiers: SkillTier[]
  }
  footer: string
}
