import React from "react";
import PropTypes from 'prop-types';
import SelectPuzzle from "./SelectPuzzle";

import "./Menu.css"

import giro from '../../../assets/puzzles/giro.png'
import semaforo from '../../../assets/puzzles/semaforo.png'
import stop from '../../../assets/puzzles/stop.png'
import inv from '../../../assets/puzzles/inv.png'
import siga from '../../../assets/puzzles/siga.png'
import cicla from '../../../assets/puzzles/cicla.png'
import {SelectDifficulty} from "./SelectDififculty";

const bank = [
    {id: "1", url:  giro},
    {id: "2", url:  semaforo}, 
    {id: "3", url:  stop},
    {id: "4", url:  siga},
    {id: "5", url:  cicla},
    {id: "6", url:  inv},
];

export const Menu = ({difficulty, play, selectedPuzzle, ...actions}) => {
    return (
        <div className={"Menu"}>
            <SelectPuzzle
                allowCustom={false}
                onSelect={actions.selectPuzzle}
                selected={selectedPuzzle} bank={bank} />

            <SelectDifficulty onSelect={actions.selectDifficulty}
                activeValue={difficulty}
                options={["facil", "medio", "dificil", "experto"]}/>
        </div>
    );
};

Menu.propTypes = {
    selectDifficulty: PropTypes.func.isRequired,
    selectPuzzle: PropTypes.func.isRequired,

    play: PropTypes.bool,
    selectedPuzzle: PropTypes.any,
    difficulty: PropTypes.any
};

export default Menu;