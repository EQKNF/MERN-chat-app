import { Users } from "lucide-react";
import OnlineFilterToggle from "./OnlineFilterToggle";
import { useAuthStore } from "../../store/useAuthStore";

const SidebarHeader = ({ showOnlineOnly, setShowOnlineOnly }) => {
  const { onlineUsers } = useAuthStore();

  return (
    <div className="border-b border-base-300 w-full p-5">
      <div className="flex items-center gap-2">
        <Users className="size-6" />
        <span className="font-medium hidden lg:block">Contacts</span>
      </div>

      {/* Online Filter Toggle */}
      <OnlineFilterToggle
        showOnlineOnly={showOnlineOnly}
        setShowOnlineOnly={setShowOnlineOnly}
        onlineCount={onlineUsers.length - 1}
      />
    </div>
  );
};

export default SidebarHeader;
