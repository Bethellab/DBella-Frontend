import { useSearchParams } from "react-router-dom";
export default function useSchedules() {
  const links = [
    { name: "Upcoming", href: "?tab=upcoming", active: "upcoming" },
    { name: "Completed", href: "?tab=completed", active: "completed" },
    {
      name: "Cancelled",
      href: "?tab=cancelled",
      active: "cancelled",
    },
  ];

  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get("tab");

  return { currentTab, links };
}
