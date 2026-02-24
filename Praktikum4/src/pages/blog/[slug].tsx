import { useRouter } from "next/router";

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!router.isReady) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Halaman Blog Cindy</h1>
            <p>Slug: <strong>{slug}</strong></p>
        </div>
    );
};

export default BlogDetail;
