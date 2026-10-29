# portfolio-site

名合 貴洋のポートフォリオサイトです。React / TypeScript / Viteで構築し、Cloudflare Pagesで公開する予定です。

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
  content/ja.ts      掲載内容（文言・リンク・経歴・スキル）
  types.ts           掲載内容の型
  components/        各セクションのコンポーネントと CSS Modules
  styles/            デザイントークン（tokens.css）と全体のスタイル
```

## 掲載内容の更新

- 文言やリンクは `src/content/ja.ts` を編集します。
- スクリーンショットを追加する場合は `public/images/projects/` に画像を置き、該当プロジェクトに `screenshot` を指定します。指定がないプロジェクトは画像なしのレイアウトで表示されます。
- 英語版を追加する場合は、`SiteContent` 型に沿って `src/content/en.ts` を作成し、`src/App.tsx` で切り替えます。

## Cloudflare Pages の設定（予定）

- ビルドコマンド：`npm run build`
- 出力ディレクトリ：`dist`
- Node.js：`.node-version` で 24 を指定
