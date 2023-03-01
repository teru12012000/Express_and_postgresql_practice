# server

## 概要

SQL と連係してメンバー登録と閲覧のサーバー側の API を作った

## 機能

- すべて閲覧する get メソッド

  - select 文でユーザーがいない場合にはレスポンスは「いない」とメッセージを返すようにしている
  - それ以外なら登録メンバーがいるのでメッセージに加えそのリストを json 形式で取り出している

- 登録する post メソッド
  - その人のメールアドレスが登録されている場合は登録されているとみなし、レスポンスとして「存在している」を送る
  - それ以外なら SQL に INSERT 文で登録する
  - パスワードについては bcrypt を使い暗号化している

## 使用した技術

- frontend
  - Node.js
  - TypeScript
  - Express
  - pg
  - bcrypt
  - postgreSQL
- server
  - Node.js
  - TypeScript
  - Express
  - pg
  - bcrypt
  - postgreSQL