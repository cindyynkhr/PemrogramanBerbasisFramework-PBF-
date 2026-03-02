import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeroSection from "@/views/produk/HeroSection";
import MainSection from "@/views/produk/MainSection";

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
    return <div className="flex items-center justify-center h-screen text-lg">Loading...</div>;
  }

  if (!isLogin) {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection onLogout={handleLogout} />
      <MainSection />
    </div>
  );
};

export default Produk;