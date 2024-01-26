import React from 'react';
import { Game } from '../../App';
import './card.styles.css';

type CardProps = {
    game: Game;
};

const Card: React.FC<CardProps> = ({ game }) => {
    const { id, title, providerName, thumb, startUrl } = game;

    // Check if thumb is defined before accessing its properties
    const imageUrl = thumb && thumb.url;
    const imageUrlDefault =
        'https://images.unsplash.com/photo-1554104365-0338ddaf81f4?q=80&w=280&h=280&auto=format&fit=crop&crop=faces&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    const handleClick = () => {
        if (startUrl) {
            // If startUrl exists, open it in a new page
            window.open(startUrl, '_blank');
        } else {
            // If startUrl doesn't exist, show an alert
            alert('This game is not available in your country.');
        }
    };

    const cardStyle = {
        boxShadow: startUrl ? '0 0 10px orange' : '0 0 10px blue',
        cursor: startUrl ? 'pointer' : 'not-allowed',
    };

    return (
        <div className="game-card" onClick={handleClick} style={cardStyle}>
            <div className="card-image" key={id}>
                {imageUrl ? (
                    <img src={imageUrl} alt={title} />
                ) : (
                    <img src={imageUrlDefault} width={280} height={280} alt={title} />
                )}
            </div>
            <div className="card-content" key={id}>
                <span className="title">{title}</span>
                <p className={'category'}>{providerName}</p>
            </div>
        </div>
    );
};

export default Card;
