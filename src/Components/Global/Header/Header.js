import { Link, NavLink } from "react-router-dom";
import logo from "../../../imgs/logos/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="logo__image"
                            src={logo}
                            alt="Logo"
                            title="Logo"
                        />
                    </Link>
                </div>
                <div className="header__account-links">
                    <NavLink to="/login-page" className="header__link">
                        Login
                    </NavLink>
                    <NavLink to="/registration-page" className="header__link">
                        Register
                    </NavLink>
                </div>
            </div>
        </header>
    );
};

export default Header;
