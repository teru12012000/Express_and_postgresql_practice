import Form from "@/components/Form";
import { Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

const Success = () => {
  return (
    <>
      <Head>
        <title>メンバーリスト</title>
        <meta name="description" content="メンバーの閲覧です" />
      </Head>
      <Form>
        <div>
          <h1>リストに追加成功しました！</h1>
          <div 
              className='mt-3'
          >
            <Link
              href="/get/Allusers"
            >
              <Button variant='contained'>
                メンバーリスト一覧へ！
              </Button>
            </Link>
            </div>
        </div>
      </Form>
    </>
  );
}

export default Success;