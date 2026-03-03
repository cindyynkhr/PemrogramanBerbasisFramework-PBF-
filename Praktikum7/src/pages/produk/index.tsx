import { useRouter } from "next/router";
import { useEffect, useState } from "react";
//import HeroSection from "@/views/produk/HeroSection";
//import MainSection from "@/views/produk/MainSection";

type ProductType= {
  id: string;
  name: string;
  price: number;
  size: string;
  category: string;
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
      <h1 style={{ fontWeight: 700 }}>Daftar Produk Cindy</h1>
      {products.map((product:ProductType) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Harga: {product.price}</p>
          <p>Ukuran: {product.size}</p>
        </div>
      ))}
    </div>
  );
};

export default Produk;