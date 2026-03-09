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
    const res = await fetch('https://127.0.0.1:3000/api/produk');
    //const responese: ProducType[] = await res.json();
    const response: { data: ProductType[] } = await res.json();
    return {
        props: {
            products: response.data,
        },
        revalidate: 10, // Revalidate every 10 seconds
    };
}