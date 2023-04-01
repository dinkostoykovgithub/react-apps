import { MainLayout } from "../Layouts";
import { Banner } from "../Components/Banner";
import HomeBanner from "../imgs/banners/placeholder-banner.webp";

const HomePage = () => {
    return (
        <MainLayout>
            <Banner
                bannerImgSrc={HomeBanner}
                bannerImgAlt="Homepage Banner"
                bannerImgTitle="Homepage Banner"
            />
        </MainLayout>
    );
};

export default HomePage;
