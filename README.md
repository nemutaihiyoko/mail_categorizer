# mail_categorizer

## mail_categorizerとは
メール情報を分類する

## Quick Start
### 準備編
1. このフォルダーをVSCodeで開く
2. 左下の「><」みたいなボタンから、「Reopen in Container」 (VSCodeの拡張機能の一つDev Containersが必要)

### 実行編
|コマンド|実行内容|備考|
|:---:|:---:|:---:|  
|`runa`|APIサーバーを実行|run apiserverの略|
|`testa`|APIサーバーのテストを実行|test apiserverの略|
|`runf`|Frontendを実行|run frontendの略|
|`testf`|Frontendのテストを実行|test frontendの略|


## 構成
概観は以下の通り

```
.
├── .devcontainer            # 開発環境設定
├── .github                  # GitHub, CI-CD, GitHub Copilot設定
├── .vscode                  # VSCode設定
├── docs                     # ドキュメント
│   ├── developer-manuals      # 開発者用マニュアル
│   ├── specifications         # 仕様書
│   ├── test-specifications    # テスト仕様書
│   └── user-manuals           # ユーザマニュアル
├── apiserver                # APIサーバー(Python)
│   ├── resources              # 静的ファイルなど
│   ├── src                    # メインとなるソースファイル
│   └── test                   # テスト実行ソースファイル
├── frontend                 # Frontend(Node, Typescript, React)
│   ├── resources              # 静的ファイルなど
│   ├── src                    # メインとなるソースファイル
│   └── test                   # テスト実行ソースファイル
├── LICENSE
└── README.md
```