import Link from 'next/link';
import style from './register.module.scss';

const tampilanRegister = () => {
    return (
        <div className={style.register}>
            <h1 className={style.register_title}>Halaman Register</h1>
            <div className={style.register_form}>
                <form action="">
                    {/* Form Email */}
                    <div className={style.register_form_item}>
                        <label
                            htmlFor="email"
                            className={style.register_form_item_label}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Cindy@example.com"
                            className={style.register_form_item_input}
                        />
                    </div>

                    {/* Form Full Name */}
                    <div className={style.register_form_item}>
                        <label
                            htmlFor="fullName"
                            className={style.register_form_item_label}
                        >
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Cindy Nur Khoiriyah"
                            className={style.register_form_item_input}
                        />
                    </div>

                    {/* Form Password */}
                    <div className={style.register_form_item}>
                        <label
                            htmlFor="password"
                            className={style.register_form_item_label}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={style.register_form_item_input}
                        />
                    </div>

                    <button type="submit" className={style.register_form_item_button}>
                        Register
                    </button>
                </form>
                <p className={style.register_form_item_text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login</Link>
                </p>
            </div>
        </div>
    );
};

export default tampilanRegister;