"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import CustomNavbar from "@/components/CustomNavbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function Provider({ children }) {
  return (
    <NextUIProvider>
      <PhotoProvider>
        <AnimatePresence mode="wait">
          <div className="bg-gradient-to-bl from-gray-900 to-gray-600 min-h-screen">
            <CustomNavbar></CustomNavbar>
            {children}
            <Footer></Footer>
            <Toaster></Toaster>
          </div>
        </AnimatePresence>
      </PhotoProvider>
    </NextUIProvider>
  );
}
