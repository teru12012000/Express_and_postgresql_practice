import Back from "@/components/Back";
import Form from "@/components/Form";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
type postdata={
  title:string;
  setInfo:Dispatch<SetStateAction<string>>;
}
type HelloResponse={
  message: string;
}
const Post:NextPage = () => {
  const router=useRouter();
  const [name,setName]=useState<string>("");
  const [age,setAge]=useState<string>("");
  const [hobby,setHobby]=useState<string>("");
  const [mail,setMail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [show,setShow]=useState<boolean>(false);
  const post:postdata[]=[
    {
      title:'名前',
      setInfo:setName,
    },
    {
      title:'年齢',
      setInfo:setAge,
    },
    {
      title:'趣味',
      setInfo:setHobby,
    },
    {
      title:'メールアドレス',
      setInfo:setMail,
    },
  ]

  const handleClickShowPassword = () => setShow((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleChange=(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,setstate:Dispatch<SetStateAction<string>>)=>{
    setstate(e.currentTarget.value);
  }
  const handleClick=async()=>{
    const res=await fetch('http://localhost:5050/member/post',{
        method:"POST",
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          "name":name,
          "email":mail,
          "password":password,
          "age":age,
          "hobby":hobby,
        })
      });
      const data:HelloResponse= await res.json();
      if(data.message==="OK"){
        router.push(`/Success`);
      }else{
        alert(data.message)
      }
  }
  return (
    <>
      <Head>
        <title>メンバーリスト</title>
        <meta name="description" content="メンバーの閲覧です" />
      </Head>
      <Back/>
      <Form>
        <div>
          <h1>メンバー登録</h1>
            {post.map((item:postdata,index:number)=>(
              <div
                key={index}
                className="mt-3"
              >
                <TextField 
                  id="outlined-basic" 
                  label={item.title} 
                  variant="outlined" 
                  onChange={(e)=>handleChange(e,item.setInfo)}
                />
              </div>
            ))}
            <div className="mt-3">
              <FormControl sx={{ m: 1,width:"80%"}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={show? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {show? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                    onChange={(e)=>handleChange(e,setPassword)}
                  />
              </FormControl>
            </div>
            <Button 
              variant="contained" 
              className="mt-3"
              onClick={()=>handleClick()}
            >
              追加
            </Button>
          </div>
      </Form>
    </>
  );
}

export default Post;