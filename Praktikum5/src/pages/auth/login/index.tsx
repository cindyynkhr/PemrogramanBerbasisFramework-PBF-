import Link from "next/link";
import { useRouter } from "next/router";
import styles from './login.module.css';

const HalamanLogin = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push('/produk');
    };
    return (
        <div className={styles.login}>
            <h1>Halaman Login</h1>
            {/*<button onClick={() => handleLogin("/produk")}>Login ke Produk (Imperatif)</button> <br />
            <button onClick={() => handleLogin("/shop")}>Login ke Shop</button> <br />*/}
            <button onClick={() => handleLogin()}>Login</button><br />
            <h1 style={{color:"red",border:"1px solid red",borderRadius:"5px", padding:"5px"}}>Belum Punya Akun</h1>
            <Link href="/auth/register">Login ke Register (Link)</Link>
        </div>
    );
};

export default HalamanLogin;