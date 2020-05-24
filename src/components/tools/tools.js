/* creation d'un pomodoro
 * /src/components/tools/tools.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */

import React from "react";
import PropType from "prop-types";
import Button from "./button";
import {NBSP} from "../../seed/constants";

const Tools = ({running, onStartBreak, onReset, onPlus, onMinus}) => (
    <div className={"is-flex"}>
        <Button
            label={"-"}
            title={"Remove one minute"}
            disabled={running}
            onClick={onMinus}
        />
        {NBSP}
        <Button
            label={running ? "break" : "start"}
            onClick={onStartBreak}
            title={`${running ? "break" : "start"} the timer`}
        />
        {NBSP}
        <Button label={"Reset"} disabled={running} onClick={onReset} />
        {NBSP}
        <Button
            label={"+"}
            title={"add one minute"}
            disabled={running}
            onClick={onPlus}
        />
    </div>
);

Tools.propType = {
    running: PropType.bool,
    onStartBreak: PropType.func.isRequired,
    onReset: PropType.func.disabled,
    onPlus: PropType.func.isRequired,
    onMinus: PropType.func.isRequired,
};

export default Tools;
