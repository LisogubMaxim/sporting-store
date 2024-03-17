import { Product } from "../Product/Product";
import { Slider } from "../Slider/Slider";

export const HotProducts = () => {
    const products = [
        {
            image: "/img/product1.png",
            name: "Термобілизна для бодібілдерів",
            category: "Для чоловіків",
            description: "2 кольори",
            price: "4000 грн.",
        },

        {
            image: "/img/product2.png",
            name: "Майка для бодібілдерів",
            category: "Для жінок",
            description: "6 кольорів",
            price: "1100 грн.",
        },

        {
            image: "/img/product3.png",
            name: "Ланцюжок для бодібілдерів",
            category: "Аксесуари",
            description: "30 кг.",
            price: "2000 грн.",
        },

        {
            image: "/img/product1.png",
            name: "Термобілизна для бодібілдерів2",
            category: "Для чоловіків",
            description: "2 кольори",
            price: "4000 грн.",
        },

        {
            image: "/img/product2.png",
            name: "Майка для бодібілдерів2",
            category: "Для жінок",
            description: "6 кольорів",
            price: "1100 грн.",
        },

        {
            image: "/img/product3.png",
            name: "Ланцюжок для бодібілдерів2",
            category: "Аксесуари",
            description: "30 кг.",
            price: "2000 грн.",
        },

        {
            image: "/img/product1.png",
            name: "Термобілизна для бодібілдерів3",
            category: "Для чоловіків",
            description: "2 кольори",
            price: "4000 грн.",
        },

        {
            image: "/img/product2.png",
            name: "Майка для бодібілдерів3",
            category: "Для жінок",
            description: "6 кольорів",
            price: "1100 грн.",
        },
    ];

    return (
        <Slider title="Найгарячіші товари" weight={500} amountElements={3}>
            {products.map((item, index) => {
                return <Product key={index} product={item} />;
            })}
        </Slider>
    );
};
