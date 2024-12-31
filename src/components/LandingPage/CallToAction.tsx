import ctabg from '../../assets/image/ctabg.png';

const CallToAction = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctabg})` }}
    >
      <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[700px] h-auto py-12 md:py-24 mt-12 bg-[#120728] rounded-lg flex flex-col items-center gap-6 md:gap-8 text-center px-6">
        <span className="text-white font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Ready to Glow? <br />
          Book your appointment today!
        </span>
        <button className="w-full sm:w-[200px] md:w-[250px] mt-4 bg-[#5e25cc] rounded-full text-white font-['Cormorant_Garamond'] text-base sm:text-lg md:text-lg font-semibold capitalize p-3 md:p-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
