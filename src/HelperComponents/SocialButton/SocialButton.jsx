import React from "react";
import style from "./SocialButton.module.css";

const SocialButton = ({ link, text }) => {
    return (
        <div className={style.button}>
        <a href={link} target="_blank" rel="noreferrer">
            <button>{text}</button>
        </a>
        </div>
    );
}

export default SocialButton;