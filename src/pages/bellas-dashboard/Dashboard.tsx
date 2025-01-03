
import useDashboard from "./useDashboard";
import { RenderIf } from "@/components/hoc";
import Overview from "@/components/Dashboard/Overview/Overview";
import Schedules from "@/components/Dashboard/Schedules/Schedules";
import Orders from "@/components/Dashboard/Orders/Orders";
import Transactions from "@/components/Dashboard/Transactions/Transactions";
import Profile from "@/components/Dashboard/Profile/Profile";


const Dashboard = () => {
    const { currentTab } = useDashboard();
  return (
    <div className="px-24 mt-4">
            <div>
               
            </div>

            <div>
               <RenderIf condition={currentTab === "overview"}>
                    <Overview  />
                </RenderIf>

                <RenderIf condition={currentTab === "schedules"}>
                    <Schedules  />
                </RenderIf>

                <RenderIf condition={currentTab === "orders"}>
                    <Orders />
                </RenderIf>

                <RenderIf condition={currentTab === "transactions"}>
                    <Transactions/>
                </RenderIf>

                <RenderIf condition={currentTab === "profile"}>
                    <Profile/>
                </RenderIf>


            </div>
    </div>
  )
}

export default Dashboard
