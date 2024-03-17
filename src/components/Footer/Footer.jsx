import "./styles.scss";
import { Instagram } from "../../icons/Instagram";
import { Viber } from "../../icons/Viber";
import { Telegram } from "../../icons/Telegram";
import { Menu } from "../Menu/Menu";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="line"></div>
            <div className="top">
                <div className="allContact">
                    <div className="contact">
                        <div className="title">Контакт - центр</div>
                        <p>098 900 09 09 </p>
                        <p>Пн - Пт 09:00 - 21:00</p>
                        <p>Пн - Пт 09:00 - 21:00</p>
                    </div>
                    <div className="socialMedia">
                        <div className="icon">
                            <Instagram />
                        </div>
                        <div className="icon">
                            <Viber />
                        </div>
                        <div className="icon">
                            <Telegram />
                        </div>
                    </div>
                </div>
                <div className="toBuyers">
                    <div className="title">Покупцям</div>
                    <p>Оплата і доставка</p>
                    <p>Повернення</p>
                    <p>Питання та відповіді</p>
                </div>
                <div className="personalOffice">
                    <div className="title">Особистий кабінет</div>
                    <p>Мої дані</p>
                    <p>Історія замовлень</p>
                    <p>Улюблені</p>
                    <p>Розсилки</p>
                </div>
                <div className="about">
                    <div className="title">Про компанію</div>
                    <p>Про нас</p>
                    <p>Новини</p>
                    <p>Стати партнером</p>
                    <p>Угода користувача</p>
                </div>
            </div>
            <div className="bottomBlock">
                <div className="bottom">
                    <Menu color="#ffffff" />
                    <div className="text">© 2022 — 2023 IGNAT. Усі права захищені.</div>
                </div>
            </div>
        </div>
    );
};
