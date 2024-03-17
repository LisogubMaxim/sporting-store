import { useState } from "react";
import "./styles.scss";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";

export const HeaderSlider = () => {
    const images = ["/sporting-store/img/slider.png", "/sporting-store/img/slider.png", "/sporting-store/img/slider.png"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="headerSlider">
            <div className="slid">
                <div className="images">
                    {images.map((item, index) => (
                        <img
                            key={index}
                            src={item}
                            alt={`Img ${index}`}
                            className={index === currentIndex ? "active" : index > currentIndex ? "next" : "prev"}
                        />
                    ))}
                </div>

                <div className="arrows">
                    <div className="arrow left" onClick={handleLeftArrowClick}>
                        <ArrowLeftIcon />
                    </div>
                    <div className="arrow right" onClick={handleRightArrowClick}>
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>
            <div className="indicators">
                {images.map((item, index) => (
                    <span key={index} className={index === currentIndex ? "indicator activeIndicator" : "indicator"}></span>
                ))}
            </div>
        </div>
    );
};
