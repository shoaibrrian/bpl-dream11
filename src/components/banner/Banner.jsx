import bannerMain from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='text-center space-y-6'>
            <img className='mx-auto block' src={bannerMain} alt="" />
            <h1 className='text-4xl font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl font-medium'>Beyond Boundaries Beyond Limits</p>
            <button className="text-base font-bold bg-[#E7FE29] px-5 py-3.5 rounded-xl outline-2 outline-[#E7FE29] outline-offset-8 cursor-pointer">Claim Free Credit
            </button>


        </div>
    );
};

export default Banner;