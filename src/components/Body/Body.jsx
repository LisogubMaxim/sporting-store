import "./styles.scss";
import { HotProducts } from "../HotProducts/HotProducts";
import { Promotion } from "../Promotion/Promotion";
import { Comments } from "../Сomments/Сomments";

export const Body = () => {
    return (
        <div className="body">
            <div className="secondBlock">
                <div>
                    <p className="titleText">
                        Ми знаємо, що сподобається
                        <br />
                        вашим “великим” друзям!
                    </p>
                    <p>
                        Обирай подарунок своїм друзями бодібілдерам із
                        <br />
                        нашою новою колекцію термобілизни “Big warm”
                    </p>
                    <div className="toCatalogButton">До каталогу</div>
                </div>
                <img src="/img/bodyImage.png" alt="img"></img>
            </div>
            <HotProducts />
            <Promotion />
            <Comments />
        </div>
    );
};
