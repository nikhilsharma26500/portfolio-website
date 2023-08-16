import Image from "next/image"
import Person from "../../../public/main_person3.svg"
import React from "react"

const home = () => {
  return (
    <>
      <div className="flex items-center justify-between h-max mx-10">
        <div className="text-slate-200">
          <h1 className="text-5xl roboto">Nikhil Sharma</h1>
          <p>A passionate software developer and a budding data scientist</p>
        </div>
        <div className="">
          {/* <Image src={Person} alt="main person" className="h-[100%] w-[100%]"/> */}
        </div>
      </div>
    </>
  )
}

export default home