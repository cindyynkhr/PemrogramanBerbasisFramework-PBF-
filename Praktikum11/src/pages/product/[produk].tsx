import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import { use } from "react";
import DetailProduk from "@/views/detailProduct";
import { ProductType } from "@/types/product.type";

const HalamanProduk = ({ product }: { product: ProductType }) => {
    return (
        <div>
            <DetailProduk product={product} />
        </div>
    );  
};

export default HalamanProduk;

export async function getServerSideProps({ params }: { params: { produk: string } }) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.produk}`);
    const response = await res.json();
    // console.log("Data produk yang diambil dari API:", response);
    return {
        props: {
            product: response.data,
        },
    };
}

