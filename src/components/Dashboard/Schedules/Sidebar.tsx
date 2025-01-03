import { NavLink } from "react-router-dom";

interface LinkProps {
  name: string;
  href: string;
  active: string;
}

interface SidebarProps {
  links: LinkProps[];
  currentTab: string | null;
}

const SchedulesSideBar = ({ links, currentTab }: SidebarProps) => {
  return (
    <div className="h-full flex justify-center py-6 border-r-[0.5px] border-r-label/40">
      {/* Inner container with restricted width and centered */}
      <div className="space-y-10 w-full max-w-sm mx-auto px-[24px] sm:px-6 lg:px-8">
        {/* Links */}
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.href}
            className={`block text-sm text-body ${
              link.active === currentTab
                ? "p-3 bg-gray-300 rounded-full font-medium text-title"
                : ""
            } flex gap-x-2`}
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SchedulesSideBar;
