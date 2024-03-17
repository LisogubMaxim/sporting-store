import "./styles.scss";
import { Like } from "../../icons/Like";

export const Product = (props) => {
    return (
        <div className="product">
            <div className="image">
                <img src={props.product.image} alt="img"></img>
                <div className="like">
                    <Like />
                </div>
            </div>
            <div className="description">
                <div className="name">{props.product.name}</div>
                <div className="category">{props.product.category}</div>
                <div className="description">{props.product.description}</div>
                <div className="price">{props.product.price}</div>
            </div>
        </div>
    );
};
