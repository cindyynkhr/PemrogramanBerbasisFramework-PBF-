import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div style={{ padding: '20px', fontFamily: 'times new roman, sans-serif' }}>
      <h1>Tentang Saya</h1>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <p>
          Ini adalah halaman about Cindy
        </p>
      </div>
      <br />
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}>
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}
