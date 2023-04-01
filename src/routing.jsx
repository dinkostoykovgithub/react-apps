import { Suspense, lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage"));
const WeatherPage = lazy(() => import("./Pages/WeatherPage"));
const WorldTimePage = lazy(() => import("./Pages/WorldTimePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegistrationPage = lazy(() => import("./Pages/RegistrationPage"));

const Routing = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div />}>
                <Route path="/" exact component={HomePage} />
                <Route path="/weather-page" exact component={WeatherPage} />
                <Route
                    path="/world-time-page"
                    exact
                    component={WorldTimePage}
                />
                <Route path="/login-page" exact component={LoginPage} />
                <Route
                    path="/registration-page"
                    exact
                    component={RegistrationPage}
                />
            </Suspense>
        </BrowserRouter>
    );
};

export default Routing;
