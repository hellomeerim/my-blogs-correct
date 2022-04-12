import React from "react";
import styles from "../Button/Button.module.css"
import classNames from "classnames";

const Button = ({myClass, handleClick, children}) => {
    return (
        <button
        className={classNames(styles.btn, styles[myClass])}
        onClick={handleClick}>{children}
        </button>
    );
};

export default Button;