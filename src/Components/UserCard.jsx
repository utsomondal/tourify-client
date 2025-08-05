import { useAuth } from "../Utils/useAuth";

const UserCard = () => {
  const { user, logoutUser } = useAuth();
  const email = user?.email || "user@email.com";
  const initials = email.slice(0, 2).toUpperCase();

  const logout = () => {
    logoutUser()
      .then(() => {
        console.log("User Logged Out");
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return (
    <div className="relative group">
      {/* Avatar (hover trigger) */}
      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-semibold cursor-pointer overflow-hidden p-3 bg-lm-primary hover:bg-lm-primary-hover dark:bg-dm-primary dark:hover:bg-dm-primary-hover">
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="select-none">{initials}</span>
        )}
      </div>

      {/* Dropdown on hover */}
      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-xl shadow-xl z-50 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <p className="text-sm text-gray-800 dark:text-white mb-3 text-center">
          {email}
        </p>
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserCard;
