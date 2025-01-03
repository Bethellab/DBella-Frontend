import { useSearchParams } from "react-router-dom";

export default function useDashboard() {
  const links = [
    { name: "Overview",  href: "?tab=overview", active: "overview" },
    { name: "Schedules", href: "?tab=schedules", active: "schedules" },
    { name: "Orders", href: "?tab=orders", active: "orders",},
    { name: "Transactions", href: "?tab=transactions", active: "transactions",},
    { name: "Profile", href: "?tab=profile", active: "profile",},

  ];

  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return { currentTab, links };
}
