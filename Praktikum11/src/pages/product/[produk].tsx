import { useRouter } from "next/router";
import fetcher from "@/utils/swr/fetcher";
import useSWR from "swr";
import { use } from "react";
import DetailProduk from "@/views/detailProduct";

const HalamanProduk = () => {
    //const Router = useRouter();
    //console.log(Router);
    const { query } = useRouter();
    const { data, error, isLoading } = useSWR(`/api/produk/${query.produk}`,fetcher);
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading product</div>;
    if (!data?.data) return <div>Product not found</div>;
    
    return (
        <div>
            <DetailProduk product={data.data} />
        </div>
    );  
};

export default HalamanProduk;

