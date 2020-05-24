/* creation d'un pomodoro
 * /src/components/tools/button.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React from "react";
import PropTypes from "prop-types";

const Button = ({label, title, disabled = false, onClick}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={["button", "is-primary", "is-medium", "is-fullwidth"].join(
            " ",
        )}
        type={"button"}
        title={title || label}>
        {label}
    </button>
);

Button.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

export default Button;
