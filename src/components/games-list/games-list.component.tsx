import React from "react";
import { Game } from "../../App";
import Card from "../card/card.component";
import "./games-list.styles.css";


type GamesListProps = {
    games: Game[];
};

const GamesList = ({ games }: GamesListProps) => {
    console.log('Games:', games);

    return (
        <div className="container grid-container">
            {games.map((game, idx) => {


                return <Card key={idx} game={game} />;
            })}
        </div>
    );
};

export default GamesList;
