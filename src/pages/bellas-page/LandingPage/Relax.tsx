
import relax1 from '../../../assets/image/relax1.png';
import relax2 from '../../../assets/image/relax2.png';
import revitate1 from '../../../assets/image/revitate1.png';
import revitate2 from '../../../assets/image/revitate2.png';
import rediscover1 from '../../../assets/image/rediscover1.png';
import rediscover2 from '../../../assets/image/rediscover2.png';



const Relax = () => {
    return (
        <>
            <div className='mx-4'>
                <div className=" h-[1900px] relative   overflow-hidden ">
                    <img src={relax1} className="w-[275px] h-[458px]  bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-150.91%] translate-y-[-185.48%] z-[3]" />
                    <span className="flex h-[173.644px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[173.644px] text-[#5e25cc] tracking-[2.8px] absolute top-[266px] left-[850px] text-left whitespace-nowrap z-[11]">
                        relax
                    </span>
                    <span className="flex w-[372px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[394px] left-[1000px] text-left z-[9]">
                        Immerse yourself in a calming environment.
                    </span>
                    <img src={relax2} className="w-[161px] h-[268px] bg-[url(../assets/images/87b09fb3951c9c225dd676e9f7e6811b3799e89d.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-372.67%] translate-y-[-246.08%] z-[6]" />

                    <img src={revitate1} className="w-[275px] h-[458px] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[50.91%] translate-y-[-50.55%] z-[5]" />
                    <span className="flex h-[320px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[320px] text-[#5e25cc] tracking-[2.8px] absolute top-[835px] left-[-48px] text-left whitespace-nowrap z-[2]">
                        revitalize
                    </span>
                    <img src={revitate2} className="w-[161px] h-[268px] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[272.67%] translate-y-[-15.49%] z-[8]" />
                    <span className="flex w-[442px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[1061px] left-[169px] text-left z-[1]">
                        Experience transformative care for mind and body.
                    </span>
                    <span className="flex h-[320px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[320px] text-[#5e25cc] tracking-[2.8px] absolute top-[1428px] left-[548px] text-left whitespace-nowrap">
                        rediscover
                    </span>
                    <img src={rediscover1} className="w-[275px] h-[458px]  bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-150.91%] translate-y-[84.39%] z-[4]" />
                    <span className="flex w-[432px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[1630px] left-[790px] text-left z-10">
                        Uncover a renewed sense of confidence and beauty.
                    </span>
                    <img src={rediscover2} className="w-[161px] h-[268px]  bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-372.67%] translate-y-[215.11%] z-[7]" />
                </div>

            </div>

        </>

    );
};

export default Relax;
