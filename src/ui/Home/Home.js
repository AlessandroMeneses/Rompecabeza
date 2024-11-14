import React from "react";
import NewGame from "../Game/NewGame";
import imageSrc from "../../assets/puzzles/juegos43.png";

export const Home = () => (
    <div className="body11">
        <img src={imageSrc} alt="Decorative" className="moving-image" /> {/* Imagen a la izquierda */}
        <section className="content12">
            <section>
                <h2>Rompecabezas</h2>
            </section>
            <section className="gamearea">
                <NewGame />
            </section>
        </section>
    </div>
);
