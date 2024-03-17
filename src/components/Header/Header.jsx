import "./styles.scss";
import { Menu } from "../Menu/Menu";
import { SearchPanel } from "../SearchPanel/SearchPanel";

export const Header = () => {
    return (
        <div className="header">
            <div className="topBlock">
                <div className="top">
                    <p className="num">098 900 09 09</p>
                    <p>Допомога</p>
                    <a href="/" className="signIn">
                        Увійти / Зареєструватися
                    </a>
                </div>
            </div>
            <div className="bottomBlock">
                <div className="bottom">
                    <div className="logo">IGNAT</div>
                    <Menu color="#343434" />
                    <SearchPanel />
                </div>
            </div>
        </div>
    );
};
