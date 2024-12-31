const Header = () => {
    return (
      <div>
        <div className="flex w-full h-[300px] sm:h-[440px] px-4 sm:px-[476px] py-8 sm:py-[120px] flex-col gap-4 sm:gap-6 justify-center items-center bg-[#120728]">
          <div className="flex flex-col gap-2 items-center">
            <span className="font-['Open_Sans'] border-b-4 whitespace-nowrap border-b-emerald-500 text-[12px] sm:text-[14px] font-semibold leading-[16px] sm:leading-[18px] text-[#eaeaea] text-center">
              GET IN TOUCH
            </span>
          </div>
          <span className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-bold text-[#eaeaea] text-center">
            We're here to help you <br className="hidden sm:block" /> around the clock - 24/7!
          </span>
        </div>
      </div>
    );
  };
  
  export default Header;
  