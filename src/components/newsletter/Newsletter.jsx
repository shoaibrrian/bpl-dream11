import bgShadow from '../../assets/bg-shadow.png'
const Newsletter = () => {
    return (
        <div className="max-w-7xl h-80 py-20 text-center rounded-3xl mt-56" style={{ backgroundImage: `url(${bgShadow})` }}>
            <h2 className='text-3xl font-bold mb-4'>Subscribe to our Newsletter</h2>
            <p className='font-medium text-xl mb-6'>Get the latest updates and news right in your inbox!</p>
            <input className='border border-[rgba(19,19,19,0.4)] rounded-xl px-7 py-4 text-lg' type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
        </div>
    );
};

export default Newsletter;