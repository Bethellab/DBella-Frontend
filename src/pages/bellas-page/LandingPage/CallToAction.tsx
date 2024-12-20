import ctabg from '../../../assets/image/ctabg.png';

const CallToAction = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctabg})` }}
    >
      <div className="w-[700px] h-[400px] py-24 mt-12 bg-[#120728] rounded-lg flex flex-col items-center gap-8 text-center">
        <span className="text-white font-['Cormorant_Garamond'] text-4xl font-bold leading-snug">
          Ready to Glow? <br />
          Book your appointment today!
        </span>
        <button className="w-[250px] mt-12  bg-[#5e25cc] rounded-full text-white font-['Cormorant_Garamond'] text-lg text-center font-semibold capitalize p-4">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
