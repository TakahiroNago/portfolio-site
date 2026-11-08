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
      '個人開発では、React、Next.js、Go、Laravel（PHP）を用いてWebアプリケーションやAPIを開発しています。C++の画像処理エンジンをWebアプリ・API・クラウド環境と組み合わせ、設計から実装、デプロイ、運用まで一通り取り組んでいます。',
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
    techStack: '使用技術',
    responsibilities: '担当工程',
    externalLink: '新しいタブで開きます',
  },
  featuredProjects: [
    {
      id: 'secureflow',
      name: 'SecureFlow AI',
      tagline: 'AIが業務を分析して計画を提案し、人間の承認を経て実行するセキュリティ管理プラットフォーム',
      summary:
        '業務内容の依頼文からAIがワークフロー（実行計画）を提案し、入力と出力の検査、人間による承認、実行前の再検証、改ざんを検出できる監査ログを経て実行する、組織向けのWebアプリケーションです。AIにはツール実行・DB・外部通信の権限を与えず、提案のみを行わせる設計にしています。Laravel・PostgreSQL・Redis・Reactで実装し、要件定義・脅威モデル・設計書・テスト戦略を文書化しながら、工程ごとにテスト・静的解析・セキュリティスキャンをCIで通して開発を進めています。現在は開発環境で動作し、AIは既定でモック、実行は模擬のみです（公開デモはありません）。',
      tags: [
        'PHP',
        'Laravel',
        'Laravel Sanctum',
        'PostgreSQL',
        'Redis',
        'React',
        'TypeScript',
        'Vite',
        'Tailwind CSS',
        'TanStack Query',
        'Zod',
        'Docker Compose',
        'Nginx',
        'Pest',
        'Larastan',
        'Vitest',
        'Playwright',
        'Semgrep',
        'Trivy',
        'gitleaks',
        'GitHub Actions',
        'OpenAI API',
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/TakahiroNago/secureflow-ai' }],
      screenshot: {
        src: '/images/projects/secureflow.png',
        alt: 'SecureFlow AIの承認画面。申請者、リビジョン、ポリシーのバージョン、承認ハッシュ、検査の結果に続き、提案されたタスクの処理内容・使用するAI機能・対象データ・必要な権限・実行による影響が表示され、コメント欄と承認のボタンがある。',
        width: 1440,
        height: 930,
      },
      featureGroups: [
        {
          title: '安全設計の原則',
          items: [
            'AIは提案のみを行い、ツール実行・DB・外部通信の権限を持たない（最終防御層）',
            'AIの入出力は常に未信頼データとして扱い、出力はJSONスキーマ・操作の許可リスト・機密情報・HTMLの検証を通す',
            '禁止操作の実行ハンドラをコード上に存在させない',
            '認可はすべてのAPIで組織・ユーザー・ロールに基づいて行い、組織をまたぐデータの参照を防ぐ',
          ],
        },
        {
          title: '入力の検査',
          items: [
            '個人情報はマスキングして続行し、認証・秘密情報（APIキーなど）は処理を停止',
            'プロンプトインジェクションの検出（High / Critical は停止、Medium は警告、Low は記録）と、検出が完全ではないことの明示',
            '正規化（Unicode NFKC、ゼロ幅文字の除去など）を行いつつ、原文の該当箇所を画面で示せる対応表を保持',
            '送信前の確認で、マスク後の文面を利用者が確認できる',
          ],
        },
        {
          title: '承認と実行',
          items: [
            '提案された計画は、実行する処理・使用するAI機能・対象データ・必要な権限・実行による影響を人間が確認してから承認',
            '承認は計画のSHA-256ハッシュに紐付け、自己承認は禁止。承認後の編集は再承認が必要',
            '実行前に承認ハッシュとポリシーを再検証し、Idempotency-Keyで二重実行を防止',
            '実行は模擬のみで、外部への操作は行わない',
          ],
        },
        {
          title: '監査ログ',
          items: [
            'ログイン、分析、編集、承認、実行などの操作を組織ごとのハッシュチェーンで記録し、改ざんを検出',
            'DB関数からのみ追記でき、更新・削除はトリガーで禁止。画面とコマンドから検証できる',
            'DBロールを所有者（マイグレーション）・アプリ（DMLのみ）・テストに分離',
          ],
        },
        {
          title: 'テスト・CI',
          items: [
            'Pest（セキュリティテストを独立したグループに分離）、Larastan（レベル8）、Pint、Vitest、ESLint、カバレッジの目標',
            'PlaywrightによるE2Eテストを、ビルド済みの画面に対して実ブラウザ3種（Chromium / Firefox / WebKit）で実行',
            'アプリ内のセキュリティ自己診断（26ケース）を管理画面から実行でき、結果をダッシュボードに表示',
            'GitHub Actionsの7つのジョブ（秘密情報スキャン、バックエンド、フロントエンド、全サービス起動、E2E、セキュリティテスト、Semgrep / Trivy）をPull Requestごとに実行し、すべて通過したものだけをmainにマージ',
            'Redis・PostgreSQL・workerの実際の障害を再現する検証スクリプトと、変異試験によるテストの有効性の確認',
          ],
        },
        {
          title: '開発の進め方',
          items: [
            '要件定義・脅威モデル・セキュリティ設計・DB設計・API設計・テスト戦略を文書化し、工程ごとに更新',
            'AIコーディングエージェント（Claude Code）を活用し、変更してはならない安全原則を明文化したうえで、各工程の設計判断・承認・レビューを自分で行う進め方',
            '工程ごとにブランチとPull Requestを分け、CIの全チェックを通してからマージ',
          ],
        },
      ],
      architecture: {
        title: '提案から実行までの経路',
        lead: 'AIの提案は検査を通ってから保存され、人間の承認を経て、実行の直前にもう一度検証されます。すべての操作が監査ログに残ります。',
        paths: [
          {
            title: '分析（AIの提案）',
            description: 'AIに渡るのはマスク済みの入力だけで、AIからの出力は検証に通ったものだけが保存されます。',
            steps: [
              { label: 'ブラウザ', detail: 'React SPA', via: '同一オリジン / Cookie セッション' },
              { label: 'Laravel API', detail: 'Nginx経由。認証・CSRF・認可' },
              { label: '入力検査', detail: 'マスキング・秘密情報・インジェクション検出' },
              { label: 'AIプロバイダ', detail: '提案のみ（既定はモック）', via: 'worker（キュー）' },
              { label: '出力検証', detail: 'スキーマ・許可リスト・機密情報・HTML除去' },
              { label: 'PostgreSQL', detail: 'ワークフローとして保存' },
            ],
          },
          {
            title: '承認と実行',
            description: '承認した内容と実行する内容が同じであることを、ハッシュで保証します。',
            steps: [
              { label: '申請者', detail: '計画を確認して承認を依頼' },
              { label: '管理者', detail: '承認画面で内容を確認（自己承認は不可）' },
              { label: '承認', detail: '計画のSHA-256ハッシュに紐付け' },
              { label: '実行前の再検証', detail: 'ハッシュ・ポリシー・二重実行の確認' },
              { label: '模擬実行', detail: '外部への操作は行わない' },
              { label: '監査ログ', detail: 'ハッシュチェーンで記録' },
            ],
          },
        ],
        sharedCore: { label: '共通の記録', value: '監査ログ（組織ごとのハッシュチェーン。DB関数からのみ追記、更新・削除はトリガーで禁止）' },
      },
    },
    {
      id: 'projectflow',
      name: 'ProjectFlow',
      tagline: '個人開発者・小規模チーム向けのプロジェクト管理Webアプリケーション',
      summary:
        '個人開発者・小規模チーム（2〜10人）向けのプロジェクト管理Webアプリケーションです。プロジェクト単位でタスクを管理し、進捗・優先度・期限を把握できます。Next.js（App Router）とPostgreSQLで実装し、認証・権限管理・ユーザー間のデータ分離に加え、単体・統合・E2Eテスト、承認付きのリリース、本番DBの自動バックアップの仕組みまで整えています。',
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'shadcn/ui',
        'PostgreSQL',
        'Prisma',
        'Better Auth',
        'Zod',
        'React Hook Form',
        'dnd-kit',
        'Vitest',
        'Playwright',
        'GitHub Actions',
        'Vercel',
        'Neon',
        'Resend',
        'Cloudflare R2',
      ],
      links: [
        { label: 'デモ（登録せずに試せます）', href: 'https://projectflow.art-full-stack.com/login' },
        { label: 'GitHub', href: 'https://github.com/TakahiroNago/project-management-app' },
      ],
      screenshot: {
        src: '/images/projects/projectflow.png',
        alt: 'ProjectFlowのカンバンボード画面。未着手・進行中・完了の3列にタスクが並び、各タスクに優先度・担当者・期限（期限切れの警告を含む）が表示されている。',
        width: 1440,
        height: 900,
      },
      featureGroups: [
        {
          title: '主な機能',
          items: [
            'プロジェクトの作成・編集・削除、名前検索・ステータス絞り込み・並べ替え・ページネーションと、進捗率の表示',
            'ダッシュボード（プロジェクト数、未完了 / 期限切れタスク数、直近のタスク、プロジェクトごとの進捗率）',
            'カンバンボード（未着手 / 進行中 / 完了）のドラッグ＆ドロップによる列の移動・並べ替え（マウス・タッチ・キーボードに対応）',
            'タスクのステータス・優先度・担当者・開始日・期限の管理と、期限切れ・期限間近の表示',
            'メンバー管理（登録済みユーザーをメールアドレスで追加・削除。削除時は担当タスクを自動で未割り当てに）',
            'タスクへのコメント（自分のコメントのみ編集・削除可）と更新履歴（誰が・いつ・何を変更したか）',
            'ダークモード、スマートフォン向けのレスポンシブ対応（サイドバーのドロワー表示、カンバンの長押しドラッグ）',
            '登録せずに試せるデモアカウント（サンプルデータ入り、1〜2日後に自動で削除）',
          ],
        },
        {
          title: '認証・セキュリティ',
          items: [
            'Better Authによるメール＋パスワード認証（DBセッション）と、メールでのパスワード再設定、パスワード変更',
            'Owner / Memberの権限管理と、ユーザー間のデータ分離（所属していないプロジェクトは404として扱う）',
            'proxy.tsはCookieが無い場合の/loginへの誘導のみを担当し、セッションはDBで検証',
            'nonce付きのContent-Security-Policyと、認証APIのレート制限（DB保存）',
          ],
        },
        {
          title: '設計・データ',
          items: [
            'Next.js（App Router）のServer ComponentsとServer Actionsを中心にした構成',
            '機能ごとにactions / service / queries / schemas / componentsを分け、権限表・進捗率・日付判定を純粋関数として分離',
            'Server Actionsで認証とZodによる検証を行い、service.tsで認可とトランザクションを処理',
            '「各プロジェクトのOwnerはちょうど1人」をDBトリガーでも保証',
          ],
        },
        {
          title: 'テスト',
          items: [
            'Vitestで、ドメインロジックの単体テストと実DBを使った統合テストを実行',
            'PlaywrightでE2Eテストを実行',
            'axe-coreで、全主要画面のWCAG 2.1 AAの自動チェックを実施',
            'GitHub Actionsで、ESLint・型チェック・単体テスト・ビルド・統合テスト・E2Eテストを実行',
          ],
        },
        {
          title: 'インフラ・リリース',
          items: [
            'Vercel・Neon（PostgreSQL）・Resend（メール）で本番運用',
            'Vercel上ではビルド時と起動時に環境変数を検証し、誤りがあればデプロイを失敗させる（本番とPreviewのDBの取り違え、本番ドメインと一致しないBETTER_AUTH_URLなど）',
            '本番DBへのマイグレーションと本番デプロイは、手動実行・承認付きのGitHub Actionsワークフローで実施',
            'Vercel Cronで、期限切れのデモアカウントを削除',
          ],
        },
        {
          title: 'バックアップ',
          items: [
            '本番DBの論理バックアップを、毎日04:00 JSTにGitHub Actionsで取得（定期実行のほか手動実行にも対応）',
            '実行元のブランチ・接続先・ロールを検査し、読み取り専用ロールで接続',
            'pg_dumpで取得したデータを空のPostgreSQL 18に復元し、行数・スキーマ・マイグレーション履歴が取得元と一致することを確認',
            '公開鍵で暗号化してCloudflare R2に保管し、31日を過ぎたものを削除（最新の1つは残す）',
          ],
        },
      ],
      architecture: {
        title: '読み取りと更新の経路',
        lead: '読み取りはServer ComponentsでDBのセッションを検証してから、更新はServer Actionsで認証・入力の検証・認可を行ってから実行します。認証APIはBetter Auth（/api/auth/*）が担当します。',
        paths: [
          {
            title: '読み取り（画面の表示）',
            description: '所属していないプロジェクトは、存在しないもの（404）として扱います。',
            steps: [
              { label: 'ブラウザ', via: 'HTTPS' },
              { label: 'proxy.ts', detail: 'Cookieが無ければ/loginへ誘導' },
              { label: 'Server Components', detail: 'ページの描画' },
              { label: 'requireUser', detail: 'DBでセッションを検証' },
              { label: 'queries.ts', detail: 'データの取得', via: 'Prisma' },
              { label: 'PostgreSQL', detail: 'Neon' },
            ],
          },
          {
            title: '更新（Server Actions）',
            description: '認証と入力の検証のあと、service.tsで認可とトランザクションを処理します。',
            steps: [
              { label: 'ブラウザ', detail: 'React Hook Form / dnd-kit' },
              { label: 'Server Action', detail: '認証' },
              { label: 'Zod', detail: '入力の検証' },
              { label: 'service.ts', detail: '認可・トランザクション', via: 'Prisma' },
              { label: 'PostgreSQL', detail: 'Neon' },
            ],
          },
        ],
        sharedCore: { label: '共通のドメインロジック', value: 'src/domain（権限表・進捗率・日付判定の純粋関数）' },
      },
    },
    {
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
      screenshot: {
        src: '/images/projects/svg-app.png',
        alt: 'SVG Appの画面。サンプル画像の元画像と変換後のSVGを左右に並べて比較でき、右側のパネルで用途や色数を設定できる。',
        width: 1440,
        height: 900,
      },
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
            'ブラウザ内変換では、Web Worker上で変換処理を実行し、UIの処理と分離',
            'ブラウザ内変換では、画像をサーバーへ送信せずに処理',
            'ビルド時の設定で変換方式を切り替え（Cloudflare Pages版はブラウザ内変換、AWS版はサーバー側変換）',
            'サーバー側変換では画像の送信を画面上で明示し、APIのエラーをステータスごとに日本語で表示',
            'サーバー側変換では、GPS情報や撮影日時などのメタデータを送信前にブラウザで除去',
            '入力ファイルサイズの上限を設定し、400万画素を超える画像はブラウザで自動縮小して、その旨を画面に表示',
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
            'バックエンドは、GitHub Actionsでproto のlint、Goの単体テスト、C++の単体テスト、Docker Composeによる統合テストを実行',
            'フロントエンドは、GitHub Actionsでlint、型チェック、Vitest、2つの変換方式の本番ビルドを実行',
            '同じ画素を入力したときに、WebAssembly版とgRPC版の変換結果が一致することを確認するテスト（ローカル実行）',
            'Vitestで、変換方式の設定、APIエラー時の表示、各変換方式の画面表示、画像の縮小、メタデータの除去をテスト',
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
        sharedCore: { label: '共通の変換コア', value: 'svg-converter ライブラリ（C++20 / OpenCV）' },
      },
    },
  ],
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
        alt: 'PaintMixの画面。左側で2色の絵の具と混合比・白を混ぜる量を調整し、右側に混色結果の色とHEX値、配合レシピが表示されている。',
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
        alt: 'ZENのトップページ。「いま、心にあることを聞かせてください」という見出しの下に、思いを入力する欄とヒントの選択肢、「禅師に相談する」ボタンが表示されている。',
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
        title: 'AIを安全に業務へ組み込むWebアプリケーション開発',
        description:
          'AIが業務を分析して計画を提案し、入力と出力の検査、人間の承認、実行前の再検証、改ざんを検出できる監査ログを経て実行するプラットフォームを、Laravel・PostgreSQL・Redis・Reactで開発しています。脅威モデルとセキュリティ設計を文書化し、セキュリティテスト・SAST・脆弱性スキャン・E2EテストをCIで必須化しています。',
        tags: ['Laravel', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Playwright', 'Semgrep', 'Trivy', 'GitHub Actions'],
      },
      {
        title: 'Webアプリケーション・API開発',
        description:
          'React / TypeScriptによるフロントエンド、Next.jsとPostgreSQLによるWebアプリケーション、Go REST APIとgRPCによるバックエンド、Laravelによるサーバーサイドアプリケーションを開発しています。',
        tags: ['React', 'TypeScript', 'Next.js', 'PostgreSQL', 'Go', 'gRPC', 'Protocol Buffers', 'Laravel'],
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
          'Docker Composeによる環境構築、AWS EC2・VPS・Cloudflare Pages・Vercelへのデプロイ、GitHub ActionsによるCI/CD、承認付きのDBマイグレーション、CloudWatch・SNSによる監視・通知に取り組んでいます。',
        tags: ['Docker', 'AWS', 'Nginx', 'GitHub Actions', 'Cloudflare Pages', 'Vercel'],
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
      { title: 'フロントエンド', items: ['React', 'Next.js', 'Vite', 'WebAssembly', 'Web Worker', 'Tailwind CSS', 'shadcn/ui'] },
      {
        title: 'バックエンド',
        items: ['Go REST API', 'gRPC', 'Protocol Buffers', 'Laravel', 'Laravel Sanctum', 'Next.js Server Actions', 'Better Auth', 'OpenAI API'],
      },
      { title: 'データベース', items: ['PostgreSQL', 'Redis', 'Prisma', 'MySQL'] },
      { title: 'テスト・セキュリティ検査', items: ['Pest', 'Larastan', 'Vitest', 'Playwright', 'axe-core', 'Semgrep', 'Trivy', 'gitleaks'] },
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
          'Vercel',
          'Neon',
          'GitHub Actions',
        ],
      },
    ],
  },
  footer: '名合 貴洋',
}
