"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import recipeData from "@/data/recipes.json";
import { useParams } from "next/navigation";

export default function ProcuctId() {
  const { id } = useParams();
  console.log(id);
  const recipesId = recipeData.recipes.filter(
    (recipes) => recipes.id === Number(id)
  );
  console.log(recipesId);
  return (
    <div>
      <TracingBeam className=" mt-36">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {recipesId.map((item) => (
            <div key={item.id} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.category}
              </h2>

              <p className={twMerge("text-xl mb-4")}>{item.title}</p>

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="100"
                    width="400"
                    className="rounded-lg mb-10"
                  />
                )}
                {item.description}
                <h3 className="text-lg mt-4">Ingredients</h3>
                <ul>
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
                <h3 className="text-lg mt-4">Steps</h3>
                <ol>
                  {item.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}
