import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    const status = localStorage.getItem("isLogin");
    if (status === "true") {
      setIsLogin(true);
    } else {
      push("/auth/login");
    }
  }, []);

  return <div>Produk User Page Cindy</div>;
};

export default Produk;