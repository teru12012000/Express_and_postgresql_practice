"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const member_1 = require("./routers/member");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 5050;
app.use((0, cors_1.default)());
app.use(express_1.default.json()); //json型を使えるように
app.use("/member", member_1.router); //ルーティング
app.listen(port, () => {
    console.log(`server running! Port number:${port}`);
});
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
