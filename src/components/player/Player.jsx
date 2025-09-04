const Player = ({ player }) => {
    const { name, image, country, role, battingStyle, price } = player;

    return (
        <div>
            <img className="w-96" src={image} alt="" />
            <h2>{name}</h2>
            <div className="flex justify-between">
                <p>{country}</p>
                <p>{role}</p>
            </div>
            <p>{battingStyle}</p>
            <div>
                <p>Price: ${price}</p>
                <button>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;