"use client"

import React from "react";
import { Montserrat, IBM_Plex_Mono } from "next/font/google"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import Link from "next/link"

const monst = Montserrat({ subsets: ['latin'], weight: ["400", "500", "700"] })
const ibm_mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const ContactForm = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");
        console.log(name, email, message);
    };

    interface Links {
        // resume: string,
        linkedin: string,
        github: string,
        datacamp: string,
        leetcode: string
    }

    const links: Links = {
        "linkedin": "https://www.linkedin.com/in/nikhilsharma26500/",
        "github": "https://github.com/nikhilsharma26500",
        "datacamp": "https://www.datacamp.com/portfolio/nikhilsharma26500",
        "leetcode": "https://leetcode.com/nikhil26500/"
    }

    return (
        <>
            <div className="container mx-auto flex justify-evenly items-center h-full w-full text-white">
                {/* main title */}
                <div
                    className={`${ibm_mono.className} w-[40%] h-[70%] flex flex-col justify-center border-r-2 border-gray-500`}
                >
                    <div>
                        <h1 className="text-[4em]">contact.</h1>
                    </div>
                    <div className="flex ml-2 space-x-4">
                        <Link className="cursor-pointer" href={links.linkedin}>
                            <FaLinkedinIn />
                        </Link>
                        <Link className="cursor-pointer" href={links.github}>
                            <FaGithub href={links.github} />
                        </Link>
                        <Link className="cursor-pointer" href={links.datacamp}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 36" xmlSpace="preserve" height="20">
                                <path fill="#FFFFFF" d="M11.699 8.514v8.333L2.858 21.89V3.44l8.841 5.074zm2.861 17.507v-7.51l11.84-6.757-2.88-1.65-8.96 5.112V7.68a1.442 1.442 0 0 0-.718-1.242L3.056.256C3.027.238 2.998.224 2.97.21A2.064 2.064 0 0 0 0 2.07v21.184a2.067 2.067 0 0 0 2.971 1.865l.082-.042 8.64-4.933v6.72c.002.513.277.987.722 1.243L23.502 34.4l2.88-1.651-11.822-6.728z" fill-rule="evenodd" clip-rule="evenodd"></path>
                            </svg>
                        </Link>
                        <Link className="cursor-pointer" href={links.leetcode}>
                            <SiLeetcode />
                        </Link>
                    </div>

                </div>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className=""
                    method="POST"
                >
                    <div className={`${monst.className} flex gap-4`}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white mb-2">
                                Name<span className="text-sm text-red-600">* </span>:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="shadow appearance-none rounded w-full py-2 px-3 bg-[#171717] text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Name..."
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white mb-2">
                                Email<span className="text-sm text-red-600">* </span>:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="shadow appearance-none rounded w-full py-2 px-3 bg-[#171717] text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email..."
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-white mb-2"
                        >
                            Message<span className="text-sm text-red-600">* </span>:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="shadow appearance-none rounded w-full py-2 px-3 bg-[#171717] text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your message..."
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-gray-900 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-[#ffffff] group">
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Submit</span>
                    </button>
                    {/* <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button> */}
                </form>
            </div>
        </>
    );
};

export default ContactForm;