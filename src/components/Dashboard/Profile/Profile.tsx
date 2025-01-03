import { RenderIf } from "@/components/hoc";
import ProfileSideBar from "./ProfileSidebar";
import useProfile from './useProfile'
import UserDetails from "./UserDetails/UserDetails";
import AccountSettings from "./AccountSettings/AccountSettings";

const Profile = () => {
  const { currentTab, links } = useProfile();
  return (
    <main className="w-full h-screen flex px-24">

      <div className="hidden md:block md:w-1/5  relative">
        <ProfileSideBar links={links} currentTab={currentTab} />
      </div>

      <div className="w-full md:w-4/5 overflow-y-auto px-6   py-6">
                <RenderIf condition={currentTab === "userdetails"}>
                    <UserDetails />
                </RenderIf>
                <RenderIf condition={currentTab === "accountsettings"}>
                    <AccountSettings />
                </RenderIf>
        </div>

    </main>
  )
}

export default Profile
