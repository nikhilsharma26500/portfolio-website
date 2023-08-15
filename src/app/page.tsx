import Main from "./(component)/main"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] flex justify-center items-center h-screen  dotted-background">
        <div className="mx-auto rounded-lg backdrop-blur-xl bg-[#3f3f3f]/75 h-[80%] w-[80%] shadow-lg shadow-black">
          <div className="container p-4 mx-auto">
            <Main />
          </div>
        </div>
      </div>
    </>
  )
}
