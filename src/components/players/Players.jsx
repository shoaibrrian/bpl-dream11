import { useState, useEffect } from "react";
import Player from "../player/Player";

const Players = () => {

    const [players, setPlayers] = useState([])
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players))
    }, [])
    return (
        <div>
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">Available Players {players.length} </h2>
                <button className="bg-[#E7FE29] px-7 py-3.5 text-base font-bold rounded-xl">Available</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map(player => <Player
                    key={player.id}
                    player={player}
                ></Player>)
                }
            </div>
        </div>
    );
};

export default Players;