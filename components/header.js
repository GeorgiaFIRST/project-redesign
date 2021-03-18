import React from 'react';
import Link from 'next/link';

let Header = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link href="/">
                    <div className="leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap">
                        <img src="images/cropped-GF_Horiz_Logo.png" alt="" width="150" height="80"/>
                    </div>
                </Link>
            </div>

            <div className="inline-block relative">
                <Link href="/">
                    <a className="ml-72 bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">Home</a>
                </Link>
            </div>

            <div className="group dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">About Us</span>
                </button>
                
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-36 group-hover:block">
                    <li><Link href="/mission-impact"><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Mission and Impact</a></Link></li>
                    <li><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Board Members</a></Link></li>
                    <li><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Sponsors</a></Link></li>
                    <li className=""><Link href="/"><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Policies</a></Link></li>
                </ul>
            </div>
            
            <div className="group dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Events</span>
                </button>
                
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-36 group-hover:block">
                    <li><Link href="/"><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Calendar</a></Link></li>
                    <li><Link href="/"><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Virtual Challenges</a></Link></li>
                </ul>
            </div>

            <div className="inline-block relative">
                <Link href="/">
                    <a className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">News</a>
                </Link>
            </div>

            <div className="group dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Get Involved</span>
                </button>
                
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-36 group-hover:block">
                    <li className=""><Link href="/"><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Sponsor</a></Link></li>
                    <li className=""><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Start a Team</a></Link></li>
                    <li className=""><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Coach/Mentor</a></Link></li>
                    <li className=""><Link href="/"><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Volunteer</a></Link></li>
                </ul>
            </div>

            <div className="group dropdown inline-block relative">
                <button className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                    <span className="mr-1">Resources</span>
                </button>
                
                <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-36 group-hover:block">
                    <li className=""><Link href="/"><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">FIRST Resources</a></Link></li>
                    <li className=""><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">DE</a></Link></li>
                    <li className=""><Link href="/"><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">GA FIRST Symposium</a></Link></li>
                    <li className=""><Link href="/"><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Grants</a></Link></li>
                </ul>
            </div>
        </div>
        </nav>
    );
}

export default Header;