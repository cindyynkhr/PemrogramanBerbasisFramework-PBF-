import Link from "next/link";
import styles from './register.module.scss';

const halamanRegister = () => {
    return (
        <div className={styles.login}>
             <h1 className="text-3xl font-bold" style={{color: '#fff'}}>Halaman Register Cindy</h1>
            <Link href="/auth/login">Ke Halaman Login</Link>
        </div>
    );
};

export default halamanRegister;