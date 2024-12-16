import React from 'react';
import styles from "./css/CustomNight.module.css"

import Freddy from "./media/Textures/CustomNight/freddy.png";
import Bonnie from "./media/Textures/CustomNight/bonnie.png";
import Chica from "./media/Textures/CustomNight/chica.png";
import Foxy from "./media/Textures/CustomNight/foxy.png";

import { GoldenFreddyJumpscare } from "./components/Images";

const images = {
    Freddy,
    Bonnie,
    Chica,
    Foxy
}

const AnimatronicContainer = (props) => {
    const { range, changeRange, character } = props;

    return (
        <div className={styles.animatronic}>
            <img
                alt="Five Nights At Freddy's"
                src={images[character]}
                title={character}
                alt={character}
            />

            <div className={styles.range_buttons}>
                <button onClick={() => { changeRange(-range, character) }}> 0 </button>
                <button onClick={() => { changeRange(-1, character) }} disabled={range === 0}> {"<"} </button>
                <span> {range} </span>
                <button onClick={() => { changeRange(+1, character) }} disabled={range === 20}> {">"} </button>
                <button onClick={() => { changeRange(+20 - range, character) }}> 20 </button>
            </div>
        </div>
    )
};

const CustomNight = ({ state, setStart, hourLength, setHourLength }) => {
    const [goldenFreddyJumpscare, setGoldenFreddyJumpscare] = React.useState(false);
    const changeMode = (value) => {
        let animatronics = {};

        switch (value) {
            case "EASY":
                animatronics = { Bonnie: 2, Freddy: 2, Chica: 2, Foxy: 2 };
                break;
            case "NORMAL":
                animatronics = { Bonnie: 10, Freddy: 10, Chica: 10, Foxy: 10 };
                break;
            case "HARD":
                animatronics = { Bonnie: 15, Freddy: 15, Chica: 15, Foxy: 15 };
                break;
            case "IMPOSSIBLE":
                animatronics = { Bonnie: 20, Freddy: 20, Chica: 20, Foxy: 20 };
                break;
            default:
                return;
        }

        state.setStages((stages) => ({ ...animatronics, mode: value }));
    };

    const changeRange = (value, character) => {
        const handleValue = (state, value) =>
            (state === 0 && value < 0) || (state === 20 && value > 0) ? state : state + value

        state.setStages((stages) => ({ ...stages, mode: "CUSTOM", [character]: handleValue(stages[character], value) }));
    }

    const hasWon = (mode) => {
        const victories = JSON.parse(localStorage.getItem("victories")) || {};
        return victories[mode] || " ";
    }

    const handleStart = () => {
        if (
            state.ranges.Freddy === 1 &&
            state.ranges.Bonnie === 9 &&
            state.ranges.Chica === 8 &&
            state.ranges.Foxy === 7
        ) {
            return setGoldenFreddyJumpscare(true);
        }
        setStart(true);
    }

    if (goldenFreddyJumpscare) return <GoldenFreddyJumpscare setGoldenFreddy={setGoldenFreddyJumpscare} />;

    return (
        <div className={styles.custom_night_container}>
            <a href="https://github.com/dorukyum/FNAF-Web" target="_blank" className={styles.github_icon}>
                <img alt="GitHub" src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" width="50" height="50" />
            </a>

            <h1>{"Five Nights at Freddy's Web"}</h1>

            <div className={styles.animatronics_container}>
                <AnimatronicContainer character={"Freddy"} range={state.ranges.Freddy} {...{ changeRange }} />
                <AnimatronicContainer character={"Bonnie"} range={state.ranges.Bonnie} {...{ changeRange }} />
                <AnimatronicContainer character={"Chica"} range={state.ranges.Chica} {...{ changeRange }} />
                <AnimatronicContainer character={"Foxy"} range={state.ranges.Foxy} {...{ changeRange }} />
            </div>

            <div className={styles.start_screen} style={{ margin: "2% auto 1% auto" }}>
                <button className={styles.ready_button} onClick={handleStart}>
                    READY {"▶"}
                </button>
            </div>

            <div className={styles.start_screen}>
                <button onClick={() => {
                    changeMode("EASY")
                }} data-selected={state.ranges.mode === "EASY"}>
                    EASY {hasWon("EASY")}
                </button>
                <button onClick={() => {
                    changeMode("NORMAL")
                }} data-selected={state.ranges.mode === "NORMAL"}>
                    NORMAL {hasWon("NORMAL")}
                </button>
                <button onClick={() => {
                    changeMode("HARD")
                }} data-selected={state.ranges.mode === "HARD"}>
                    HARD {hasWon("HARD")}
                </button>
                <button onClick={() => {
                    changeMode("IMPOSSIBLE")
                }} data-selected={state.ranges.mode === "IMPOSSIBLE"}>
                    IMPOSSIBLE {hasWon("IMPOSSIBLE")}
                </button>
            </div>

            <div className={styles.start_screen}>
                <button onClick={() => {
                    setHourLength(45000)
                }} data-selected={hourLength === 45000}>
                    SHORT (60s)
                </button>
                <button onClick={() => {
                    setHourLength(89000)
                }} data-selected={hourLength === 89000}>
                    DEFAULT (89s)
                </button>
                <button onClick={() => {
                    setHourLength(120000)
                }} data-selected={hourLength === 120000}>
                    LONG (120s)
                </button>
            </div>

            <footer className={styles.footer}>
                <p>Made by Wendell de Sousa & Developed by Dorukyum</p>
                {/* <p>Five Nights at Freddy's © Scott Cawthon</p> */}
            </footer>
        </div>
    )
};

export default CustomNight;
