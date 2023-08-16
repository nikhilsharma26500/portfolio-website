"use client"

import Image from "next/image"
import React from "react"
import Pic1 from "../../../public/main_person.svg"
import Pic2 from "../../../public/main_person2.svg"
import Pic3 from "../../../public/main_person3.svg"
import YouTube from "react-youtube"
import { Roboto_Mono } from "next/font/google"

const roboto_mono = Roboto_Mono({ subsets: ['latin'] })

const projectaDescription = {
  "TheGuides": [`• Developed personalized AI chatbot with a vision on helping students and professionals with studying and asking questions.`,
    `• Utilized OpenAI's API to develop the chatbot, enabling it to receive user input and provide responses.`,
    `• Developed front-end components on NextJS with Typescript, implementing Tailwind CSS for styling.`,
    `• Implemented Langchain to chain prompts and utilized recently introduced Function Calling feature of GPT.`,
    `• Used FastAPI to build a lightweight and fast server that runs the model, leveraging SQLAlchemy to develop database. Hosted on cloud using TiDB Serverless.`,
    `• Incorporated FAISS along with OpenAI Vector Embeddings for text file vectorization.`]
}


const devProjects = () => {
  // Youtube
  const videoID = { "theGuides": "https://youtu.be/ytT3h9xZPpU" };
  const opts = {
    height: '250px',
    width: "100%",
  }

  return (
    <>
      <div className="container mx-auto p-4 h-full">

        {/* main box */}
        <div className="mx-14 text-white h-[100%] ">

          {/* Box 1 */}
          <div className="w-full  mx-auto flex justify-between items-center">
            <div className={`${roboto_mono.className}`}>
              <h1 className="text-7xl">
                TheGuides
              </h1>
              <p className="text-xl font-light">Learning powered by AI</p>
            </div>

            <div className="shadow-xl shadow-black" style={{ borderRadius: "10px", overflow: "hidden" }}>
              <YouTube opts={opts} videoId={videoID.theGuides} />
            </div>
          </div>

          {/* Box 2 */}
          <div className="">
            <div className="container">
              <h2>
                Description
              </h2>
              <ul>
                {projectaDescription.TheGuides.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default devProjects;