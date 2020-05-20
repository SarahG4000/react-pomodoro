/* creation d'un pomodoro
 * /src/components/pomodoro.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React, {useState} from "react";
import {SESSION_TIMER} from "../seed/constants";

import Display from "./display/display";

const Pomodoro = () => {
    const [timer] = useState([SESSION_TIMER]);
    const [running] = useState(false);
    return (
        <div>
            <Display seconds={timer} running={running} />
        </div>
    );
};

export default Pomodoro;
