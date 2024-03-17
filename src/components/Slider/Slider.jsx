import React from "react";
import { useState } from "react";
import "./styles.scss";
import { RightArrowForSliderProducts } from "../../icons/RightArrowForSliderProducts";
import { LeftArrowForSliderProducts } from "../../icons/LeftArrowForSliderProducts";

export const Slider = (props) => {
    const [numPage, setNumPage] = useState(0);

    const lastPage = Math.ceil(props.children.length / props.amountElements) - 1;
    const startIndex = numPage === 0 ? 0 : numPage * props.amountElements;
    const productsOnPage = props.children.slice(startIndex, startIndex + props.amountElements);

    const handleLeftArrowClick = () => {
        setNumPage(numPage === 0 ? 0 : numPage - 1);
    };

    const handleRightArrowClick = () => {
        setNumPage(numPage === lastPage ? lastPage : numPage + 1);
    };

    return (
        <div className="slider">
            <div className="top">
                <p style={{ fontWeight: props.weight }}>{props.title}</p>
                <div className="arrows">
                    <p>
                        {numPage + 1 < 10 ? `0${numPage + 1}` : numPage + 1} / {lastPage + 1 < 10 ? `0${lastPage + 1}` : lastPage + 1}
                    </p>
                    <div className="leftArrow arrow" onClick={handleLeftArrowClick}>
                        <LeftArrowForSliderProducts color={numPage === 0 ? "#959595" : "#343434"} />
                    </div>
                    <div className="rightArrow arrow" onClick={handleRightArrowClick}>
                        <RightArrowForSliderProducts color={numPage === lastPage ? "#959595" : "#343434"} />
                    </div>
                </div>
            </div>
            <div className="products">
                {React.Children.map(productsOnPage, (child, index) => {
                    return <div key={index}>{child}</div>;
                })}
            </div>
        </div>
    );
};
