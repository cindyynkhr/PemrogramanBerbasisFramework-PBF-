import { useRouter } from 'next/router';

const halamanToko = () => {
    const router = useRouter();
    console.log(router);
    //const { query} = useRouter();
    return (
        <div>
            <h1>Halaman Toko Cindy</h1>
        </div>
    );
}

export default halamanToko;