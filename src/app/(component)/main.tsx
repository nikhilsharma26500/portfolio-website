import Image from "next/image"
import Person from "../../../public/main_person3.svg"
import React from "react"

const home = () => {
  return (
    <>
      <div className="flex items-center justify-between mx-10">
        <div className="text-slate-300">
          <p className="text-xl cursive-font">Hello!</p>
          <h1 className="text-4xl">I am Nikhil Sharma</h1>
        </div>
        <div className="">
          <Image src={Person} alt="main person"/>
        </div>
      </div>
    </>
  )
}

export default home