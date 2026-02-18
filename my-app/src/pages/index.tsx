import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    //Langkah 5 - Modifikasi Halaman Utama
   <div style={{ padding: '20px' }}>
    <h1>Praktikum Next.js Pages Router Cindy</h1> <br />
    <p>Mahasiswa D4 Teknik Informatika 2026 Pengembangan Web</p>
    <br />
    <Link href="/about" style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}>
      Lihat Profil Saya
    </Link>
   </div>
  )
}
