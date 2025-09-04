import { FaUserCircle } from "react-icons/fa";
const Player = ({ player }) => {
    const { name, image, country, role, battingStyle, price, flag } = player;

    return (
        <div className="p-6 border border-[rgba(19,19,19,0.1)] rounded-2xl space-y-4">
            <img className="w-96 rounded-2xl" src={image} alt="" />
            <div className="flex items-center gap-3">
                <FaUserCircle className="text-2xl" />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img className="w-8 h-5 object-cover" src={flag} alt="" />
                    <p className="text-base text-[rgba(19,19,19,0.5)]">{country}</p>
                </div>
                <p className="text-sm bg-[rgba(19,19,19,0.05)] rounded-lg px-4 py-2.5">{role}</p>
            </div>
            <p className="text-base font-semibold">{battingStyle}</p>
            <div className="flex justify-between items-center">
                <p className="text-base font-semibold">Price: ${price}</p>
                <button  className="text-sm border border-[rgba(19,19,19,0.1)] rounded-lg px-4 py-2.5 cursor-pointer hover:bg-[rgba(19,19,19,0.05)]">Choose Player</button>
            </div>
        </div>
    );
};

export default Player;