import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="h-auto w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pt-20 relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10">
          <div className="text-center p-10">
            <h2 className="text-base text-[#b4a2c6] sm:text-lg md:text-xl lg:text-2xl md:font-bold font-semibold uppercase">
              Dashboard
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-black sm:text-4xl">
              Welcome to your dashboard
            </p>
            <p className="mt-2 text-lg dark:text-[#b4a2c6] text-[#b4a2c6]">
              Here you can track your progress and manage your account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
