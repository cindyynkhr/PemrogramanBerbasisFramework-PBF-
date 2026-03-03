import { useRouter } from "next/router";

const HalamanProduk = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Produk: <strong>{id}</strong></p>
        </div>
    );
};

export default HalamanProduk;
    