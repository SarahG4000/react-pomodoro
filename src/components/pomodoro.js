/* creation d'un pomodoro
 * /src/components/pomodoro.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React, {useState, useCallback} from "react";
import {SESSION_TIMER} from "../seed/constants";

import Display from "./display/display";
import Tools from "./tools/tools";

const Pomodoro = () => {
    const [seconds, setSeconds] = useState([SESSION_TIMER]);
    const [running] = useState(false);
    //ou setSeconds(Math.max(seconds-60,0));
    const handleMinus = useCallback(
        () => setSeconds(seconds < 60 ? 0 : seconds - 60),
        [seconds, setSeconds],
    );
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [
        seconds,
        setSeconds,
    ]);
    const handleStartBreak = () => console.warn("handleStartBreak");
    const handleReset = useCallback(() => setSeconds(SESSION_TIMER), [
        setSeconds,
    ]);
    return (
        <div>
            <div>
                <Display seconds={seconds} running={running} />
                <Tools
                    running={running}
                    onMinus={handleMinus}
                    onPlus={handlePlus}
                    onStartBreak={handleStartBreak}
                    onReset={handleReset}
                />
            </div>
        </div>
    );
};

export default Pomodoro;
