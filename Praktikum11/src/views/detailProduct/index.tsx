import { ProductType } from "@/types/product.type";
import styles from "./detailProduct.module.scss";

const DetailProduk = ({product}: {product: ProductType}) => {
    if (!product || !product.images) {
        return <div>Loading gambar...</div>;
    }
    
    return (
        <>
        <h1 className={styles.title}>Detail Produk</h1>
            <div className={styles.produkdetail}>
                <div className={styles.produkdetail_image}>
                    <img src={product.images} alt={product.name} />
                </div>

            <div className={styles.produkdetail_info}>
                <h1 className={styles.produkdetail_name}>{product.name}</h1>
                <p className={styles.produkdetail_category}>{product.category}</p>
                <p className={styles.produkdetail_price}>
                    Rp {product.price && product.price.toLocaleString("id-ID")}
                    </p>
            </div>
        </div>
        </>
    );
};

export default DetailProduk;