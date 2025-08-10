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
import { showToast } from "../Constants/ShowToast";
import Swal from "sweetalert2";

const AddTouristsSpotPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    data.totalVisitorsPerYear = Number(data.totalVisitorsPerYear);
    data.averageCost = Number(data.averageCost);

    const res = await fetch("http://localhost:3000/add-tourist-spot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (result.acknowledged === true) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Tourist Spot Added Successfully!",
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  const onError = () => {
    showToast("error", "Please fill all required fields");
  };
  return (
    <div className="p-8 bg-lm-surface dark:bg-dm-surface">
      <h1 className="text-3xl font-bold mb-8 text-lm-primary dark:text-dm-primary text-center">
        Add Tourist Spot
      </h1>
      <form>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          {/* Left side */}
          <div className="flex-1 space-y-6">
            {/* Image URL */}
            <div>
              <label htmlFor="imageUrl" className="block mb-1 font-semibold">
                <div className="flex items-center gap-2">
                  <FiImage /> Image URL
                </div>
              </label>
              <input
                type="url"
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

              <label className="select w-full rounded-md border focus-within:outline-none">
                <select
                  className="bg-transparent focus:outline-none"
                  {...register("countryName", { required: true })}
                >
                  <option value="">Select a country</option>
                  <option>France</option>
                  <option>England</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Netherlands</option>
                  <option>Switzerland</option>
                </select>
              </label>
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
                {...register("shortDescription", { required: true })}
                rows={5}
                className="textarea w-full rounded-md border px-4 py-3 focus:outline-none"
                placeholder="Describe briefly"
              ></textarea>
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
              <label className="select w-full rounded-md border focus-within:outline-none">
                <select
                  id="seasonality"
                  className="bg-transparent focus:outline-none"
                  {...register("seasonality", { required: true })}
                >
                  <option value="">Select season</option>
                  <option>Summer</option>
                  <option>Winter</option>
                  <option>Spring</option>
                  <option>Autumn</option>
                </select>
              </label>
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
            onClick={handleSubmit(onSubmit, onError)}
            type="submit"
            className="bg-lm-primary text-white font-semibold rounded-lg transition duration-200 cursor-pointer px-16 py-3 active:scale-95"
          >
            Add Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpotPage;
