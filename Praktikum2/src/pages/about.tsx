import React from 'react';
import Link from 'next/link';

export default function About() {
  const studentInfo = {
    nama: 'Cindy Nur Khoiriyah',
    nim: '2341720058',
    programStudi: 'D-4 Teknik Informatika'
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'times new roman, sans-serif' }}>
      <h1>Tentang Saya</h1>
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <p>
          <strong>Nama Mahasiswa:</strong> {studentInfo.nama}
        </p>
        <p>
          <strong>NIM:</strong> {studentInfo.nim}
        </p>
        <p>
          <strong>Program Studi:</strong> {studentInfo.programStudi}
        </p>
      </div>
      <br />
      <Link href="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '16px' }}>
        Kembali ke Halaman Utama
      </Link>
    </div>
  );
}
