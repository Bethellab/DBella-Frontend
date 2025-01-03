import { RenderIf } from "@/components/hoc";
import SchedulesSideBar from "./Sidebar"
import useSchedules from "./useSchedules";
import Upcoming from "./Upcoming/Upcoming";
import Completed from "./Completed/Completed";
import Cancelled from "./Cancelled/Cnacelled";


const Schedules = () => {
    const { currentTab, links } = useSchedules();
    return (
        <main className="w-full h-screen flex lg:px-24">
            <div className=" md:w-1/5  relative">
                <SchedulesSideBar links={links} currentTab={currentTab} />
            </div>

            <div className="w-full md:w-4/5 overflow-y-auto px-6   py-6">
                <RenderIf condition={currentTab === "upcoming"}>
                    <Upcoming />
                </RenderIf>
                <RenderIf condition={currentTab === "completed"}>
                    <Completed />
                </RenderIf>
                <RenderIf condition={currentTab === "cancelled"}>
                    <Cancelled />
                </RenderIf>
            </div>
        </main>

    )
}

export default Schedules
