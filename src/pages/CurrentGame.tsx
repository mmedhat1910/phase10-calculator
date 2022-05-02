import React, { useState , useEffect} from 'react';
import Editable from '../components/Editable';
import randomWord from 'random-words';
const CurrentGame = () => {
  const [gameName, setGameName] = useState('' as string);
  const [players, setPlayers] = useState([] as string[]);
  useEffect(() =>{
    if(typeof window !== 'undefined'){
      
    }
  },[])
  return (
    <div className='bg-slate-200 h-screen'>
      
    </div>
  );
};

export default CurrentGame;
