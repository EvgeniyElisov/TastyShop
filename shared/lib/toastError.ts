import toast from "react-hot-toast";

export const toastError = (message: string) => {
  toast.error(message, {
    icon: "❌",
  });
};