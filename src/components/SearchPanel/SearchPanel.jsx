import "./styles.scss";
import { LensIcon } from "../../icons/LensIcon";
import { HeartIcon } from "../../icons/HeartIcon";
import { BasketIcon } from "../../icons/BasketIcon";

export const SearchPanel = () => {
    return (
        <div className="searchPanel">
            <div className="search">
                <LensIcon />
                <input type="text"></input>
            </div>
            <div className="heart">
                <HeartIcon />
            </div>
            <div className="basket">
                <BasketIcon />
            </div>
        </div>
    );
};
