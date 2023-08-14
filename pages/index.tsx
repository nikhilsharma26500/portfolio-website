import { Inter } from 'next/font/google'
import MainPage from "./components/main"
import DataPage from './components/data_projects'
import DevPage from './components/dev_projects'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainPage />
      <DataPage />
      <DevPage />
      <div className='absolute bottom-0 rounded-full border-4 border-white h-[] w-[150px]'>
        testing
      </div>
    </>
  )
}
