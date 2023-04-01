const LoginForm = () => {
    return (
        <div className="form login-form">
            <div className="form__row">
                <label htmlFor="login-email" className="form__label">
                    Email
                </label>
                <div className="form__field">
                    <input
                        type="email"
                        id="login-email"
                        className="form__input"
                    />
                </div>
            </div>
            <div className="form__row">
                <label htmlFor="login-password" className="form__label">
                    Password
                </label>
                <div className="form__field">
                    <input
                        type="password"
                        id="login-password"
                        className="form__input"
                    />
                </div>
            </div>
            <div className="form__row">
                <button
                    type="submit"
                    className="button button-primary form__button"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
