import Link from "next/link";
import { useRouter } from "next/router";

const halamanLogin = () => {
    const router = useRouter();
    const handleLogin = (destination: string) => {
        //logic login disini 
        console.log(`Button clicked, navigating to ${destination}`);
        localStorage.setItem("isLogin", "true");
        // Set cookie for server-side validation
        document.cookie = "isLogin=true; path=/";
        router.push(destination);
    };
    return (
        <div>
            <h1>Halaman Login</h1>
            <button onClick={() => handleLogin("/produk")}>Login ke Produk (Imperatif)</button> <br />
            <button onClick={() => handleLogin("/shop")}>Login ke Shop</button> <br />
            <Link href="/auth/register">Login ke Register (Link)</Link>
        </div>
    );
};

export default halamanLogin;