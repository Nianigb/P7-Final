// eslint-disable-next-line
import style from "./Spinner.css";

const Spinner = (props) => {
    return (
        <div className="spinner_wrapper">
            <div className="lds_spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;