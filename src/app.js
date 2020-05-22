/* creation d'un pomodoro
 * /src/app.js - container for app
 * code by sarahG4000 for becode formation
 * creation for montagne
 * merci leny pour cette bonne pratique,
 * ça me permet de mieux comprendre ce que je fais et de decouper monn code pour m'y retrouvée
 */

import React from "react";
import ReactDOM from "react-dom";

import Pomodoro from "./components/pomodoro";
import "bulma";

ReactDOM.render(<Pomodoro />, document.querySelector("#app"));
