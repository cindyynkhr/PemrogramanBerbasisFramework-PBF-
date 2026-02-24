import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const router = useRouter();
    const handleLogin = () => {
        //logic login disini 
        console.log("Button clicked, navigating to /produk");
        localStorage.setItem("isLogin", "true");
        router.push("/produk");
    };
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={handleLogin}>Login ke Produk (Imperatif)</button> <br />
            <Link href="/auth/register">Login ke Register (Link)</Link>
        </div>
    );
};

export default halamanLogin;