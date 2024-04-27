"use client";
import { BackgroundCard } from "@/components/HomeScreen/BackgroundCard";
import SplashScreen from "@/components/splash-screen/SplashScreen";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SplashScreen setOpen={setOpen} open={open} />
      {open ? null : <BackgroundCard />}
    </>
  );
}
