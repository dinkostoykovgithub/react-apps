import { NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <ul className="navigation_items-holder">
                    <li className="navigation_item">
                        <NavLink
                            className="navigation_link"
                            exact={true}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="navigation_item">
                        <NavLink
                            className="navigation_link"
                            exact={true}
                            to="/weather-page"
                        >
                            Weather
                        </NavLink>
                    </li>
                    <li className="navigation_item">
                        <NavLink
                            exact={true}
                            className="navigation_link"
                            to="/world-time-page"
                        >
                            World Time
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default MainMenu;
