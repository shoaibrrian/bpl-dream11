import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({selectedPlayers, setShowSelected}) => {


    return (
        <div>
            {
                selectedPlayers.map(selectedPlayer => <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer>)
            }
            <button className="text-base font-bold bg-[#E7FE29] px-5 py-3.5 rounded-xl outline-2 outline-[#E7FE29] outline-offset-8 cursor-pointer hover:outline-white my-5"
            onClick={() => setShowSelected(false)}>Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;