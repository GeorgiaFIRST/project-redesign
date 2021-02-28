import React from 'react';
import header from "./header.module.css";

let Header = () => {
    return (
    <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              href="#index"
            >
                <img src="images/cropped-GF_Horiz_Logo.png" alt="" width="150" height="80"/>
            </a>
            </div>

            <div class="inline-block relative">
                <a className="ml-72 bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" href="#index">
                    Home
                </a>
            </div>

            <div class="group dropdown inline-block relative">
                <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">About Us</span>
                </button>
                
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-44 group-hover:block">
                    <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Mission and Impact</a></li>
                    <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Board Members</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Sponsors</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Policies</a></li>
                </ul>
            </div>

            <div class="group dropdown inline-block relative">
                <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Events</span>
                </button>
                
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-44 group-hover:block">
                    <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Calendar</a></li>
                    <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Virtual Challenges</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Programs</a></li>
                </ul>
            </div>

            <div class="inline-block relative">
                <a className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center" href="#index">
                    News
                </a>
            </div>

            <div class="group dropdown inline-block relative">
                <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Get Involved</span>
                </button>
                
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-44 group-hover:block">
                    <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Sponsor</a></li>
                    <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Coach/Mentor</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Volunteer</a></li>
                </ul>
            </div>

            <div class="group dropdown inline-block relative">
                <button class="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span class="mr-1">Resources</span>
                </button>
                
                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-44 group-hover:block">
                    <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">FIRST Resources</a></li>
                    <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">DE</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Peach Pits</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">GA FIRST Symposium</a></li>
                    <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Grants</a></li>
                </ul>
            </div>
        
        </div>
        </nav>
    </>
  );
}

/*
            
            <div class="origin-top-right absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Support</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">License</a>
                </div>
            </div>*/
export default Header;