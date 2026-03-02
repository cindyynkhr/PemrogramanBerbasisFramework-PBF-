import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <img src="/not-found.png" alt="404" className={styles.error_image} />
            <h1>404</h1>
            <h2>Halaman Tidak Ditemukan</h2>
            <p>Maaf Halaman yang Anda Cari Tidak Ada</p>
        </div>
    );
};  
export default Custom404;