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

const Display = ({seconds}) => (
    <div style={styles}>
        <Rendered value={Math.floor(seconds / 60)} />
        <span
            style={{
                opacity: seconds % 2 ? 0 : 1,
            }}>
            {":"}
        </span>
        <Rendered value={seconds % 60} />
    </div>
);

Display.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default Display;
