import Main from './main'
import DevProjects from './devProjects'
import Link from 'next/link'
import { HiHome } from 'react-icons/hi'
import { FaLaptopCode } from 'react-icons/fa'
import { RiContactsFill } from "react-icons/ri"
import path from 'path'

interface Paths {
  main: string,
  devProjects: string,
  contacts: string
}

const paths: Paths = {
  main: '/(component)/main',
  devProjects: '/devProjects',
  contacts: '/contacts'
}

const navbar = () => {
  return (
    <>
    <div className="hidden md:block absolute bottom-10 rounded-full border-white h-fit w-fit px-6 py-3 bg-black/50 backdrop-blur-[10px]">
      <div className='flex text-gray-200 text-3xl'>
        <Link href={paths.main} className='border-r-2 pr-4'>
          <HiHome />
        </Link>
        <Link href={paths.devProjects} className='border-r px-4'>
          <FaLaptopCode />
        </Link>
        <Link href={paths.contacts} className='pl-4'>
          <RiContactsFill />
        </Link>
      </div>
    </div>
    </>
  )
}

export default navbar