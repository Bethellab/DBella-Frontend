import aboutbg from '../../../assets/image/aboutbg.png';

const Header = () => {
  return (
    <div>
      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center px-4 sm:px-8"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl py-10 sm:py-16 mt-4 sm:mt-8 rounded-lg flex flex-col items-center gap-6 text-center ">
          <span className="text-white font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight">
            Welcome to <br /> D'Bellas Glow
          </span>
          <p className="w-[461px] font-['Cormorant_Garamond'] text-white text-lg sm:text-xl lg:text-2xl leading-relaxed">
            Where beauty meets tranquility, and every moment is about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
