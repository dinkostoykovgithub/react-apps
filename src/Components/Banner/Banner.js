const Banner = (props) => {
    return (
        <>
            {props.bannerImgSrc && (
                <section className="banner">
                    <img
                        className="banner_image"
                        src={props.bannerImgSrc}
                        alt={props.bannerImgAlt}
                        title={props.bannerImgTitle}
                    />
                </section>
            )}
        </>
    );
};

export default Banner;
