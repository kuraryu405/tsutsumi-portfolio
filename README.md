# React + Tailwind CSS + daisyUI スターター

React 19 + Vite + TypeScript をベースに、Tailwind CSS と daisyUI を事前設定したポートフォリオ向けスターターです。以下の手順でまっさらな環境から同じ構成を再現できます。

## 前提条件

- Node.js 20 以上（LTS 推奨）
- pnpm 10 以上
- 任意のパッケージマネージャー / Git クライアント

## セットアップ手順

1. **Vite + React + TS プロジェクトを作成**
   ```bash
   pnpm create vite@latest tsutsumi-portfolio -- --template react-ts
   cd tsutsumi-portfolio
   pnpm install
   ```
2. **Tailwind CSS & PostCSS を導入**  
   安定版の Tailwind CSS v3 系を使用すると Vite 連携がスムーズです。
   ```bash
   pnpm add -D tailwindcss@3.4.17 postcss autoprefixer
   pnpm exec tailwindcss init -p
   ```
3. **daisyUI を追加**
   ```bash
   pnpm add daisyui
   ```
4. **Tailwind 設定を更新**  
   `tailwind.config.js` を以下のように変更し、`daisyui` プラグインを登録します。
   ```js
   import daisyui from 'daisyui'

   export default {
     content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
     theme: { extend: {} },
     plugins: [daisyui],
   }
   ```
5. **スタイルのエントリを差し替え**  
   `src/index.css` を Tailwind のディレクティブだけにします。
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
6. **サンプル画面を Tailwind/daisyUI 化**  
   `src/App.tsx` を好きな UI に書き換えます。例として `hero` と `card` コンポーネントを使ったセクションを用意しています。

## 利用方法

- **開発サーバー**: `pnpm dev`
- **型チェック & ビルド**: `pnpm build`
- **Lint**: `pnpm lint`

## 動作確認

1. `pnpm dev` を実行し、`http://localhost:5173` を開く
2. Tailwind のユーティリティクラスと daisyUI のコンポーネントが適用された画面が表示されればセットアップ完了です

## カスタマイズのヒント

- daisyUI のテーマ切替: `tailwind.config.js` の `daisyui: { themes: [...] }` を編集
- カスタムカラー/フォント: `theme.extend` に追記
- コンポーネント集: [https://daisyui.com/components/](https://daisyui.com/components/)

この README をプロジェクトの手順書として利用し、必要に応じて自分用のメモを追記してください。
