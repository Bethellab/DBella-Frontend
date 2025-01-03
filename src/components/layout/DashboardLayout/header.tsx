
import logo from '../../../assets/image/bellas-logo.png'
import adminuser from '../../../assets/image/adminuser.png'

const Header = () => {
  return (

    <div className="border-b-[1px] border-b-stroke py-2 px-24  ">
      <div className="flex flex-wrap w-full justify-between items-center">
        <div>
            <img src={logo} />
          
        </div>
        <div className="flex justify-end items-center gap-x-2 bg-[#DED3F4] px-3 py-1 rounded-full">
          <div>
            <p className="text-title text-sm font-semibold">Martha Dreash </p>
            <p className="text-sm text-right ">Client</p>
          </div>
          <div>
            <img src={adminuser} />
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
