import facial from '../../assets/image/bellasbg.png';
import best from '../../assets/image/Sfort.png';

const BellasLandingHeader = () => {
    return (
        <div className="bg-[#f5f1fd] ">
            <div className="py-12 relative">
                <div className="lg:h-[710px] lg:mx-24">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between lg:mt-10 ">
                        {/* Left Section */}
                        <div className="lg:w-[600px] text-center lg:text-left px-4 lg:px-0 mb-12 mt-6">
                            <span className="block text-[18px] font-semibold text-[#5e25cc] tracking-[0.18px] mb-2">
                                Welcome to D'Bellas Glow –
                            </span>
                            <h1 className="text-[32px] lg:text-[64px] font-['Cormorant_Garamond'] font-bold leading-[40px] lg:leading-[72px] text-[#120728] tracking-[0.64px] mb-4">
                                Your Sanctuary for Beauty & Wellness
                            </h1>
                            <p className="text-[16px] lg:text-[18px] font-normal text-[#404245] tracking-[0.18px] mb-6">
                                Exclusive beauty clinic for you who are special. We have varieties of services that can make you more beautiful.
                            </p>
                            <button className="inline-flex w-full lg:w-[182px] h-[48px] justify-center items-center bg-[#5e25cc] rounded-full text-white text-[16px] font-semibold tracking-[0.32px]">
                                Book Now
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="flex justify-center md:justify-end mb-24 relative ml-8">
                            <img src={best} className='absolute top-64  lg:right-80 lg:top-96 lg:mt-24' />
                            <div  className="bg-[#d9caf7] p-2  rounded-bl-full rounded-br-6xl">
                            <img
                                src={facial}
                                alt="hero"
                                className="lg:ml-12"
                            />

                            </div>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BellasLandingHeader;
