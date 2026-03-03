import TampilanProduk from "../views/product";

type ProductType = {
    id: string;
    name: string;
    price: number;
    images: string;  // Sesuai dengan Firebase
    category: string;
};

const halamanProdukServer = ({products}: {products: ProductType[]}) => {
    return (
        <div>
            <h1>Halaman Produk Server by Cindy</h1>
            <TampilanProduk products={products}/>
        </div>
    );
};

export default halamanProdukServer;

//Fungsi getServerSideProps untuk mengambil data produk dari API
export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/produk');
    const respone = await res.json();
    //console.log("Data produk yang diambil dari API:", respone);
    return {
        props: {
            products: respone.data, //Pastikan untuk memberikan nilai default juka data tersedia
        },
    };
}