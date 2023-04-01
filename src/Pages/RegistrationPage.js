import { MainLayout } from "../Layouts";
import { RegistrationForm } from "../Components/Forms/Registration";
import { Banner } from "../Components/Banner";
import RegistrationBanner from "../imgs/banners/registration-banner.jpg";

const RegistrationPage = () => {
    return (
        <MainLayout>
            <h1>Register New Account</h1>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="title-secondary">Personal Data</p>
                    <RegistrationForm />
                </div>
                <div className="col-12 col-sm-6">
                    <Banner
                        bannerImgSrc={RegistrationBanner}
                        bannerImgAlt="Registration Banner"
                        bannerImgTitle="Registration Banner"
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default RegistrationPage;
