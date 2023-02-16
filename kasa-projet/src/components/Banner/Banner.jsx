
// eslint-disable-next-line
import style from "./Banner.css";

const Banner = (banner) => {
    return (
        <div
            className="banner"
            style={{
                height: `${banner.height}px`
            }}
        >
            <img
                className="banner_img"
                style={{
                    objectPosition: `${banner.objectPosition}`
                }}
                src={banner.image} alt="Bannière"
            />
            <p>{banner.text}</p>
        </div>
    );
};

export default Banner;