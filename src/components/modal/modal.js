/* creation d'un pomodoro
 * /src/components/modal/modal.js - modal fot timer
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */
import React from "react";
import PropTypes from "prop-types";
import {createPortal} from "react-dom";

import useTimer from "../../seed/hooks/use-timer";

import Button from "../tools/button";
import Display from "../display/display";

import {NBSP, SESSION_TIMER_PAUSE} from "../../seed/constants";

const containerStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    zIndex: 1000,
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(0,0,0,0.5)",
};

const Modal = ({show = false, onClose, onRestart}) => {
    if (!show) {
        return null;
    }

    const [{running, seconds}, {setRunning}] = useTimer(
        SESSION_TIMER_PAUSE,
        true,
        onRestart,
    );

    const stopThen = next => () => {
        setRunning(false);
        next();
    };

    return createPortal(
        <div style={containerStyles}>
            <div className={"box"}>
                <h4> {"It's over!"} </h4>
                <p> {"Please, Take a break. You've earned it.."} </p>
                <p>{"when the break is over a new timer will start."}</p>
                <Display seconds={seconds} running={running} />
                <div className={"is-flex"}>
                    <Button label={"Stop"} onClick={stopThen(onClose)} /> {NBSP}
                    <Button label={"Restart"} onClick={stopThen(onRestart)} />
                </div>
            </div>
        </div>,
        document.querySelector("#modals"),
    );
};

Modal.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onRestart: PropTypes.func.isRequired,
};

export default Modal;
