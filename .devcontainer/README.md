# .devcontainer の構成について

何が起こっているのか理解しやすいよう発生順に説明する。
なお、理解のしやすさを優先するため厳密な説明はしていない。

### 1. Dockerfile
「Reopen in Container」が実行されると、コンテナイメージを作成する。
このコンテナイメージはこのアプリケーションを開発するのに必要な環境の土台となる環境を用意している。
具体的にどんなイメージを作成するかをDockerfileで指定している。

### 2. docker-compose.yml
作成されたコンテナイメージから、コンテナを起動する。
このとき、同時にpostgresなどの付随的に必要なものもここで起動している。

### 3. devcontainer.json
起動したコンテナに対し、devcontainerとして利用するための設定のあれこれ。
VSCode系の設定が多め。

### 4. setup.sh
devcontainer.jsonをもとにdevcontainerとして利用される直前に実行される。
pythonやnode環境のセットアップなどを行う。

### 5. .bashrc
`runa`などの開発環境内でのみ使える専用コマンドを定義している。