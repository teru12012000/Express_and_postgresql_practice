import express from "express";
import { router } from "./routers/member";
const app=express();
const port=5050;

app.use(express.json());//json型を使えるように
app.use("/member",router);//ルーティング
app.listen(port,()=>{
  console.log(`server running! Port number:${port}`);
})
//ここまでできたらデータベースの作成
/*
  1. postgresqlをインストール
  2. できたらsqlshellを開く
  3. エンターを押していく
  4. CREATE DATABASE データベース名 でデータベース作成
  5. \l でデータベースを確認
  6. \c データベース名 でログイン
  7. CREATE TABLE member(データの形式); でテーブルを作成
    ex)
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      );
*/