import bannerMain from '../../assets/banner-main.png'
import bgShadow from '../../assets/bg-shadow.png'

const Banner = ({ handleAddCoins }) => {
    return (
        <div className='text-center space-y-6 bg-black py-16 rounded-3xl mb-20 bg-cover bg-no-repeat'
            style={{ backgroundImage: `url(${bgShadow})` }}
        >
            <img className='mx-auto block' src={bannerMain} alt="" />
            <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl text-white font-medium'>Beyond Boundaries Beyond Limits</p>
            <button
                onClick={() => { handleAddCoins() }}
                className="text-base font-bold bg-[#E7FE29] px-5 py-3.5 rounded-xl outline-2 outline-[#E7FE29] outline-offset-8 cursor-pointer">Claim Free Credit
            </button>


        </div>
    );
};

export default Banner;