import { useEffect, useState } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import SidebarSkeleton from "../skeletons/SidebarSkeleton";
import SidebarHeader from "./SidebarHeader";
import UserList from "./UserList";

const Sidebar = () => {
  const { getUsers, users, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200">
      <SidebarHeader showOnlineOnly={showOnlineOnly} setShowOnlineOnly={setShowOnlineOnly} />
      <UserList users={filteredUsers} />
    </aside>
  );
};

export default Sidebar;
