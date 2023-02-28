import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { data, homelink } from './data/linkdata'
import Link from 'next/link'
import { Button } from '@mui/material'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>ExpressとPostgreSQLの勉強</title>
        <meta name="description" content="メンバー登録と閲覧のアプリです" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Form>
        <div>
          <h1>アプリ開発の勉強(メンバー登録と閲覧)</h1>
          {homelink.map((item:data,index:number)=>(
            <div 
              className='mt-3'
              key={index}
            >
              <Link
                href={item.link}
              >
                <Button variant='contained'>
                  {item.name}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Form>
    </>
  )
}
