"use client"
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Dropdown, Label, Spinner } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdLogin, MdPersonAdd } from "react-icons/md";


const Navbar = () => {
    const pathName = usePathname();
        const { 
        data: session, 
        isPending, //loading state
        error, //error object
 
    } = authClient.useSession() 


  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-24 hidden md:flex flex-col justify-between items-center py-10 z-[60] bg-[#2e3227]/10 backdrop-blur-xl border-r border-[#c2cab2]/10">
      <div className="font-bold text-3xl text-[#96d947] transform -rotate-90 origin-center whitespace-nowrap mb-12 tracking-tighter">
        Gotur
      </div>
      <nav className="flex flex-col gap-4 items-center">
        <Link
          className={pathName === '/' ? "text-[#b1f661] border-l-2 border-[#b1f661] pl-2 py-2 font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180" : "text-[#c2cab2] hover:text-[#b1f661] transition-colors text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180"}
          href='/'
        >
          Home
        </Link>
        <Link
          className={pathName === '/about' ? "text-[#b1f661] border-l-2 border-[#b1f661] pl-2 py-2 font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180" : "text-[#c2cab2] hover:text-[#b1f661] transition-colors text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180"}
          href='/about'
        >
          About
        </Link>
        <Link
          className={pathName === '/destinations' ? "text-[#b1f661] border-l-2 border-[#b1f661] pl-2 py-2 font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180" : "text-[#c2cab2] hover:text-[#b1f661] transition-colors text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180"}
          href='/destinations'
        >
          Destination
        </Link>
        <Link
          className={pathName === '/booking-list' ? "text-[#b1f661] border-l-2 border-[#b1f661] pl-2 py-2 font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180" : "text-[#c2cab2] hover:text-[#b1f661] transition-colors text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180"}
          href='/booking-list' 
        >
          Booking List
        </Link>
        <Link
          className={pathName === '/book-destination' ? "text-[#b1f661] border-l-2 border-[#b1f661] pl-2 py-2 font-bold text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180" : "text-[#c2cab2] hover:text-[#b1f661] transition-colors text-sm tracking-widest uppercase [writing-mode:vertical-rl] rotate-180"}
          href='/book-destination' 
        >
        Add New
        </Link>
      </nav>
   <Dropdown placement="bottom-end">
  <Button
    aria-label="Menu"
    className="bg-white/10 backdrop-blur-md border border-white/20 
    hover:bg-white/20 transition-all duration-300 
    rounded-full p-3 min-w-fit text-white shadow-md"
  >
    <RxHamburgerMenu size={20} />
  </Button>

  <Dropdown.Popover className="p-0 border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
    {isPending ? (
      <div className="flex items-center justify-center p-6">
        <Spinner />
      </div>
    ) : (
      <Dropdown.Menu
        aria-label="User Menu"
        className="min-w-[240px] bg-white text-black p-2"
      >
        {session?.user ? (
          <>
            {/* User Info */}
            <Dropdown.Item
              isReadOnly
              className="cursor-default hover:bg-transparent"
            >
              <div className="flex items-center gap-3 p-2">
                <Avatar>
                  <Avatar.Image
                    alt={session.user.name}
                    src={session.user.image}
                  />
                  <Avatar.Fallback>
                    {session.user.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>

                <div>
                  <h4 className="font-semibold text-sm">
                    {session.user.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    Logged In
                  </p>
                </div>
              </div>
            </Dropdown.Item>

            <Dropdown.Item className="rounded-xl hover:bg-gray-100 transition">
              <Link
                href="/profile"
                className="flex items-center gap-3 w-full"
              >
                <FaUser className="text-gray-500" />
                Profile
              </Link>
            </Dropdown.Item>

            <Dropdown.Item className="rounded-xl hover:bg-red-50 transition">
              <Button
                onPress={() => authClient.signOut()}
                className="bg-transparent shadow-none p-0 h-auto 
                flex items-center gap-3 text-red-500 hover:text-red-600"
              >
                <FaSignOutAlt />
                Sign Out
              </Button>
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item className="rounded-xl hover:bg-gray-100 transition">
              <Link
                href="/signup"
                className="flex items-center gap-3 w-full"
              >
                <MdPersonAdd className="text-gray-500" />
                Sign Up
              </Link>
            </Dropdown.Item>

            <Dropdown.Item className="rounded-xl hover:bg-gray-100 transition">
              <Link
                href="/signin"
                className="flex items-center gap-3 w-full"
              >
                <MdLogin className="text-gray-500" />
                Sign In
              </Link>
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    )}
  </Dropdown.Popover>
</Dropdown>

          



    </aside>
  );
};

export default Navbar;
