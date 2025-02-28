import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";

const UserItem = ({ user }) => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <button
      onClick={() => setSelectedUser(user)}
      className={`
        w-full p-3 flex items-center gap-3
        hover:bg-base-300 transition-colors
        ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
      `}
    >
      {/* User Avatar */}
      <div className="relative mx-auto lg:mx-0">
        <img
          src={user.profilePic || "/avatar.png"}
          alt={user.name}
          className="size-12 object-cover rounded-full"
        />
        {onlineUsers.includes(user._id) && (
          <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
        )}
      </div>

      {/* User Info (Visible on larger screens) */}
      <div className="hidden lg:block text-left min-w-0">
        <div className="font-medium truncate">{user.fullName}</div>
        <div className="text-sm text-zinc-400">
          {onlineUsers.includes(user._id) ? "Online" : "Offline"}
        </div>
      </div>
    </button>
  );
};

export default UserItem;
