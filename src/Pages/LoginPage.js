import { Link } from "react-router-dom";
import { MainLayout } from "../Layouts";
import { LoginForm } from "../Components/Forms/Login";

const LoginPage = () => {
    return (
        <MainLayout>
            <h1>Login or Register</h1>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="title-secondary">Login to your account</p>
                    <LoginForm />
                </div>
                <div className="col-12 col-sm-6">
                    <p className="title-secondary">Register new account</p>
                    <Link
                        to="/registration-page"
                        className="button button-primary"
                    >
                        Registration
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
