import Main from "./(component)/main"
import DevProjects from "./(component)/devProjects"
import Contacts from "./(component)/contacts"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] flex justify-center items-center h-screen dotted-background">
        <div className="mx-auto rounded-[30px] backdrop-blur-xl bg-[#3f3f3f]/75 h-[80%] w-[80%] shadow-xl shadow-black overflow-auto block-background">
          <div className="container h-full  rounded-[10px] p-4 mx-auto">
            <Main />
            {/* <DevProjects/> */}
            {/* <Contacts/> */}
          </div>
        </div>
      </div>
    </>
  )
}
