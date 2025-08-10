import { useState, useEffect } from "react";
import { useAuth } from "../Utils/useAuth";

const MyListPage = () => {
  const [spots, setSpots] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.email) return;

    fetch("http://localhost:3000/my-spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setSpots(data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
<div className="p-8 bg-lm-background dark:bg-dm-background min-h-[calc(100vh-297px)]">
  <h1 className="text-3xl font-bold mb-8 text-lm-primary dark:text-dm-primary text-center">
    My Tourist Spots
  </h1>

  <div className="overflow-x-auto rounded-lg shadow-md bg-lm-surface dark:bg-dm-surface border-lm-border dark:border-dm-border">
    <table className="w-full border-collapse text-sm text-lm-text-primary dark:text-dm-text-primary">
      <thead className="bg-lm-success dark:bg-dm-success">
        <tr>
          <th className="p-3 border border-lm-border dark:border-dm-border font-semibold text-lm-text-primary">Name</th>
          <th className="p-3 border border-lm-border dark:border-dm-border font-semibold text-lm-text-primary">Country</th>
          <th className="p-3 border border-lm-border dark:border-dm-border font-semibold text-lm-text-primary">Location</th>
          <th className="p-3 border border-lm-border dark:border-dm-border font-semibold text-lm-text-primary">Best Season</th>
          <th className="p-3 border border-lm-border dark:border-dm-border font-semibold text-center text-lm-text-primary">Actions</th>
        </tr>
      </thead>
      <tbody>
        {spots.length > 0 ? (
          spots.map((spot) => (
            <tr
            className="hover:bg-[#99c9c4] dark:hover:bg-[#33353c]"
              key={spot._id}
            >
              <td className="p-3 border border-lm-border dark:border-dm-border">{spot.touristsSpotName}</td>
              <td className="p-3 border border-lm-border dark:border-dm-border">{spot.countryName}</td>
              <td className="p-3 border border-lm-border dark:border-dm-border">{spot.location}</td>
              <td className="p-3 border border-lm-border dark:border-dm-border">{spot.seasonality}</td>
              <td className="p-3 border border-lm-border dark:border-dm-border text-center space-x-2">
                <button
                  className="px-3 py-1 rounded text-white bg-lm-primary hover:bg-lm-primary-hover focus:bg-lm-primary-focus dark:bg-dm-primary dark:hover:bg-dm-primary-hover dark:focus:bg-dm-primary-focus transition-colors"
                  onClick={() => alert(`Update ${spot.touristsSpotName}`)}
                >
                  Update
                </button>
                <button
                  className="px-3 py-1 rounded text-white bg-lm-accent hover:bg-lm-accent-hover focus:bg-lm-accent-focus dark:bg-dm-accent dark:hover:bg-dm-accent-hover dark:focus:bg-dm-accent-focus transition-colors"
                  onClick={() => alert(`Delete ${spot.touristsSpotName}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center p-4 text-lm-text-secondary dark:text-dm-text-secondary">
              No tourist spots found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default MyListPage;
