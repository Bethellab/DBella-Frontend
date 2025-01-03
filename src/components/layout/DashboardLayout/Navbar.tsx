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
];

const Navbar = () => {
  return (
    <div className="lg:px-24 px-4">
      <div className="flex  py-4 items-center overflow-x-scroll">
        <div className="flex  gap-4 lg:gap-10 border-b w-full justify-around lg:justify-start">
          {links.map((link, index) => (
            <NavLink
              to={link.link}
              key={index}
              className={({ isActive }) =>
                `text-sm lg:text-base text-label h-12 flex items-center gap-x-2 lg:gap-x-1 border-b-2 ${
                  isActive
                    ? "text-[#5E25CC] border-b-[#5E25CC] font-bold"
                    : "border-b-transparent"
                }`
              }
            >
              <Icon
                icon={link.icon}
                className="text-inherit w-5 h-5 lg:w-[18px] lg:h-[18px]"
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
