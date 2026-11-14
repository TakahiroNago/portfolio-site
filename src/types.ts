// サイトに表示する文言とデータの型。
// 言語ごとに SiteContent を1つ用意する構成（現在は src/content/ja.ts のみ）。

export type ExternalLink = {
  label: string
  href: string
  /** カードなど狭い場所で使う短い表記（省略時は label） */
  short?: string
}

export type Screenshot = {
  src: string
  alt: string
  width: number
  height: number
}

/** 数値などで示せる事実（ヒーローやテスト・CIの欄で使う） */
export type Stat = {
  value: string
  label: string
}

/** 状態のバッジ。progress は作業中・レビュー中、done は公開済み・マージ済み、neutral はそれ以外 */
export type Badge = {
  label: string
  tone: 'progress' | 'done' | 'neutral'
}

export type FeatureGroup = {
  title: string
  items: string[]
  /** 見出しの下に並べる数値（テスト・CIの欄など） */
  stats?: Stat[]
}

export type FlowStep = {
  label: string
  detail?: string
  /** 次のステップへの接続の説明（例: "gRPC"） */
  via?: string
  /** 図の中で目立たせるステップ（filled: 人間の判断、dashed: 信頼しない外部） */
  emphasis?: 'filled' | 'dashed'
}

export type ArchitecturePath = {
  title: string
  description: string
  steps: FlowStep[]
}

export type StackRow = {
  label: string
  items: string[]
}

export type FeaturedProject = {
  /** URL（/projects/<id>）にも使う */
  id: string
  name: string
  /** 種別（例: "Webアプリ"） */
  category: string
  badge?: Badge
  /** カードに載せる1文の説明 */
  short: string
  /** カードに載せる見どころ（2〜4行） */
  points: string[]
  /** カードに載せる主要な技術。残りの数は tags との差で表示する */
  keyTags: string[]
  tags: string[]
  links: ExternalLink[]
  /** トップの大きなカードに載せる処理の流れ（1件目のプロジェクトのみ） */
  cardFlow?: { title: string; steps: FlowStep[] }
  /** 詳細ページ */
  tagline: string
  summary: string
  meta: { label: string; value: string }[]
  /** 開発の背景。公開している要件定義などで確認できる場合のみ記載する */
  background?: string[]
  /** 設計の中心となる判断 */
  keyDecision?: string
  screenshot?: Screenshot
  featureGroups: FeatureGroup[]
  architecture: {
    title: string
    lead: string
    paths: ArchitecturePath[]
    /** 複数の経路で共通して使う部分（例: 変換コア、ドメインロジック） */
    sharedCore?: { label: string; value: string }
  }
  stack: StackRow[]
}

export type OtherProject = {
  id: string
  name: string
  short: string
  links: ExternalLink[]
}

/** 実務の案件（カードで示すもの） */
export type WorkHighlight = {
  title: string
  /** 規模・役割（例: "4名｜設計〜実装を単独で担当"） */
  scale: string
  /** 役割を強調する場合（リーダーなど） */
  emphasizeScale?: boolean
  period?: string
  description: string
  tags: string[]
}

/** 所属ごとのまとまり。所属は業種・形態で書き、会社名は載せない */
export type WorkGroup = {
  org: string
  period: string
  notes: string[]
  highlights: WorkHighlight[]
  /** 表で示す案件 */
  others?: { period: string; title: string }[]
}

export type OssItem = {
  /** 例: "tauri-apps/tauri" */
  repository: string
  /** 例: "PR #16506" */
  ref: string
  summary: string
  href: string
  badge: Badge
}

/** スキルの項目。work は実務で使用（個人開発でも使用したものを含む）、それ以外は個人開発・学習で使用 */
export type SkillItem = {
  name: string
  work?: boolean
}

export type SkillCategory = {
  title: string
  items: SkillItem[]
}

export type SectionHeading = {
  eyebrow: string
  title: string
  lead?: string
}

export type SiteContent = {
  lang: string
  siteTitle: string
  nav: { id: string; label: string }[]
  profile: {
    name: string
    eyebrow: string
    lead: string[]
    sub: string
    portrait: Screenshot
    github: ExternalLink
    stats: Stat[]
  }
  sections: {
    projects: SectionHeading & { otherTitle: string }
    experience: SectionHeading
    oss: SectionHeading
    skills: SectionHeading & { legendWork: string; legendPersonal: string }
  }
  labels: {
    skipToContent: string
    mainNav: string
    viewProjects: string
    viewExperience: string
    featured: string
    details: string
    detailsLong: string
    backToList: string
    backToListShort: string
    next: string
    toc: string
    overview: string
    background: string
    keyDecision: string
    architecture: string
    techStack: string
    screenshot: string
    notFound: string
    externalLink: string
    toTop: string
  }
  featuredProjects: FeaturedProject[]
  otherProjects: OtherProject[]
  experience: WorkGroup[]
  oss: OssItem[]
  skills: SkillCategory[]
  cta: { title: string; sub: string; button: string }
  footer: string
}
