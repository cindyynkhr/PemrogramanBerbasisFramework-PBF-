import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Praktikum Next.js Pages Router Cindy</title>
      </Head>
        <h1>Praktikum Next.js Pages Router Cindy</h1>
        <p>Mahasiswa d4 Pengembangan Web</p>
    </div>
  )
}
