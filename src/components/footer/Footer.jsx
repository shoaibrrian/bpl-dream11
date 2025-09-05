import FooterPhoto from '../../assets/logo-footer.png';

const Footer = () => {
    return (
        <div className='bg-[#06091A] text-white mt-8 w-full'>
            <div className='flex justify-center items-center mb-16'>
                <img className='w-36 h-36 object-cover' src={FooterPhoto} alt="" />
            </div>
            <div className="flex justify-between bg-">
                <div className="w-80">
                    <h3 className='text-lg font-semibold mb-4'>About Us</h3>
                    <p className='text-[rgba(255,255,255,0.6)]'>This is a demo website for BPL Dream11. All the data used in this website is for demonstration purposes only and does not represent real players or teams.</p>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                    <ul className='text-[rgba(255,255,255,0.6)] space-y-2'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-lg font-semibold mb-4'>Subscribe</h3>
                    <p className='text-[rgba(255,255,255,0.6)] space-y-2'>Subscribe to our newsletter for the latest updates.</p>
                    <div className='bg-white rounded-2xl py-3.5 px-4 mt-5 flex items-center gap-3'>
                        <input
                            className='text-[rgba(19,19,19,0.6)] flex-1 bg-transparent outline-none placeholder:text-[rgba(19,19,19,0.4)]'
                            type="email"
                            placeholder="Enter your email"
                        />
                        <div className="w-[1px] h-8 bg-[rgba(19,19,19,0.1)]"></div>
                        <button className='font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text cursor-pointer'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='text-center text-[rgba(255,255,255,0.4)] py-6 mt-16 border-t border-[rgba(255,255,255,0.1)]'> <p>&copy; {new Date().getFullYear()} BPL Dream11. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;