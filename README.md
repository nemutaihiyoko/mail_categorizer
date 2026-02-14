# mail_categorizer

## mail_categorizerとは
メール情報を分類する


## クイックスタート
### 本番実行
- 本番実行する場合、以下のコマンドを実行する
  ```sh
  ./cmd.sh up
  ```
  docker imageが作成され、実行される

- ログを確認したい場合、以下のコマンドを実行する
  ```sh
  ./cmd.sh logs
  ```

- 実行を終了する場合、以下のコマンドを実行する
  ```sh
  ./cmd.sh down
  ```

### 開発環境
このプロジェクトはDevcontainerを利用して開発することを前提としている。
そのためVSCode及び、その拡張機能であるDevcontainerを事前にインストールしておくこと。
セットアップ手順は以下の通り。

1. 本プロジェクト(`mail_categorizer`)をVSCodeで開く
1. 右下に現れる「Reopen in Container」という青いボタンを押すなどし、Devcontainerを開く
1. セットアップ完了(初回は時間がかかる場合がある)

ターミナルをVSCodeで開き、以下のコマンドを実行することでアプリケーションを実行できる
```sh
./cmd.sh run
```

## セットアップ手順
### Gmail API
Gmailからメール取得するためのセットアップ手順。以下の手順に従って、APIキーを取得し、`credentials.json` という名前でルートディレクトリに配置する。

#### 1. Google Cloud Platform プロジェクトの準備
1. [Google Cloud Console](https://console.cloud.google.com/)にアクセス。
2. 画面上部「プロジェクト選択」から「新しいプロジェクトを作成」を選択しプロジェクト作成する。

#### 2. Gmail APIの有効化
1. 左側のナビゲーションメニューから `APIとサービス` > `ライブラリ` を選択。
2. 検索バーに「Gmail API」と入力し、表示されたGmail APIを選択。
3. 「有効にする」ボタンを押下。

#### 3. OAuth同意画面の設定
1. 左側のナビゲーションメニューから `APIとサービス` > `OAuth同意画面` を選択。
2. **アプリ情報** :「アプリ名」「ユーザーサポートメール」を入力して「次へ」を押下。
3. **対象** : `外部` を選択し、「次へ」を押下。
4. **連絡先情報** : メールアドレスを入力し、「次へ」を押下。
5. **終了** : ユーザデータに関するポリシーに同意して「作成」を押下。

#### 4. 認証情報（OAuth 2.0 クライアント ID）の作成
1. 左側のナビゲーションメニューから`クライアント`を選択。
2. 画面上部の「+ クライアントを作成」を押下し、「OAuth クライアント ID の作成」画面へ移動。
3. 以下設定し、「作成」を押下。
  - **アプリケーションの種類** : `デスクトップアプリ` を選択。
  - **名前** : `mail_categorizer-client` とか任意の名前入力。

#### 5. `credentials.json` のダウンロード
1. クライアントの作成が完了すると、ポップアップが表示される。下にスクロールして「JSONをダウンロード」を押下。
2. ダウンロードしたファイルの名前を `credentials.json` に変更し、このプロジェクトのルートディレクトリに配置。

Note: 初回実行時にブラウザが起動して、Googleアカウントでの認証が求められる。このとき、公開ステータスがテスト中の場合、テストユーザーを登録する必要がある。ログイン可能なgmailでユーザーを追加すること。

### Gemini API
Geminiを使用する場合のセットアップ手順。Gemini APIキーを取得し、`.env`に設定する。

#### 1. Google AI Studioにアクセス
1. [Google AI Studio](https://aistudio.google.com/)にアクセスしログイン。

#### 2. APIキーの作成
1. 左側のナビゲーションメニューから`Get APIkey`を選択。
2. 画面右上「APIキーを作成」からキーを作成する。

#### 3. `.env` に設定
1. `.env.example`を参考に`.env`を作成。
2. `GEMINI_API_KEY`に作成したGeminiAPIキーを設定する。

### config.jsonの作成（任意）
特定のメールアドレスを処理から除外したり、メール本文中の機密情報をマスクしたりしたい場合に設定する。

`src/config.json`を作成し、以下のように記述する。  
```json
{
  "sensitive_keywords": [
    "dummy1",
    "dummy2",
  ],
  "unread_addresses": [
    "dummy1@example.com",
    "dummy2@example.com"
  ]
}
```

## How to use

## How it works

## Note

## References