import { NavLink } from "react-router-dom";


interface LinkProps {
    name: string;
    href: string;
    active: string;
}
interface TabbarProps {
    links: LinkProps[];
    currentTab: string | null;


}
const DashboardTabs = ({ links, currentTab}: TabbarProps) => {
   
    return (
        <div className="flex justify-between gap-10 items-center w-full ">

            <div className="flex items-center space-x-8  border-b h-12  w-[1700px]  ">
                {/* Links */}
                {links.map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.href}
                        className={`block text-sm font-normal text-gray-600  ${link.active === currentTab
                                ? "text-[#5E25CC] border-b-[#5E25CC] text-lg font-bold"
                                : ""
                            }   `}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

           


        </div>
    );
};

export default DashboardTabs;
