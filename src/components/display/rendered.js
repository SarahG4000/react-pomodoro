/* creation d'un pomodoro
 * /src/components/display/rendered.js - Display for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */

import React from "react";
import PropTypes from "prop-types";

const Rendered = ({value}) => <span>{`${value}`.padStart(2, "0")}</span>;

Rendered.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Rendered;
