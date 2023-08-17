import Image from "next/image"
import Person from "../../../public/main_person3.svg"
import React from "react"
import Link from "next/link"

import { Montserrat, IBM_Plex_Mono } from "next/font/google"

const roboto_cond = Montserrat({ subsets: ['latin'], weight: ["400", "500", "700"] })
const ibm_mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ["400", "700"] })

interface Links {
  resume: string,
  linkedin: string,
  github: string
}

const links: Links = {
  "resume": "../../../public/NikhilSharma_Resume_SWE.pdf",
  "linkedin": "https://www.linkedin.com/in/nikhilsharma26500/",
  "github": "https://github.com/nikhilsharma26500"
}

const svg: Links = {
  "resume": "",
  "linkedin": "",
  "github": ""
}

const home = () => {
  return (
    <>
      <div className="flex items-center justify-between h-full w-full">
        <div className={`text-slate-200 container mx-10 ${ibm_mono.className} relative`}>
          <h1 className="text-[5em] roboto">Nikhil Sharma</h1>
          <p className="mb-5">Bachelor of Science - Computer Science, Lassonde School of Engineering, York University</p>

          {/* contact buttons */}
          {/* Resume */}
          <span className="space-x-4 flex">
            <Link href={links.resume} target="_blank" className="inline-flex overflow-hidden text-white border border-[#525252] bg-transparent hover:bg-gray-900 rounded group">
              <span className="px-3.5 py-2 text-white bg-red-800 group-hover:bg-red-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 128 128">
                  <path fill="#FFFFFF" d="M32,122h64c7.2,0,13-5.8,13-13V29c0-6.1-2.4-11.9-6.7-16.3S92.1,6,86,6L32,6c-7.2,0-13,5.8-13,13v90 C19,116.2,24.8,122,32,122z M86.1,92h-44c-1.7,0-3-1.3-3-3s1.3-3,3-3h44c1.7,0,3,1.3,3,3S87.8,92,86.1,92z M98,17 c2.5,2.5,4.1,5.6,4.7,9H96c-3.9,0-7-3.1-7-7l0-6.7C92.4,12.9,95.5,14.5,98,17z M41.9,56h44c1.7,0,3,1.3,3,3s-1.3,3-3,3h-44 c-1.7,0-3-1.3-3-3S40.2,56,41.9,56z M41.9,71h44c1.7,0,3,1.3,3,3s-1.3,3-3,3h-44c-1.7,0-3-1.3-3-3S40.2,71,41.9,71z"></path>
                </svg>
              </span>
              <span className="pl-4 pr-5 py-2.5">Resume</span>
            </Link>
            {/* LinkedIn */}
            <a href={links.linkedin} target="_blank" className="inline-flex overflow-hidden text-white border border-[#525252] bg-transparent hover:bg-gray-900 rounded group">
              <span className="px-3.5 py-2 text-white bg-blue-800 group-hover:bg-blue-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path fill="#FFFFFF" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </span>
              <span className="pl-4 pr-5 py-2.5">LinkedIn</span>
            </a>
            {/* Resume */}
            <a href={links.github} target="_blank" className="inline-flex overflow-hidden text-white border border-[#525252] bg-transparent hover:bg-gray-900 rounded group">
              <span className="px-3.5 py-2 text-white bg-slate-800 group-hover:bg-slate-500 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                  <path fill="#ffffff" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </span>
              <span className="pl-4 pr-5 py-2.5">Github</span>
            </a>
          </span>
          <div>

          </div>
        </div>
      </div>
    </>
  )
}


export default home