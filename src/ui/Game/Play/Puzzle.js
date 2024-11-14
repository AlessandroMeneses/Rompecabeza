import * as _ from "lodash";
import React, { useState, useEffect } from "react";
import { Map } from 'immutable';

import './Puzzle.css';

const Piece = ({ left, top, url, onClick, chunkWidth, chunkHeight, isDivided, x, y }) => {
    // Si la imagen está dividida, reducimos las piezas (por ejemplo, un 80% más pequeñas)
    const adjustedWidth = isDivided ? chunkWidth * 0.8 : chunkWidth;
    const adjustedHeight = isDivided ? chunkHeight * 0.8 : chunkHeight;

    const style = {
        width: adjustedWidth,
        height: adjustedHeight,
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${chunkWidth * x}px ${chunkHeight * y}px`,  // Ajuste el tamaño de la imagen de fondo
        backgroundColor: "#a0a0a0",
        margin: '2px',
        backgroundPositionX: `-${left}px`, // Cambiar la posición para mostrar la porción correcta
        backgroundPositionY: `-${top}px`,  // Cambiar la posición para mostrar la porción correcta
    };

    return <div style={style} onClick={onClick} />;
};

const Pivot = ({ chunkWidth, chunkHeight }) => {
    const style = {
        width: chunkWidth,
        height: chunkHeight,
        backgroundColor: "#ffffff55",
        margin: '2px',
    };

    return <div style={style} />;
};

export const Puzzle = ({ won, url, pieces, x, y, pivot, onSelectPiece }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const chunkWidth = isSmallScreen ? 400 / x : 600 / x; // Ajustamos el tamaño de las piezas en pantallas pequeñas
    const chunkHeight = isSmallScreen ? 400 / y : 600 / y;

    const chunksOfPieces = _.chunk(pieces, x);

    return (
        <div className="Puzzle">
            <div className="Pieces" style={{
                display: "grid",
                gridTemplateColumns: `repeat(${x}, ${chunkWidth}px)`,
                gridTemplateRows: `repeat(${y}, ${chunkHeight}px)`,
                gap: '2px'
            }}>
                {chunksOfPieces.flat().map((p) => (
                    Map()
                        .set(
                            true,
                            <Pivot
                                key={p}
                                chunkWidth={chunkWidth}
                                chunkHeight={chunkHeight}
                            />
                        )
                        .get(
                            pivot === p,
                            <Piece
                                key={p}
                                left={(p % x) * chunkWidth}
                                top={Math.floor(p / y) * chunkHeight}
                                url={url}
                                onClick={() => onSelectPiece(p)}
                                chunkWidth={chunkWidth}
                                chunkHeight={chunkHeight}
                                isDivided={isSmallScreen}
                                x={x}  // Pasamos 'x' como prop
                                y={y}  // Pasamos 'y' como prop
                            />
                        )
                ))}
            </div>
        </div>
    );
};

export default Puzzle;
