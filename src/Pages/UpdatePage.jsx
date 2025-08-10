import {
  FiImage,
  FiMapPin,
  FiGlobe,
  FiMap,
  FiFileText,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiUsers,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { showToast } from "../Constants/ShowToast";

const UpdatePage = () => {
  const currentSpotData = useLoaderData();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (currentSpotData) {
      reset(currentSpotData);
    }
  }, [currentSpotData, reset]);

  const onSubmit = async (formData) => {
    formData.totalVisitorsPerYear = Number(formData.totalVisitorsPerYear);
    formData.averageCost = Number(formData.averageCost);

    const res = await fetch(
      `http://localhost:3000/update-tourist-spot/${currentSpotData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await res.json();

    if (result.modifiedCount > 0) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Tourist Spot Updated Successfully!",
      });
      navigate("/my-list");
    } else {
      Swal.fire({
        icon: "warning",
        title: "No Changes",
        text: "You didn't change anything.",
      });
    }
  };

  const onError = () => {
    showToast("error", "Please fill all required fields");
  };

  return (
    <div className="p-8 bg-lm-surface dark:bg-dm-surface">
      <h1 className="text-3xl font-bold mb-8 text-lm-primary dark:text-dm-primary text-center">
        Update Tourist Spot
      </h1>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* Form fields */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="flex-1 space-y-6">
            {/* Image URL */}
            <div>
              <label htmlFor="imageURL" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiImage /> Image URL
                </div>
              </label>
              <input
                type="url"
                id="imageURL"
                {...register("imageURL", { required: true })}
                placeholder="Paste image URL"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Tourist Spot Name */}
            <div>
              <label
                htmlFor="touristsSpotName"
                className="block mb-1 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <FiMapPin /> Tourist Spot Name
                </div>
              </label>
              <input
                type="text"
                id="touristsSpotName"
                {...register("touristsSpotName", { required: true })}
                placeholder="Name of the tourist spot"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Country */}
            <div>
              <label htmlFor="countryName" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiGlobe /> Country
                </div>
              </label>
              <select
                id="countryName"
                {...register("countryName", { required: true })}
                className="select w-full rounded-md border focus:outline-none"
              >
                <option value="">Select a country</option>
                <option>France</option>
                <option>England</option>
                <option>Italy</option>
                <option>Spain</option>
                <option>Netherlands</option>
                <option>Switzerland</option>
              </select>
            </div>
            {/* Location */}
            <div>
              <label htmlFor="location" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiMap /> Location
                </div>
              </label>
              <input
                type="text"
                id="location"
                {...register("location", { required: true })}
                placeholder="Exact location"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Short Description */}
            <div>
              <label
                htmlFor="shortDescription"
                className="block mb-1 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <FiFileText /> Short Description
                </div>
              </label>
              <textarea
                id="shortDescription"
                {...register("shortDescription", { required: true })}
                rows={5}
                placeholder="Describe briefly"
                className="textarea w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
          </div>
          {/* Right side */}
          <div className="flex-1 space-y-6">
            {/* Average Cost */}
            <div>
              <label htmlFor="averageCost" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiDollarSign /> Average Cost (USD)
                </div>
              </label>
              <input
                type="number"
                id="averageCost"
                {...register("averageCost", { required: true })}
                placeholder="e.g. 150"
                min="0"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Seasonality */}
            <div>
              <label htmlFor="seasonality" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiCalendar /> Seasonality
                </div>
              </label>
              <select
                id="seasonality"
                {...register("seasonality", { required: true })}
                className="select w-full rounded-md border focus:outline-none"
              >
                <option value="">Select season</option>
                <option>Summer</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Autumn</option>
              </select>
            </div>
            {/* Travel Time */}
            <div>
              <label htmlFor="travelTime" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiClock /> Travel Time
                </div>
              </label>
              <input
                type="text"
                id="travelTime"
                {...register("travelTime", { required: true })}
                placeholder="e.g. 7 days"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* Total Visitors Per Year */}
            <div>
              <label
                htmlFor="totalVisitorsPerYear"
                className="block mb-1 font-semibold"
              >
                <div className="flex items-center gap-2">
                  <FiUsers /> Total Visitors Per Year
                </div>
              </label>
              <input
                type="number"
                id="totalVisitorsPerYear"
                {...register("totalVisitorsPerYear", { required: true })}
                placeholder="e.g. 10000"
                min="0"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* User Email */}
            <div>
              <label htmlFor="userEmail" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiMail /> User Email
                </div>
              </label>
              <input
                type="email"
                id="userEmail"
                {...register("userEmail", { required: true })}
                placeholder="Your email"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
            {/* User Name */}
            <div>
              <label htmlFor="userName" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiUser /> User Name
                </div>
              </label>
              <input
                type="text"
                id="userName"
                {...register("userName", { required: true })}
                placeholder="Your name"
                className="input w-full rounded-md border px-4 py-3 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-lm-primary text-white font-semibold rounded-lg transition duration-200 cursor-pointer px-16 py-3 active:scale-95"
          >
            Update Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePage;
