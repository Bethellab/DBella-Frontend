import ctabg from '../../../assets/image/ctabgabt.png';

const CallToAction = () => {
  return (
    <div
      className="h-[70vh] sm:h-[80vh] bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${ctabg})` }}
    >
      <div className="w-full max-w-[700px] h-auto py-8 sm:py-24 bg-[#120728] rounded-lg flex flex-col items-center gap-6 sm:gap-8 text-center">
        <span className="text-white font-['Cormorant_Garamond'] text-2xl sm:text-4xl font-bold leading-snug">
          Ready to experience the D'Bellas <br className="hidden sm:block" /> Glow difference?
        </span>
        <button className="w-full max-w-[250px] mt-4 sm:mt-8 bg-[#5e25cc] rounded-full text-white font-['Cormorant_Garamond'] text-base sm:text-lg font-semibold capitalize p-3 sm:p-4">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
