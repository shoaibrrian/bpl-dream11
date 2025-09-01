import { BsCoin } from "react-icons/bs";
import logo from "../../assets/logo.png";
const Header = () => {
    return (
        <div className="flex justify-between items-center mb-6">
            <img src={logo} alt="" />
            <div className="flex items-center gap-10">
                <ul className="flex gap-10 text-[rgba(19,19,19,0.7)]">
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