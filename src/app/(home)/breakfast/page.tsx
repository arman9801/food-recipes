"use client";

import React from "react";
import Image from "next/image";
import recipeData from "@/data/recipes.json";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const user = true;
export default function Breakfast() {
    const breakfasts = recipeData.recipes.filter((recipe) => recipe.category === "Breakfast");
  return (
    <div className="h-auto w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pt-20 relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center z-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-10">
          <div className="text-center p-10">
            <h2 className="text-base text-[#b4a2c6] sm:text-lg md:text-xl lg:text-2xl md:font-bold font-semibold uppercase">
                Dinner
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-black sm:text-4xl">
                Enjoy a delicious dinner
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {breakfasts.map((breakfast) => (
            <div className="flex justify-center" key={breakfast.id}>
              <CardContainer className="inter-var w-[25rem]">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {breakfast.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {breakfast.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={breakfast.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                  <Link href={`/recipes/${breakfast.id}`}>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                      Try now →
                    </CardItem>
                      </Link>
                    {user ? (
                        <Link href={'/recipes'}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                        All Recipes
                      </CardItem>
                    </Link>
                    ) : (
                        <Link href={'./signup'}>
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                        Sign up
                      </CardItem>
                    </Link>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
  )
}
