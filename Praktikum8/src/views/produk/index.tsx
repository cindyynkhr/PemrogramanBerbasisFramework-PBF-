type ProductType = {
    id: string;
    name: string;
    price: number;
    images: string;
    category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
    return (
        <div>
            <h1>Daftar Produk</h1>
            {products.map((products: ProductType) => (
                <div key={products.id}>
                    <h2>nama :{products.name}</h2>
                    <p>Harga: {products.price}</p>
                    <img src={products.images} alt={products.name} width={200} height={200} style={{objectFit: "cover"}} />
                    <p>kategori: {products.category}</p>
                </div>
            ))}
        </div>
    );
};

export default TampilanProduk;