import logo from '../../../assets/image/bellas-logo.png';
import adminuser from '../../../assets/image/adminuser.png';

const Header = () => {
  return (
    <div className="border-b-[1px] border-b-stroke py-2 px-4 md:px-8 lg:px-24">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-12" />
        </div>
        <div className="flex items-center gap-x-2 bg-[#DED3F4] px-3 py-1 rounded-full">
          <div className="text-right">
            <p className="text-sm font-semibold md:text-base lg:text-title">
              Martha Dreash
            </p>
            <p className="text-xs md:text-sm">Client</p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={adminuser}
              alt="Admin User"
              className="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
