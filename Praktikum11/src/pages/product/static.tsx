import TampilanProduk from "../../views/product";
import { ProductType } from "../../types/product.type";

const halamanProdukStatic = (props:({products: ProductType[]})) => {
    const {products} = props;
    return(
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    )
}

export default halamanProdukStatic;

export async function getServerSideProps() {
    try {
        const res = await fetch("http://localhost:3000/api/produk");
        if (!res.ok) throw new Error("API response not ok");
        const data = await res.json();

        return {
            props: {
                products: data?.data || [],
            },
        };
    } catch (error) {
        console.error("Error fetching products:", error);
        return {
            props: {
                products: [],
            },
        };
    }
}