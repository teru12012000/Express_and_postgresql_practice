import Back from "@/components/Back";
import Form from "@/components/Form";
import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { menberdata } from "../data/getlist";
import { Tab } from "@mui/icons-material";
type member={
  message:string;
  list:menberdata[];
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Allusers:NextPage = () => {
  const [message,setMessage]=useState<string>("ユーザを取得中");
  const [member,setMember]=useState<menberdata[]|undefined>(undefined)
  const [isMember,setIsMember]=useState<boolean>(false);
  useEffect(()=>{
    const res=fetch('http://localhost:5050/member/all',{
      method:"GET",
      headers:{
        'Content-Type':'application/json',
      }
      }).then(
        (responce)=>responce.json()
      ).then(
        (item)=>item.list?(setMember(item.list as menberdata[])):setMessage(item.message as string)
      )
    },[])
    useEffect(()=>{
      setIsMember(true);
    },[member])
  return (
    <>
      <Head>
        <title>メンバーリスト</title>
        <meta name="description" content="メンバーの閲覧です" />
      </Head>
      <Back/>
      <Form>
        <div>
          <h1>メンバーリスト</h1>
          {isMember?(
            <TableContainer component={Paper}>
              <Table area-label="memberlist">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="center">名前</StyledTableCell>
                    <StyledTableCell align="center">年齢</StyledTableCell>
                    <StyledTableCell align="center">趣味</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {member?.map((item:menberdata,index:number)=>(
                    <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                        ID：{item.id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {String(item.age)}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item.hobby}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ):(
            <p>{message}</p>
          )}
        </div>
      </Form>
    </>
  );
}

export default Allusers;