import { Header } from "../Components/Global/Header";
import { Footer } from "../Components/Global/Footer";
import { MainMenu } from "../Components/Menu";

const MainLayout = ({ children }) => {
    return (
        <div className="main">
            <Header />

            <MainMenu />

            <div className="container">
                <main className="main__content">{children}</main>
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;
