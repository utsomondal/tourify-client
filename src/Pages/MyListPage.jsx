import { useState, useEffect } from "react";
import { useAuth } from "../Utils/useAuth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const MyListPage = () => {
  const [spots, setSpots] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/my-spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setSpots(data))
      .catch((err) => console.error(err));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#009688",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-spots/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Deleted!",
                text: "The tourist spot has been deleted.",
                icon: "success",
              });
              setSpots((prevSpots) =>
                prevSpots.filter((spot) => spot._id !== id)
              );
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-lm-background dark:bg-dm-background min-h-[calc(100vh-297px)]">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-lm-primary dark:text-dm-primary text-center">
        My Tourist Spots
      </h1>

      {/* Table container */}
      <div className="overflow-x-auto rounded-lg shadow-md bg-lm-surface dark:bg-dm-surface border border-lm-border dark:border-dm-border hidden md:block">
        <table className="w-full border-collapse text-sm text-lm-text-primary dark:text-dm-text-primary">
          <thead className="bg-lm-success dark:bg-dm-success">
            <tr>
              <th className="p-3 border border-lm-border dark:border-dm-border">
                Name
              </th>
              <th className="p-3 border border-lm-border dark:border-dm-border">
                Country
              </th>
              <th className="p-3 border border-lm-border dark:border-dm-border">
                Location
              </th>
              <th className="p-3 border border-lm-border dark:border-dm-border">
                Best Season
              </th>
              <th className="p-3 border border-lm-border dark:border-dm-border text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {spots.length > 0 ? (
              spots.map((spot) => (
                <tr
                  className="hover:bg-[#99c9c4] dark:hover:bg-[#33353c]"
                  key={spot._id}
                >
                  <td className="p-3 border border-lm-border dark:border-dm-border">
                    {spot.touristsSpotName}
                  </td>
                  <td className="p-3 border border-lm-border dark:border-dm-border">
                    {spot.countryName}
                  </td>
                  <td className="p-3 border border-lm-border dark:border-dm-border">
                    {spot.location}
                  </td>
                  <td className="p-3 border border-lm-border dark:border-dm-border">
                    {spot.seasonality}
                  </td>
                  <td className="p-3 border border-lm-border dark:border-dm-border text-center">
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        className="px-3 py-1 text-sm md:text-base rounded text-white bg-lm-primary hover:bg-lm-primary-hover focus:bg-lm-primary-focus dark:bg-dm-primary dark:hover:bg-dm-primary-hover dark:focus:bg-dm-primary-focus transition-colors"
                        onClick={() => navigate(`/update-spot/${spot._id}`)}
                      >
                        Update
                      </button>
                      <button
                        className="px-3 py-1 text-sm md:text-base rounded text-white bg-lm-accent hover:bg-lm-accent-hover focus:bg-lm-accent-focus dark:bg-dm-accent dark:hover:bg-dm-accent-hover dark:focus:bg-dm-accent-focus transition-colors"
                        onClick={() => handleDelete(spot._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center p-4 text-lm-text-secondary dark:text-dm-text-secondary"
                >
                  No tourist spots found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="space-y-4 md:hidden">
        {spots.length > 0 ? (
          spots.map((spot) => (
            <div
              key={spot._id}
              className="p-4 border border-lm-border dark:border-dm-border rounded-lg bg-lm-surface dark:bg-dm-surface shadow-sm"
            >
              <p className="font-semibold text-lg">{spot.touristsSpotName}</p>
              <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                Country: {spot.countryName}
              </p>
              <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                Location: {spot.location}
              </p>
              <p className="text-sm text-lm-text-secondary dark:text-dm-text-secondary">
                Best Season: {spot.seasonality}
              </p>
              <div className="mt-3 flex gap-2">
                <button
                  className="flex-1 px-3 py-1 rounded text-white bg-lm-primary hover:bg-lm-primary-hover focus:bg-lm-primary-focus dark:bg-dm-primary dark:hover:bg-dm-primary-hover dark:focus:bg-dm-primary-focus transition-colors"
                  onClick={() => navigate(`/update-spot/${spot._id}`)}
                >
                  Update
                </button>
                <button
                  className="flex-1 px-3 py-1 rounded text-white bg-lm-accent hover:bg-lm-accent-hover focus:bg-lm-accent-focus dark:bg-dm-accent dark:hover:bg-dm-accent-hover dark:focus:bg-dm-accent-focus transition-colors"
                  onClick={() => handleDelete(spot._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lm-text-secondary dark:text-dm-text-secondary">
            No tourist spots found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyListPage;
