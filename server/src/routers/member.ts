import { Router,Request,Response } from "express";
import { pool } from "../db/db";
import bcrypt from "bcrypt";
/* 
  今回のテーブルはid,名前,メール,パスワード,年齢,趣味とする
*/
export const router=Router();
//すべてのユーザーを閲覧する
router.get("/all",(req:Request,res:Response)=>{
  pool.query("SELECT * FROM users1",(err,result)=>{
    if(!result.rows.length){
      return res.json({
        message:"ユーザーがいません。",
      })
    }else{
      return res.json({
        message:"ユーザー一覧を取得しました。",
        list:result.rows,
      })
    }
  })
});
router.post("/post",(req:Request,res:Response)=>{
  const {name,email,password,age,hobby}=req.body;
  pool.query("SELECT s FROM users1 s WHERE s.email = $1",[email],async(err,resulut)=>{
    if(err){
      //console.log("こっちだよ！");
      return res.json({
        message:"sqlに問題があるよ"
      })
    }else if(resulut.rows.length){
      return res.json({
        message:"既に登録されています",
      })
    }else{
      let hashuedPassword:string=await bcrypt.hash(password,10);
      pool.query("INSERT INTO users1(name, email, password, age, hobby) values ($1, $2, $3, $4, $5)",[
        name,
        email,
        hashuedPassword,
        age,
        hobby
      ],(err,result)=>{
        if(err){
          return res.json({
            message:"sqlに問題があるよ",
          })
        }else{
          return res.json({
            message:"OK",
          })
        }
      })
    }
  })
})