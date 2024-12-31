import facial from '../../assets/image/manicure.png'

const Glow = () => {
    return (
        <div>
            <div className="flex flex-col justify-between items-center bg-[#5e25cc] relative w-full h-[500px] px-6 py-12 sm:px-12 md:px-24 lg:px-32">
                {/* Testimonial Content */}
                <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center w-full text-center mt-10">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight text-white w-[1200px] px-4">
                        D'Bellas Glow is my go-to for relaxation and beauty. Highly recommend!
                    </span>
                    {/* User Info */}
                    <div className="flex flex-col gap-4 items-center">
                        <img 
                            src={facial}
                            className="w-[88px] h-[88px] bg-cover bg-no-repeat rounded-full"
                        />
                        <span className="text-sm sm:text-base md:text-lg font-semibold text-[#fafafa]">
                            Koray Okumus
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Glow
