import { useSearchParams } from "react-router-dom";
export default function useProfile() {
  const links = [
    { name: "User Details", href: "?tab=userdetails", active: "userdetails" },
    { name: "Account Settings", href: "?tab=accountsettings", active: "accountsettings" },
  
  ];

  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return { currentTab, links };
}
