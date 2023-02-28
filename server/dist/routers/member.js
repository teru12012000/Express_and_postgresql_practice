"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const db_1 = require("../db/db");
const bcrypt_1 = __importDefault(require("bcrypt"));
/*
  今回のテーブルはid,名前,メール,パスワード,年齢,趣味とする
*/
exports.router = (0, express_1.Router)();
//すべてのユーザーを閲覧する
exports.router.get("/all", (req, res) => {
    db_1.pool.query("SELECT * FROM users1", (err, result) => {
        if (!result.rows.length) {
            return res.json({
                message: "ユーザーがいません。",
            });
        }
        else {
            return res.json({
                message: "ユーザー一覧を取得しました。",
                list: result.rows,
            });
        }
    });
});
exports.router.post("/post", (req, res) => {
    const { name, email, password, age, hobby } = req.body;
    db_1.pool.query("SELECT s FROM users1 s WHERE s.email = $1", [email], (err, resulut) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            //console.log("こっちだよ！");
            return res.json({
                message: "sqlに問題があるよ"
            });
        }
        else if (resulut.rows.length) {
            return res.json({
                message: "既に登録されています",
            });
        }
        else {
            let hashuedPassword = yield bcrypt_1.default.hash(password, 10);
            db_1.pool.query("INSERT INTO users1(name, email, password, age, hobby) values ($1, $2, $3, $4, $5)", [
                name,
                email,
                hashuedPassword,
                age,
                hobby
            ], (err, result) => {
                if (err) {
                    return res.json({
                        message: "sqlに問題があるよ",
                    });
                }
                else {
                    return res.json({
                        message: "OK",
                    });
                }
            });
        }
    }));
});
