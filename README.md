# portfolio-site

名合 貴洋のポートフォリオサイトです。React / TypeScript / Viteで構築し、Cloudflare Pagesで https://art-full-stack.com/ に公開しています。

## 開発

```powershell
npm install
npm run dev       # 開発サーバー
npm run build     # 型チェックと本番ビルド（dist/ に出力）
npm run preview   # ビルド結果の確認
npm run lint      # oxlint
```

## 構成

```text
public/
  images/projects/   プロジェクトのスクリーンショット（実際の画面のみ）
  favicon.svg
src/
  content/ja.ts      掲載内容（文言・リンク・経歴・OSS活動・スキル）
  types.ts           掲載内容の型
  router.ts          トップ（/）と詳細ページ（/projects/<id>）の切り替え
  pages/             トップページとプロジェクトの詳細ページ
  components/        各セクションのコンポーネントと CSS Modules
  styles/            デザイントークン（tokens.css）と全体のスタイル
```

トップページには要点を、各プロジェクトの設計・判断の詳細は `/projects/<id>` の詳細ページに載せます。Cloudflare Pages は `404.html` が無いと存在しないパスにも `index.html` を返すため、詳細ページのURLに直接アクセスしても表示されます（`public/404.html` は置かないでください）。

## 掲載内容の方針

- 公開リポジトリ・公開されたPR / Issue・本人から提供された情報で確認できる内容のみを記載します。
- 「実務経験」「個人開発」「OSS活動」は分けて記載します。実務の案件には期間・所属・規模・役割を付けます。所属は業種・形態（例：プリント基板検査装置メーカー、SES企業）で書き、会社名は掲載しません。会社名は応募先に履歴書・職務経歴書でのみ伝えます。
- スキルは「実務で使用した」「個人開発・学習で使用した」の2区分で表示します。分野ごとの `skills` の各項目に、実務で使用したものは `work: true` を付けます（塗りつぶしで表示。個人開発でも使用したものを含みます）。
- OSS活動はマージ済みと誤解されないよう、`badge` に状況（レビュー中など）を書きます。マージされたら更新します。
- 数値の成果（処理時間の短縮など）は、概算であればその旨を含めて書きます。
- 詳細ページの「なぜ作ったか」（`background`）は、公開している要件定義などで確認できる場合のみ書きます。

## 掲載内容の更新

- 文言やリンクは `src/content/ja.ts` を編集します。
- スクリーンショットを追加する場合は `public/images/projects/` に画像を置き、該当プロジェクトに `screenshot` を指定します（詳細ページのアーキテクチャ図の下に表示されます）。
- 英語版を追加する場合は、`SiteContent` 型に沿って `src/content/en.ts` を作成し、`src/App.tsx` で切り替えます。
- GitHubプロフィールの README（TakahiroNago/TakahiroNago）は、このサイトの内容と同じ事実に基づいて更新します。

## Cloudflare Pages の設定

- ビルドコマンド：`npm run build`
- 出力ディレクトリ：`dist`
- Node.js：`.node-version` で 24 を指定
