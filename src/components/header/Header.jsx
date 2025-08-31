import { BsCoin } from "react-icons/bs";
import profile from "../../assets/logo.png";
const Header = () => {
    return (
        <div className="flex justify-between items-center">
            <img src={profile} alt="" />
            <div className="flex items-center gap-10">
                <ul className="flex gap-10">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button className="flex items-center gap-2 border-2 rounded-lg p-2 border-gray-400">0 Coin <BsCoin className="text-yellow-500 text-xl font-bold" /></button>
            </div>
        </div>
    );
};

export default Header;