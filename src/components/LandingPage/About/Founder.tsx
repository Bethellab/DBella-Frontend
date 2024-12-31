import founder from '../../../assets/image/founder.png';

const Founder = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-8 lg:px-[120px] py-8 sm:py-16 lg:py-[64px] bg-[#eaeaea] shadow-lg mx-auto relative">
        <div className="flex flex-col-reverse lg:flex-row items-center w-full max-w-[1100px]">
          <img 
            src={founder} 
            className="w-full sm:w-[400px] lg:w-[547px] h-auto bg-cover bg-no-repeat" 
            alt="Founder" 
          />
          <div className="flex flex-col gap-4 p-6 sm:p-8 w-full sm:w-[450px] lg:w-[600px] bg-[#ded3f4] relative mt-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-black border-b-4 border-b-emerald-500 whitespace-nowrap">
                    FOUNDER’S SPEECH
                  </span>
                  <div className="w-6 h-[3px] bg-[url(../assets/images/525d2cea-b458-4c54-ae49-6831b41806a4.png)] bg-cover bg-no-repeat" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#404245] leading-tight">
                  A Message from Our Founder
                </h2>
              </div>
              <p className="text-base sm:text-lg lg:text-[18px] text-[#404245] leading-relaxed">
                Welcome to D'Bellas Glow, where we believe beauty is more than skin deep—it's about feeling confident, valued, and at peace. When I started this journey, my dream was to create a space where everyone feels cared for and celebrated. Each service we offer is designed with your unique needs in mind, combining expert techniques with a personal touch.
                <br />
                At D'Bellas Glow, our mission is simple: to empower you to embrace your best self. Thank you for trusting us to be a part of your self-care journey. We look forward to serving you and making your time with us unforgettable.
              </p>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[24px] font-bold text-black">
                  John Doe
                </h3>
                <p className="text-sm sm:text-base lg:text-[16px] text-[#404245]">
                  Founder & Chief Wellness Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
