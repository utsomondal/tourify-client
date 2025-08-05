import { toast, Bounce } from "react-toastify";

export const showToast = (type, message) => {
  const defaultOptions = {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  }
  if (type === "success") {
    toast.success(message, { defaultOptions });
  }
  if (type === "error") {
    toast.error(message, { defaultOptions });
  }
};