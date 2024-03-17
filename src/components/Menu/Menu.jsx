import "./styles.scss";

export const Menu = (props) => {
    const textColor = {
        color: props.color,
    };

    return (
        <div className="menu">
            <a href="/" style={textColor}>
                НОВИНКИ
            </a>
            <a href="/" style={textColor}>
                ЧОЛОВІКИ
            </a>
            <a href="/" style={textColor}>
                ЖІНКИ
            </a>
            <a href="/" style={textColor}>
                АКСЕСУАРИ
            </a>
            <a href="/" style={textColor}>
                АКЦІЇ
            </a>
        </div>
    );
};
