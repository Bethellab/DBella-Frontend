import facial from '../../../assets/image/manicure.png'

const Glow = () => {
    return (
        <div>
            <div className=" flex flex-col justify-between items-center bg-[#5e25cc] relative   w-full  h-[500px] px-24 py-28">
                {/* Testimonial Content */}
                <div className="flex flex-col gap-10 items-center w-full">
                    <span className="text-center w-[900px] text-4xl font-bold leading-tight text-white">
                        D'Bellas Glow is my go-to for relaxation and beauty. Highly recommend!
                    </span>
                    {/* User Info */}
                    <div className="flex flex-col gap-4 items-center">
                        <img src={facial}
                            className="w-[88px] h-[88px] bg-cover bg-no-repeat rounded-full"
                           
                        />
                        <span className="text-lg font-semibold text-[#fafafa]">
                            Koray Okumus
                        </span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Glow
