import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "@/views/produk/";

const Produk = () => {
  //const [isLogin, setIsLogin] = useState(false);
  //conts {push} = useRouter();
  const [products, setProducts] = useState([]);
  // console.log("products: ", products);
  //useEffect(() => {
  //   if (!isLogin) {
  //     push("/auth/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch("/api/produk")
      .then((response) => response.json())
      .then((responeData) => {
        setProducts(responeData.data);
        //console.log("Data Produk:", responeData.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <TampilanProduk products={products} />
    </div>
  );
};

export default Produk;