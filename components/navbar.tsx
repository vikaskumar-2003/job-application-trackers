"use client"

import { Briefcase } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";
import { Button } from "./ui/button";
import { getSession, signOut } from "@/lib/auth/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { useSession } from "@/lib/auth/auth-client";
import SignOutButton from "./sign-out-btn";

const NavAuthActions =   () => {
 
  const {data:session}=useSession()

  if (session?.user) {
    const initial = session.user.name?.[0]?.toUpperCase() || "U";

    return (
      <>
        <Link href="/dashboard">
          <Button variant="ghost" className="text-gray-700 hover:text-black">
            Dashboard
          </Button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="ghost"
                className="relative h-9 w-9 rounded-full p-0"
              />
            }
          >
            <Avatar className="h-9 w-9">
              <AvatarFallback className="bg-primary text-white">
                {initial}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {session.user.name || "User"}
                  </p>
                  {session.user.email && (
                    <p className="text-xs leading-none text-muted-foreground">
                      {session.user.email}
                    </p>
                  )}
                </div>
              </DropdownMenuLabel>
              <SignOutButton/>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </>
    );
  }

  return (
    <>
      <Link href="/sign-in">
        <Button variant="ghost" className="text-gray-700 hover:text-black">
          Log In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button className="bg-primary hover:bg-primary/90">
          Start for free
        </Button>
      </Link>
    </>
  );
};
const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-primary"
        >
          <Briefcase className="h-5 w-5" />
          Job Tracker
        </Link>

        <div className="flex items-center gap-4">
          <Suspense
            fallback={
              <div className="h-9 w-36 animate-pulse rounded-md bg-gray-100" />
            }
          >
            <NavAuthActions />
          </Suspense>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;