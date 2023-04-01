const RegistrationForm = () => {
    return (
        <div className="form registrations-form">
            <form>
                <div className="form__row">
                    <label htmlFor="register-name" className="form__label">
                        Name
                    </label>
                    <div className="form__field">
                        <input
                            type="text"
                            id="register-name"
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <label htmlFor="register-email" className="form__label">
                        Email
                    </label>
                    <div className="form__field">
                        <input
                            type="email"
                            id="register-email"
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <label htmlFor="register-password" className="form__label">
                        Password
                    </label>
                    <div className="form__field">
                        <input
                            type="password"
                            id="register-password"
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <label
                        htmlFor="register-confirm-password"
                        className="form__label"
                    >
                        Confirm Password
                    </label>
                    <div className="form__field">
                        <input
                            type="password"
                            id="register-confirm-password"
                            className="form__input"
                        />
                    </div>
                </div>
                <div className="form__row">
                    <button className="button button-primary form__button">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
