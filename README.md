# mail_categorizer

## What is 'mail_categorizer'


## Quick Start
### As a product
if you just want to execute the application, just run the command:
```sh
./cmd.sh up
```

if you want to see the logs, run the command:
```sh
./cmd.sh logs
```

if you want to end the running application, run the command:
```sh
./cmd.sh down
```

### As a development
This project is developed with devcontainer.
So, if you want to develop this project, follow the instruction:

1. Open this project in VSCode (*Extension 'Dev Containers' required)
1. Click the blue button 'Reopen in Container' in the notification popup at the bottom right.
    * The button does not appear? Don't worry, there is many ways to open in devcontainer. Please search and hope you solve that.
1. Now your development environment has been configured!

If you want to run the application in the container, run the command:
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

Note: 初回実行時にブラウザが起動して、Googleアカウントでの認証が求められる。

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