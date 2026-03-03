import { useRouter } from 'next/router';

const halamanKategori = () => {
    const { query } = useRouter();
    const slugArray = Array.isArray(query.slug) ? query.slug : [];

    return (
        <div>
            <h1>Category Slug</h1>
            {slugArray.length > 0 ? (
                <ul>
                    {slugArray.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>Tidak ada parameter</p>
            )}
        </div>
    );
}

export default halamanKategori;