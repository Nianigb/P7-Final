
// eslint-disable-next-line
import style from "./Banner.css";

const Banner = (props) => {
    return (
        <div
            className="banner"
            style={{
                height: `${props.height}px`
            }}
        >
            <img
                className="banner_img"
                style={{
                    objectPosition: `${props.objectPosition}`
                }}
                src={props.image} alt="Bannière"
            />
            <p>{props.text}</p>
        </div>
    );
};

export default Banner;