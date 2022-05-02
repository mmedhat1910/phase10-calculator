import React, { useState } from 'react';
import Editable from '../components/Editable';
import randomWord from 'random-words';
import { useNavigate } from 'react-router-dom';
import Game from './../../classes/Game';
import Player from '../../classes/Player';



const NewGame = () => {

  const getPlayers = (p: string[]) => {
    let players: Player[] = [];
    p.map((player) => {
      players.push(new Player(player));
    });
    return players;
  };

  const [gameName, setGameName] = useState(randomWord());
  const [players, setPlayers] = useState(['Player 1', 'Player 2']);
  const navigate = useNavigate();
  return (
    <div className='bg-slate-200 h-screen'>
      <p className='text-xl'>Game - {gameName}</p>
      <div>
        <p className='text-xl'>Players</p>
        {players.map((player) => {
          return (
            <Editable
              value={player}
              onDone={(name) =>
                setPlayers(players.map((p) => (p === player ? name : p)))
              }
            />
          );
        })}
        {players.length < 6 && (
          <button
            disabled={players.length === 6}
            onClick={() => {
              if (players.length <= 6) {
                let newPlayer = `Player ${players.length + 1}`;
                setPlayers([...players, `Player ${players.length + 1}`]);
              }
            }}
          >
            Add Player
          </button>
        )}{' '}
        |{' '}
        {players.length > 2 && (
          <button
            onClick={() => {
              if (players.length > 2) {
                const newPlayers = players.filter(
                  (p, index) => index != players.length - 1
                );
                setPlayers(newPlayers);
              }
            }}
          >
            Remove player
          </button>
        )}
      </div>
      <button
        onClick={() => {
          window.localStorage.setItem(
            'current-players',
            JSON.stringify(players)
          );
          window.localStorage.setItem('current-game', gameName);
          const games = JSON.parse(window.localStorage.getItem('games') || '');
          if (games) {
            window.localStorage.setItem(
              'games',
              JSON.stringify([...games, gameName])
            );
          } else {
            window.localStorage.setItem('games', JSON.stringify([gameName]));
          }
          const players_objects = getPlayers(players);
          const newGame = new Game(gameName, players_objects);
          window.localStorage.setItem('game-object', JSON.stringify(newGame));
          navigate('/current', { replace: true });
        }}
      >
        Start Game
      </button>
    </div>
  );
};

export default NewGame;
