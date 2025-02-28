import UserItem from "./UserItem";

const UserList = ({ users }) => {
  return (
    <div className="overflow-y-auto w-full py-3">
      {users.length > 0 ? (
        users.map((user) => <UserItem key={user._id} user={user} />)
      ) : (
        <div className="text-center text-zinc-500 py-4">No online users</div>
      )}
    </div>
  );
};

export default UserList;
