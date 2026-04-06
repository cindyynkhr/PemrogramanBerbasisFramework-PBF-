import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/product.type";

const halamanProdukStatic = (props: { products: ProductType[] }) => {
    const { products } = props;

    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    );
}

export default halamanProdukStatic;

export async function getStaticProps() {
    try {
        const res = await fetch('http://127.0.0.1:3000/api/product', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response: { data: ProductType[] } = await res.json();

        return {
            props: {
                products: response.data,
            },
            revalidate: 10
        };
    } catch (error) {
        // Fallback jika API tidak accessible saat build
        return {
            props: {
                products: [],
            },
            revalidate: 10
        };
    }
}