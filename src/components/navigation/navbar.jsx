"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ================= CHECK AUTH =================
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access_token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    // listens for changes from other tabs
    window.addEventListener("storage", checkAuth);

    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_type");

    setIsLoggedIn(false);
    router.push("/signin");
  };

  return (
    <header className="bg-amber-700 text-white shadow-sm">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        <Link href="/">
          <h1 className="font-black text-2xl md:text-4xl cursor-pointer">
            JobHunt
          </h1>
        </Link>

        <button
          className="md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* NAV */}
      <nav
        className={cn(
          "md:flex md:items-center md:justify-between md:px-20 md:pb-4",
          showMenu
            ? "flex flex-col absolute top-[70px] left-0 w-full bg-amber-700 z-50 py-6"
            : "hidden md:flex"
        )}
      >
        {/* LINKS */}
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-center text-lg font-medium">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link
                href={`/${link.href}`}
                className="hover:text-amber-300 font-bold"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* AUTH BUTTONS */}
        <div className="flex justify-center gap-4 mt-6 md:mt-0">

          {!isLoggedIn ? (
            <>
              <Link href="/signin">
                <button className="px-4 py-2 rounded-2xl bg-amber-50 text-black font-semibold">
                  Sign In
                </button>
              </Link>

              <Link href="/signup">
                <button className="px-4 py-2 rounded-2xl bg-amber-50 text-black font-semibold">
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <button className="px-4 py-2 rounded-2xl bg-amber-50 text-black font-semibold">
                  Profile
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-2xl bg-red-500 text-white font-semibold"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}