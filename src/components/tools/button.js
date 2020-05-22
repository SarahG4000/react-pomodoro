/* creation d'un pomodoro
 * /src/components/tools/button.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React from "react";
import PropType from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={[
            "button",
            "is-success",
            "is-outlined",
            "is-large",
            "is-fullwidth",
        ].join(" ")}
        type={"button"}
        title={title || label}>
        {label}
    </button>
);

Button.prototype = {
    label: PropType.string.isRequired,
    title: PropType.string,
    disabled: PropType.bool,
    onClick: PropType.func.isRequired,
};

export default Button;
