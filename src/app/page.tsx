import Main from "./(component)/main"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] flex justify-center items-center h-screen dotted-background">
        <div className=" border-4 mx-auto border-white h-[80%] w-[80%]">
        <Main/>
        </div>
      </div>
    </>
  )
}
