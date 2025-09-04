import { useState, useEffect } from "react";
import Player from "../player/Player";

const Players = () => {

    const [players, setPlayers] = useState([])
    const [showSelected, setShowSelected] = useState(false);

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data.players))
    }, [])

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold ">Available Players {players.length} </h2>
                <div className="flex items-center border border-[rgba(19,19,19,0.1)] rounded-xl overflow-hidden w-max">
                    <button
                        className={`px-7 py-3.5 text-base font-bold cursor-pointer transition-colors duration-200 ${!showSelected ? "bg-[#E7FE29]" : "bg-white"
                            }`}
                        onClick={() => setShowSelected(false)}
                    >
                        Available
                    </button>

                    {/* separator*/}
                    <div className="w-[1px] h-13 bg-[rgba(19,19,19,0.1)]"></div>

                    <button
                        className={`px-7 py-3.5 text-base font-bold cursor-pointer transition-colors duration-200 ${showSelected ? "bg-[#E7FE29]" : "bg-white"
                            }`}
                        onClick={() => setShowSelected(true)}
                    >
                        Selected
                    </button>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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