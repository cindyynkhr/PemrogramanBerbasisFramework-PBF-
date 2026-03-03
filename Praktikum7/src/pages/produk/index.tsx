import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import HeroSection from "@/views/produk/HeroSection";
//import MainSection from "@/views/produk/MainSection";

type ProductType= {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

const Produk = () => {
  //const [isLogin, setIsLogin] = useState(false);
  //const {push} = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responsedata) => {
        //console.log("Data Produk:", responsedata.data);
        setProducts(responsedata.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Daftar Produk Cindy</h1>
      {products.map((product:ProductType) => (
        <div key={product.id}>
          <h2>{product.nama}</h2>
          <p>Harga: {product.harga}</p>
          <p>Ukuran: {product.ukuran}</p>
          <p>Warna: {product.warna}</p>   
        </div>
      ))}
    </div>
  );
};

export default Produk;