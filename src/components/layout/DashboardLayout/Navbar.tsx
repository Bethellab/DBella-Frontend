import { Icon } from "@iconify/react";

import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Overview",
    link: "/overview",
    icon: "ph:layout",
  },
  {
    name: "Schedules",
    link: "/schedules?tab=upcoming",
    icon: "ph:layout",
  },
  {
    name: "Orders",
    link: "/orders",
    icon: "ph:layout",
  },
 
  {
    name: "Transactions",
    link: "/transactions",
    icon: "ph:layout",
  },
 
  {
    name: "Profile",
    link: "/profile?tab=userdetails",
    icon: "ph:layout",
  },
]
const Navbar = () => {
  return (
    <div className="px-24">
    <div className="flex flex-wrap  py-4 w-full items-center">
      <div className="flex  gap-10 border-b w-full">
        {links.map((link, index) => (
          <NavLink
            to={link.link}
            key={index}
            className={({ isActive }) =>
              `text-sm text-label h-12 flex items-center gap-x-1 border-b-2 ${
                isActive ? "text-[#5E25CC] border-b-[#5E25CC] font-bold" : "border-b-transparent"
              }`
            }
          >
            {/* Uncomment the Icon component if you're using it */}
            <Icon
              icon={link.icon}
              className="text-inherit w-[18px] h-[18px]"
            />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
