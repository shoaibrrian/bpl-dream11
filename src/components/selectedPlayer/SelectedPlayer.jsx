const SelectedPlayer = ({selectedPlayer}) => {
    const {image, name, role} = selectedPlayer;
    return (
        <div className="flex">
            <img src={image} alt="" />
            <div>
                <h2>{name}</h2>
                <p>{role}</p>
            </div>
        </div>
    );
};

export default SelectedPlayer;