import type { SiteContent } from '../types.ts'

// 掲載内容はすべてこのファイルで管理する。
// 公開リポジトリのREADME・設定ファイルと、本人から提供された情報で確認できる内容のみを記載する。

export const ja: SiteContent = {
  lang: 'ja',
  nav: [
    { id: 'projects', label: 'プロジェクト' },
    { id: 'experience', label: '経歴' },
    { id: 'skills', label: 'スキル' },
    { id: 'links', label: 'リンク' },
  ],
  profile: {
    name: '名合 貴洋',
    role: 'ソフトウェアエンジニア',
    intro: [
      '実務では、C/C++による産業機器の制御ソフトウェアや、画像処理・外観検査システムの開発に携わってきました。Tauri（React, Rust）を用いた外観検査装置向けアプリケーションでは、制御プログラムとUIの両方を担当しています。',
      '個人開発では、React、Go、Laravel（PHP）を用いてWebアプリケーションやAPIを開発しています。C++の画像処理エンジンをWebアプリ・API・クラウド環境と組み合わせ、設計から実装、デプロイ、運用まで一通り取り組んでいます。',
    ],
    portrait: {
      src: '/images/face.webp',
      alt: '名合 貴洋のポートレートイラスト',
      width: 1254,
      height: 1254,
    },
    github: { label: 'GitHub', href: 'https://github.com/TakahiroNago' },
  },
  sections: {
    projects: {
      title: 'プロジェクト',
      lead: '個人開発で制作し、公開しているWebアプリケーションです。',
      otherTitle: 'その他のプロジェクト',
    },
    experience: {
      title: '経歴',
      lead: '実務での経験と、個人開発で取り組んでいる内容を分けて記載しています。',
      workTitle: '実務経験',
      personalTitle: '個人開発',
    },
    skills: {
      title: 'スキル',
      lead: '実務と個人開発のそれぞれで、実際に使用した技術です。',
    },
    links: {
      title: 'リンク',
      lead: '各プロジェクトのソースコードはGitHubで公開しています。',
    },
  },
  labels: {
    skipToContent: '本文へスキップ',
    mainNav: 'ページ内ナビゲーション',
    viewProjects: 'プロジェクトを見る',
    featured: '注目のプロジェクト',
    architecture: 'ARCHITECTURE',
    sharedCore: '共通の変換コア',
    techStack: '使用技術',
    responsibilities: '担当工程',
    externalLink: '新しいタブで開きます',
  },
  featuredProject: {
    id: 'svg-app',
    name: 'SVG App',
    tagline: 'ラスター画像をSVGに変換するWebアプリケーション',
    summary:
      'PNG・JPEG画像を指定した色数に減色し、色の領域と輪郭を抽出してSVG形式のベクター画像に変換します。C++20とOpenCVで実装した変換エンジンを、ブラウザ内のWebAssemblyと、Go REST APIからgRPC経由で呼び出すサーバー側の、2つの経路から利用できる構成にしています。',
    tags: [
      'C++20',
      'OpenCV',
      'WebAssembly',
      'React',
      'TypeScript',
      'Go',
      'gRPC',
      'Protocol Buffers',
      'Docker Compose',
      'AWS EC2',
      'Nginx',
      'GitHub Actions',
      'CloudWatch',
      'SNS',
    ],
    links: [
      { label: 'デモ（ブラウザ内変換）', href: 'https://svg.art-full-stack.com/' },
      { label: 'AWS版（サーバー側変換）', href: 'https://aws-svg.art-full-stack.com/' },
      { label: 'GitHub（Webフロントエンド）', href: 'https://github.com/TakahiroNago/svg-web' },
      { label: 'GitHub（C++エンジン・API）', href: 'https://github.com/TakahiroNago/svg-app' },
    ],
    featureGroups: [
      {
        title: '画像変換エンジン',
        items: [
          'C++20 / OpenCVで実装し、Lab色空間でのk-meansにより減色',
          '色領域の輪郭を抽出してSVGを出力（穴のある図形にも対応）',
          '塗りつぶしモードと境界線のみのモード、色数の指定に対応',
          '変換コアをCLIから分離し、WebAssemblyとgRPCサーバーで共通利用',
        ],
      },
      {
        title: 'フロントエンド',
        items: [
          'React / TypeScript / Viteで実装',
          'Web Worker上で変換処理を実行し、UIの処理と分離',
          'ブラウザ内変換では、画像をサーバーへ送信せずに処理',
          'ビルド時の設定で変換方式を切り替え（Cloudflare Pages版はブラウザ内変換、AWS版はサーバー側変換）',
          'サーバー側変換では画像の送信を画面上で明示し、APIのエラーをステータスごとに日本語で表示',
          '入力ファイルサイズ・画像サイズの上限を設定',
        ],
      },
      {
        title: 'API・バックエンド',
        items: [
          'Go REST API（POST /api/v1/convert）で画像のデコードと入力制限を担当',
          'Protocol Buffersでサービスを定義し、gRPCでC++エンジンを呼び出し',
          'WebAssembly版と同じ入力形式（非乗算RGBA）で画像を受け渡し',
        ],
      },
      {
        title: 'インフラ・運用',
        items: [
          'AWS EC2上でDocker Composeによりサービスを管理',
          'ホスト側NginxでHTTPSを終端し、フロントエンドのNginxから /api/ をGo APIへ転送',
          'GitHub ActionsからAWS Systems Manager経由で自動デプロイし、フロントエンドとAPIのヘルスチェック、公開中のビルドの変換方式を確認',
          'CloudWatchでEC2のステータスチェックを監視し、SNSでメール通知',
        ],
      },
      {
        title: 'テスト',
        items: [
          'GitHub Actionsでproto のlint、Goの単体テスト、C++の単体テスト、Docker Composeによる統合テストを実行',
          'WebAssembly版とgRPC版の変換結果が一致することを確認するテスト（ローカル実行）',
          'Vitestで、変換方式の設定、APIエラー時の表示、各変換方式の画面表示をテスト',
        ],
      },
    ],
    architecture: {
      title: '2つの変換経路',
      lead: '同じC++の変換コアを、ブラウザ内とサーバー側の両方から利用しています。',
      paths: [
        {
          title: 'ブラウザ内変換',
          description: 'Cloudflare Pages版（デモ）。画像はサーバーへ送信されません。',
          steps: [
            { label: 'React / TypeScript', detail: '画像の読み込み・デコード' },
            { label: 'Web Worker', detail: 'UIと変換処理を分離' },
            { label: 'WebAssembly', detail: 'C++の変換コアをビルド' },
            { label: 'C++ / OpenCV', detail: '減色・輪郭抽出' },
            { label: 'SVG', detail: 'プレビュー・ダウンロード' },
          ],
        },
        {
          title: 'サーバー側変換',
          description: 'AWS版（EC2）。画像はサーバーへ送信されます。',
          steps: [
            { label: 'ブラウザ', via: 'HTTPS' },
            { label: 'ホスト側Nginx', detail: 'EC2 / HTTPS終端' },
            { label: 'フロントエンドNginx', detail: 'Docker / 静的ファイル配信', via: '/api/*' },
            { label: 'Go REST API', detail: 'デコード・入力制限', via: 'gRPC' },
            { label: 'C++ gRPCサーバー', detail: 'OpenCVによる変換' },
          ],
        },
      ],
      sharedCore: 'svg-converter ライブラリ（C++20 / OpenCV）',
    },
  },
  projects: [
    {
      id: 'paintmix',
      name: 'PaintMix',
      tagline: '絵の具の混色をシミュレーションするWebアプリケーション',
      summary:
        '複数の絵の具の色を混ぜ合わせたときの色の変化を、ブラウザ上で確認できます。2色の混合比や白を混ぜる量を調整でき、さらに色を追加して混ぜることもできます。',
      highlights: [
        'React / TypeScriptによるUI設計と型安全な実装',
        '日本語・英語のUIに対応',
        '混色処理と画面のテストを実装',
      ],
      note: '混色処理には外部ライブラリのMixboxを使用しています。',
      tags: ['React', 'TypeScript', 'Vite', 'Mixbox'],
      links: [
        { label: 'デモ', href: 'https://paint.art-full-stack.com/' },
        { label: 'GitHub', href: 'https://github.com/TakahiroNago/paint-mix-app' },
      ],
      screenshot: {
        src: '/images/projects/paintmix.png',
        alt: 'PaintMixの画面。2色の絵の具を選び、混合比と白を混ぜる量のスライダーで混色結果を確認できる。',
        width: 1000,
        height: 640,
      },
    },
    {
      id: 'zen',
      name: 'ZEN — 心の庵',
      tagline: '禅の考え方を参考にしたAI相談アプリケーション',
      summary:
        'AIとの対話を通じて、日常の悩みや迷いを言葉にし、禅の考え方を参考にしながら自分自身を見つめ直すためのWebアプリケーションです。企画・設計・実装から、テスト、本番環境へのデプロイ・運用まで一貫して開発しています。',
      highlights: [
        'OpenAI APIとの連携と、応答方針を制御するプロンプト設計',
        '過去の相談のトピック分類・要約を活用した対話',
        '個人情報と思われる記述の検出と、伏せ字の提案',
        'Stripe決済を導入し、外部API連携・Webhook・契約状態の管理を設計・実装',
        'Googleログイン、日本語・英語のUI',
        'GitHub Actionsによるテスト・ビルド・VPSへの自動デプロイ',
      ],
      tags: ['PHP', 'Laravel', 'OpenAI API', 'MySQL', 'Tailwind CSS', 'Stripe', 'Nginx', 'GitHub Actions'],
      links: [
        { label: 'デモ', href: 'https://zen.art-full-stack.com/ja' },
        { label: 'GitHub', href: 'https://github.com/TakahiroNago/zen-app' },
      ],
      screenshot: {
        src: '/images/projects/zen.png',
        alt: 'ZENのトップページ。「ゆっくりと心を見つめて」という見出しと、AI禅師に相談するボタンが表示されている。',
        width: 1440,
        height: 900,
      },
    },
  ],
  experience: {
    work: [
      {
        title: '産業機器の制御ソフトウェア開発',
        description:
          'C/C++による産業機器の制御ソフトウェアを開発しました。Rocky Linux 9のOSインストールからDockerの導入まで一貫して開発環境の構築を行い、制御システム（C++）とUI（Python）をそれぞれ別のコンテナで管理していました。',
        tags: ['C', 'C++', 'Python', 'Rocky Linux 9', 'Docker / Docker Compose'],
      },
      {
        title: '画像処理・外観検査システムの開発',
        description: 'C++による画像処理と外観検査システムを開発しました。',
        tags: ['C++', '画像処理'],
      },
      {
        title: '外観検査装置向けデスクトップアプリケーション開発',
        description:
          'Tauriを用いて、外観検査装置向けのソフトウェアを開発しました。制御プログラムとUIの両方を担当しました。',
        responsibilities: ['課題の把握', '機能検討', '設計', '実装', 'テスト'],
        tags: ['Tauri', 'Rust', 'React', 'TypeScript', 'Vite', 'Vue.js'],
      },
    ],
    personal: [
      {
        title: 'Webアプリケーション・API開発',
        description:
          'React / TypeScriptによるフロントエンド、Go REST APIとgRPCによるバックエンド、Laravelによるサーバーサイドアプリケーションを開発しています。',
        tags: ['React', 'TypeScript', 'Go', 'gRPC', 'Protocol Buffers', 'Laravel'],
      },
      {
        title: 'C++エンジンのWeb活用',
        description:
          'C++ / OpenCVで実装した画像変換エンジンを、WebAssemblyとgRPCサーバーの両方から利用できるようにしています。',
        tags: ['C++20', 'OpenCV', 'WebAssembly'],
      },
      {
        title: 'インフラ・デプロイ・運用',
        description:
          'Docker Composeによる環境構築、AWS EC2・VPS・Cloudflare Pagesへのデプロイ、GitHub ActionsによるCI/CD、CloudWatch・SNSによる監視・通知に取り組んでいます。',
        tags: ['Docker', 'AWS', 'Nginx', 'GitHub Actions', 'Cloudflare Pages'],
      },
    ],
  },
  skills: {
    work: {
      title: '実務で使用',
      items: ['C', 'C++', 'Python', '画像処理', 'Tauri', 'Rust','React', 'TypeScript', 'Vue.js', 'Vite', 'Linux（Rocky Linux 9）', 'Docker / Docker Compose'],
    },
    personal: [
      { title: '言語', items: ['C++20', 'TypeScript', 'Go', 'PHP'] },
      { title: 'フロントエンド', items: ['React', 'Vite', 'WebAssembly', 'Web Worker', 'Tailwind CSS'] },
      { title: 'バックエンド', items: ['Go REST API', 'gRPC', 'Protocol Buffers', 'Laravel', 'MySQL', 'OpenAI API'] },
      { title: '画像処理', items: ['OpenCV'] },
      {
        title: 'インフラ・運用',
        items: [
          'Docker / Docker Compose',
          'AWS EC2',
          'AWS Systems Manager',
          'CloudWatch',
          'SNS',
          'Nginx',
          'Cloudflare Pages',
          'GitHub Actions',
        ],
      },
    ],
  },
  footer: '名合 貴洋',
}
