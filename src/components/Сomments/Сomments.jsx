import { Slider } from "../Slider/Slider";
import { Comment } from "../Comment/Comment";

import "./styles.scss";

export const Comments = () => {
    const comments = [
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
        {
            profileImage: "/sporting-store/img/profileIcon.png",
            stars: 4,
            name: "Жора Ремінгтон",
            text: "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...",
        },
    ];

    return (
        <div className="comments">
            <Slider title="Відгуги наших клієнтів" weight={400} amountElements={4}>
                {comments.map((item, index) => {
                    return <Comment key={index} comment={item} />;
                })}
            </Slider>
        </div>
    );
};
