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
  components/        各セクションのコンポーネントと CSS Modules
  styles/            デザイントークン（tokens.css）と全体のスタイル
```

## 掲載内容の方針

- 公開リポジトリ・公開されたPR / Issue・本人から提供された情報で確認できる内容のみを記載します。
- 「実務経験」「個人開発」「OSS活動」は分けて記載します。実務の案件には期間・所属・規模・役割を付けます。
- スキルは「自力で設計・実装できる」「実務で使用した」「個人開発・学習で使用した」の3区分（`skills.tiers`）で表示します。
- OSS活動はマージ済みと誤解されないよう、`status` に提出日と状況（レビュー中など）を書きます。マージされたら更新します。
- 数値の成果（処理時間の短縮など）は `outcome` に、概算であればその旨を含めて書きます。

## 掲載内容の更新

- 文言やリンクは `src/content/ja.ts` を編集します。
- スクリーンショットを追加する場合は `public/images/projects/` に画像を置き、該当プロジェクトに `screenshot` を指定します。指定がないプロジェクトは画像なしのレイアウトで表示されます。
- 英語版を追加する場合は、`SiteContent` 型に沿って `src/content/en.ts` を作成し、`src/App.tsx` で切り替えます。
- GitHubプロフィールの README（TakahiroNago/TakahiroNago）は、このサイトの内容と同じ事実に基づいて更新します。

## Cloudflare Pages の設定

- ビルドコマンド：`npm run build`
- 出力ディレクトリ：`dist`
- Node.js：`.node-version` で 24 を指定
