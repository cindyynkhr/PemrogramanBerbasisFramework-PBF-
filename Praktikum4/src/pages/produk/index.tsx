import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const status = localStorage.getItem("isLogin");
    if (status === "true") {
      setIsLogin(true);
    } else {
      router.push("/auth/login");
    }
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLogin) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/auth/login");
  };

  return (
    <div>
      <h1>Produk User Page Cindy</h1>
      <p>Anda sudah login dan dapat mengakses halaman ini</p>
      <button onClick={handleLogout}>Kembali ke Login</button>
    </div>
  );
};

export default Produk;