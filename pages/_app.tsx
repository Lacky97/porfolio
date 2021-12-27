import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import { useEffect } from "react";
import detectZoom from 'detect-zoom';



function MyApp({ Component, pageProps, router }) {  
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 sm:h-auto sm:px-20 my-14 lg:my-0 md:px-32 lg:h-screen lg:justify-center lg:items-center ">
        <div className="col-span-12 p-4 space-y-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 cols-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark" >
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 pb-2 overflow-hidden bg-white rounded-2xl lg:col-span-9 dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar />
          <AnimatePresence exitBeforeEnter >
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;


