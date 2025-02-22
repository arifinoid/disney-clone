import type { AppProps } from "next/app";

import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default App;
