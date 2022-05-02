import React, { useState , useEffect} from 'react';
import Editable from '../components/Editable';
import randomWord from 'random-words';
import Game from '../../classes/Game';
import { useAppSelector } from '../redux/hooks';
const CurrentGame = () => {
  const [players, setPlayers] = useState([] as string[]);
  const [game, setGame] = useState(null as Game | null);
  const [changed, setChanged] = useState(false)
  
  useEffect(() =>{
    if(typeof window !== 'undefined'){
      // const gameName = window.localStorage.getItem('current-game') as string;
      // const players = JSON.parse(window.localStorage.getItem('players') as string)
      // setPlayers(players);
      // const g = JSON.parse(window.localStorage.getItem('game-object') as string)
      // console.log('Here2',g);
      // if(changed){
      //   console.log(game)
      //   game?.startRound(game.players)
      // }else{
      //   setChanged(true)
      //   setGame(g as Game);
      // }
    }
  },[game])
  const gameState = useAppSelector((state) => state.game.value);
  console.log(gameState)
    return (
      <div className='bg-slate-200 h-screen'>
      <p className="text-xl">{game?.name}</p>
      <p className="text-lg">Round: {game?.currentRound}</p>
      Rounds
      {game?.rounds?.map((round)=>{
        return <div>
          <p>{round?.number}</p>
        </div>
      })}
      <div>
        
      </div>
    </div>
  );

};

export default CurrentGame;
