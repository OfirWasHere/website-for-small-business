import { ToastContainerProps, ToastOptions } from "react-toastify"

export const toastCSS:ToastOptions<{}>  = {
    autoClose: 5000,
    pauseOnHover: false,
    draggable: true,
    progress: undefined as number | undefined, // Explicitly define the type
}

// Main Container:
export const toastContainerConfig: ToastContainerProps = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  draggable: true,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  theme: "dark",
};