"use client";
import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `We're dedicated to bringing you the most mouthwatering and unique recipes from up-and-coming talent. Our platform features a diverse range of dishes, from traditional comfort food to international fusion cuisine. Whether you're looking for a quick weeknight dinner or a special occasion meal, we've got you covered`;

export default function Dashboard() {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="mt-10 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Discover the World&apos;s Best Recipes
          </h1>
          <TextGenerateEffect words={words} />
          <div className="mt-16">
            <Link href={"/recipes"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black/[0.5] text-black dark:text-white border-slate-600"
              >
                View Recipes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
