import "./styles.scss";
import { Stars } from "../../icons/Stars";

export const Comment = (props) => {
    return (
        <div className="commentBlock">
            <div className="comment">
                <div className="profile">
                    <img src={props.comment.profileImage} alt="img"></img>
                    <div className="starsAndName">
                        <div className="stars">
                            <Stars />
                        </div>
                        <div className="name">{props.comment.name}</div>
                    </div>
                </div>
                <div className="text">{props.comment.text}</div>
            </div>
        </div>
    );
};
