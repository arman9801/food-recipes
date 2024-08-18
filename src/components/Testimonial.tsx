import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

export default function Testimonial() {
    const testimonials = [
        {
          quote:
            "The aromas that wafted from the kitchen were like a warm hug, comforting and inviting. I knew I was in for a treat with every bite.",
          name: "Sarah",
          title: "Satisfied Foodie"
        },
        {
          quote:
            "I was skeptical at first, but the flavors in this recipe were truly exceptional. I've never tasted anything like it!",
          name: "Tom",
          title: "Foodie Fan"
        },
        {
          quote:
            "I've been cooking for years, but this recipe brought out a new level of skill in me. The instructions were clear and easy to follow.",
          name: "Maria",
          title: "Experienced Cook"
        },
        {
          quote:
            "The presentation was stunning, and the taste was out of this world. This recipe has earned a permanent spot in my cookbook.",
          name: "Rachel",
          title: "Food Blogger"
        },
        {
          quote:
            "I was blown away by the simplicity and elegance of this recipe. It's perfect for a special occasion or a cozy night in.",
          name: "David",
          title: "Food Enthusiast"
        }
      ];
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold mb-8 z-10 text-center">Testimonial: Voices of satisfaction</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}
