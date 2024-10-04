import { Container } from "@/components/common/Container";
import React from "react";
import { useParams } from "react-router-dom";
import character from "@/assets/images/quizCharacter.svg";
import trees from "@/assets/images/trees.svg";
import Bubble from "@/assets/images/Bubble.png";
import bubbles_all from "@/assets/images/bubbles_all.webp";
import { Button } from "@/components/ui/button";
import PrimaryButtons from "@/components/common/PrimaryButtons";
export default function SingleQuiz() {
  const { id } = useParams();
  return (
    <Container className="relative h-full overflow-hidden">
      <img
        src={trees}
        alt="waves"
        className="absolute right-56 -bottom-[50px] w-[200px]"
      />
      <div className="flex items-center justify-center h-full gap-10 text-white">
        {/* left */}
        <div className="w-full">
          {/* title */}
          <h4
            className="text-4xl '
          "
          >
            Which organization launched the PACE satellite?
          </h4>

          {/* options */}
          <div className="flex w-full mt-10 space-x-5 ">
            <button className="w-full p-2 py-3 transition-all duration-500 border-2 border-white rounded-2xl hover:bg-white hover:text-themeColor">
              2. Lorem Ipsum
            </button>
            <button className="w-full p-2 py-3 transition-all duration-500 border-2 border-white rounded-2xl hover:bg-white hover:text-themeColor">
              2. Lorem Ipsum
            </button>
          </div>
          <div className="flex w-full mt-5 space-x-5">
            <button className="w-full p-2 py-3 transition-all duration-500 border-2 border-white rounded-2xl hover:bg-white hover:text-themeColor">
              2. Lorem Ipsum
            </button>
            <button className="w-full p-2 py-3 transition-all duration-500 border-2 border-white rounded-2xl hover:bg-white hover:text-themeColor">
              2. Lorem Ipsum
            </button>
          </div>
          {/* next previous  buttons */}
          <div className="flex justify-center w-full mt-10 space-x-5">
            <PrimaryButtons className="mt-4 cursor-pointer text-xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-white text-[#2782FF] rounded-xl">
              Prev
            </PrimaryButtons>
            <PrimaryButtons className="mt-4 cursor-pointer text-xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-white text-[#2782FF] rounded-xl">
              Next
            </PrimaryButtons>
          </div>
        </div>
        {/* right */}
        <div className="relative w-full">
          <img
            src={bubbles_all}
            alt=""
            className="w-[500px] rotate-90 h-full z-10 absolute right-[300px] translate-x-44 -translate-y-12"
          />
          <img
            src={Bubble}
            alt=""
            className="w-[50px] z-10 absolute right-[300px]"
          />
          <img src={character} alt="" className="w-[400px] z-10 " />
          <img
            src={Bubble}
            alt=""
            className="w-[50px] z-10 absolute left-[30px] bottom-16 "
          />
        </div>
      </div>
    </Container>
  );
}
