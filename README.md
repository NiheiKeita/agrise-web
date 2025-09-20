

[![codecov](https://codecov.io/gh/NiheiKeita/next-example-app/graph/badge.svg?token=MY9YAIW9F6)](https://codecov.io/gh/NiheiKeita/next-example-app)


# 準備
- VSCodeのインストール
https://azure.microsoft.com/ja-jp/products/visual-studio-code
コードを修正するエディター

- Gitのインストール
https://docs.github.com/ja/desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop

GitHub Desktopをダウンロードすれば良い

- AIの準備
ChatGPTを契約すれば大丈夫
codexを使用予定
https://marketplace.visualstudio.com/items?itemName=openai.chatgpt

↑の拡張機能をVSCodeにインストールして、ChatGPTのアカウントでログインする

# 開発手順

1. ブランチを作成
GitHub Desktopの`Current Branch`から新しく作成

2. AIにコードを書かせる
VSCodeのAIの拡張機能からコードを書く

3. GitHubにコミット・プッシュ
GitHub Desktopの左下の方にコメント(どんなことをしたか)を書いて、コミット(コメント入力下にある青いボタンを押す)をする
それが終わったら、`Current Branch`の右隣に`Publish Branch`と表示されているのでそれを押す

4. PRの作成
ブラウザで`https://github.com/NiheiKeita/agrise-web`にアクセスすると`New Pull Request`が出てるので、それを押して作成する

# コマンド
VSCodeのターミナルを使用して行うコマンド
### 初回
`npm ci`を行う
※初回のみでOK

### 起動するコマンド
`npm run dev`を行うと、ブラウザで確認できる
`http://localhost:3000`にブラウザでアクセスすることで確認できる


# リリース方法

`ghpv.*.*.*`のタグを打ってリリース
例）ghpv.1.0.0 など

