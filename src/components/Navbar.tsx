"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const user = true;
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={'/recipes'}>
        <MenuItem setActive={setActive} active={active} item="Recipes">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="BreakFast"
              id="breakfast"
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Fluffy omelette with cheese and vegetables."
            />
            <ProductItem
              title="Lunch"
              id="lunch"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Delicious chicken sandwich with fresh lettuce and tomatoes."
            />
            <ProductItem
              title="Dinner"
              id="dinner"
              src="https://images.unsplash.com/photo-1536392706976-e486e2ba97af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="A simple yet flavorful spaghetti carbonara recipe."
            />
            <ProductItem
              title="Salad"
              id="salad"
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              description="Fresh Greek salad with olives, feta, and cucumbers."
              />
          </div>
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact"
          ></MenuItem>
        </Link>
        {user && (
          <MenuItem setActive={setActive} active={active} item="Account">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/dashboard">Dashboard</HoveredLink>
              <HoveredLink href="/settings">
                Settings
              </HoveredLink>
              <HoveredLink href="/posts">Posts</HoveredLink>
              <HoveredLink href="/logout">Logout</HoveredLink>
            </div>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
