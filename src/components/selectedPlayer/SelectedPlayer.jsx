const SelectedPlayer = ({selectedPlayer}) => {
    const {image, name, battingStyle} = selectedPlayer;
    return (
        <div className="flex p-6 border border-[rgba(19,19,19,0.1)] rounded-2xl items-center gap-6 mb-4">
            <img className="w-20 h-20 object-cover rounded-2xl" src={image} alt="" />
            <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="text-base text-[rgba(19,19,19,0.6)]">{battingStyle}</p>
            </div>
        </div>
    );
};

export default SelectedPlayer;