import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const halamanToko = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { query } = router;

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
        document.cookie = "isLogin=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router.push("/auth/login");
    };

    return (
        <div>
            <h1>Halaman Toko Cindy</h1>
            {/*<p>Toko: {`${query.slug && query.slug[0]+"-"+ query.slug[1]}`}</p>*/}
            <p>Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}</p> 
            <p>Kategori: {query.slug ? query.slug[0]:"Semua Kategori"}</p>
            <button onClick={handleLogout}>Kembali ke Login</button>
        </div>
    );
}

export default halamanToko;