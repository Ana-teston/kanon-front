import React from 'react'
import { Game } from '../../App'
import Card from '../card/card.component'
import './games-list.styles.css'

interface GamesListProps {
  games: Game[]
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <div className="grid-container">
      {games.map((game) => (
        <Card key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GamesList
