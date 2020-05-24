/* creation d'un pomodoro
 * /src/components/pomodoro.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React, {useCallback} from "react";
import {SESSION_TIMER} from "../seed/constants";

import Display from "./display/display";
import Tools from "./tools/tools";
import useTimer from "../seed/hooks/use-timer";

const Pomodoro = () => {
    const [{seconds, running}, {setSeconds, setRunning}] = useTimer(
        SESSION_TIMER,
        false,
    );
    //ou setSeconds(Math.max(seconds-60,0));
    const handleMinus = useCallback(
        () => setSeconds(seconds < 60 ? 0 : seconds - 60),
        [seconds, setSeconds],
    );
    const handlePlus = useCallback(() => setSeconds(seconds + 60), [
        seconds,
        setSeconds,
    ]);
    const handleStartBreak = useCallback(() => setRunning(!running), [
        running,
        setRunning,
    ]);
    const handleReset = useCallback(() => setSeconds(SESSION_TIMER), [
        setSeconds,
    ]);
    return (
        <div className={["columns", "is-mobile", "is-centered"].join(" ")}>
            <div className={["column", "is-half"].join(" ")}>
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
