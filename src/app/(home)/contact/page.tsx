"use client";
import React, {useState} from "react";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
export default function Contact() {

  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          <div className="max-w-2xl mx-auto p-4 relative z-10 mt-28">
          <h1 className="text-2xl md:text-5xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-300 max-w-lg mx-auto text-lg">
            We&apos;re here to help with any questions about courses, program,
            or events. Reach out and let us know how we can assist you in your
            musical journey.
          </p>
          <form
            name="contact-form"
            action="https://getform.io/f/wbrkzgqa"
            method="POST"
            className="space-y-2 mt-4"
          >
            <input
              type="text"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full lg:max-w-2xl p-4 bg-black/[0.8] placeholder:text-neutral-300"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              name="textarea"
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full lg:max-w-2xl p-4 bg-black/[0.8] placeholder:text-neutral-300"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="textarea"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="p-4 rounded-lg bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-white font-medium "
            >
              Send Message
            </button>
          </form>
        </div>
        </BackgroundGradientAnimation>
    </>
  );
}
