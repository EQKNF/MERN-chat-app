const OnlineFilterToggle = ({ showOnlineOnly, setShowOnlineOnly, onlineCount }) => {
    return (
      <div className="mt-3 hidden lg:flex items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="checkbox checkbox-sm"
          />
          <span className="text-sm">Show online only</span>
        </label>
        <span className="text-xs text-zinc-500">({onlineCount} online)</span>
      </div>
    );
  };
  
  export default OnlineFilterToggle;
  