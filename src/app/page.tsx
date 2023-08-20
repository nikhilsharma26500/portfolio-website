import Main from "./(component)/main"
import DevProjects from "./(component)/devProjects"
import Contacts from "./(component)/contacts"
import Link from "next/link"
import Navbar from "./(component)/navbar"

export default function Home() {
  return (
    <>
      <div className="bg-[#242424] flex justify-center items-center h-screen dotted-background">
        
          
            {/* <Main /> */}
            <DevProjects/>
            {/* <Contacts/> */}
        
          {/* <Navbar/> */}
      </div>
    </>
  )
}
