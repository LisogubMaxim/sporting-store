import "./styles.scss";

export const Menu = (props) => {
    const textColor = {
        color: props.color,
    };

    return (
        <div className="menu">
            <p style={textColor}>НОВИНКИ</p>
            <p style={textColor}>ЧОЛОВІКИ</p>
            <p style={textColor}>ЖІНКИ</p>
            <p style={textColor}>АКСЕСУАРИ</p>
            <p style={textColor}>АКЦІЇ</p>
        </div>
    );
};
