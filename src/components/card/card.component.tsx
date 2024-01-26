import React from 'react';
import { Game } from "../../App";
import './card.styles.css';

type cardProps = {
    game: Game;
};

const Card = ({ game }: cardProps) => {
    const { id, slug, title, providerName, thumb } = game;

    // Check if thumb is defined before accessing its properties
    const imageUrl = thumb && thumb.url;

    return (
        <div className="game-card">
            <div className="card-image" key={id}>
                {imageUrl ? (
                    <img src={imageUrl} alt={title} />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="card-content" key={id}>
                <span className="title">{title}</span>
                <p className={"category"}>{providerName}</p>
            </div>
        </div>
    );
};


export default Card;
