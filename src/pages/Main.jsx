import { Header } from "../components/Header/Header";
import { HeaderSlider } from "../components/HeaderSlider/HeaderSlider";
import { Body } from "../components/Body/Body";
import { Footer } from "../components/Footer/Footer";

export const Main = () => {
    return (
        <div className="main">
            <Header />
            <HeaderSlider />
            <Body />
            <Footer />
        </div>
    );
};
