import "styles/global.scss"; // Global styles
import type { AppProps } from "next/app"; // Types
import "react-toastify/dist/ReactToastify.css"; // Toast styles
import { ToastContainer } from "react-toastify"; // Toast notifications

export default function MultiFaucet({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Toast container */}
      <ToastContainer />

      {/* Site */}
      <Component {...pageProps} />
    </>
  );
}
