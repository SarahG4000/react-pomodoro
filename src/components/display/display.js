/* creation d'un pomodoro
 * /src/components/display/display.js - Display for app too
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */

import React from "react";
import PropTypes from "prop-types";

import Rendered from "./rendered";

const styles = {
    fontSize: "9rem",
    textAlign: "center",
};

const Display = ({seconds, running = false}) => {
    let separator = ":";

    if (running) {
        separator = seconds % 2 ? ":" : "";
    }
    return (
        <div style={styles}>
            <Rendered value={Math.floor(seconds / 60)} />
            <span>{separator}</span>
            <Rendered value={seconds % 60} />
        </div>
    );
};

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
    running: PropTypes.bool,
};

export default Display;
