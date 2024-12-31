
import { type ReactNode } from "react";
import Header from "./header";
import Navbar from "./Navbar";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    
      <main>
        <Header />
        <Navbar />
        <div className="px-4 ">{children}</div>
      </main>
    
  );
};

export default DashboardLayout;
