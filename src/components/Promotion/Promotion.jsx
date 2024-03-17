import "./styles.scss";

export const Promotion = () => {
    return (
        <div className="promotion">
            <div className="line"></div>
            <div className="title">Спіймай всі акції!</div>
            <p>
                Підписуйся на Email розсилку і отримуй інформацію про всі акції, які <br></br>будуть з`влятись у нашому магазині. А у
                нас їх багато :D
            </p>
            <div className="input">
                <input type="text" placeholder="введіть"></input>
                <div className="subscribeButton">Підписатись</div>
            </div>
        </div>
    );
};
