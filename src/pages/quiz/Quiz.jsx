import { Container } from "@/components/common/Container";
import React from "react";
import fishesImg from "@/assets/images/Fishes.svg";
import qShape from "@/assets/images/qShape.png";
import trees from "@/assets/images/trees.svg";
import { Button } from "@/components/ui/button";
import PrimaryButtons from "@/components/common/PrimaryButtons";
import { Link } from "react-router-dom";
export default function Quiz() {
  return (
    <Container className="relative flex items-center justify-center h-full overflow-hidden bg-center bg-cover">
      <img
        src={trees}
        alt="waves"
        className="absolute -bottom-[50px] w-[200px]"
      />
      {/* ---- */}
      <div className="flex items-start gap-6">
        {/* left */}
        <div className="relative w-full">
          <img
            src={fishesImg}
            alt=""
            className="size-[28] absolute -top-24 right-0 left-0 mx-auto"
          />
          <div
            style={{ backgroundImage: `url(${qShape})` }}
            className="w-[600px] h-[400px] bg-cover bg-no-repeat flex justify-center items-center"
          >
            <div className="w-[500px] h-[270px] bg-[#2782FF] -rotate-[3deg] rounded-2xl"></div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col w-full text-white">
          <div>
            <h1 className="text-6xl">PACE Satellite</h1>
            <h3 className="text-3xl">And Its Mission</h3>
          </div>
          <div className="mt-20">
            <p className="font-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed tempor ligula. Donec aliquet, lacus viverra ultrices
              fermentum, metus risus venenatis augue, eget fermentum orci nisl
              at est
            </p>
            {/* <Button className="mt-4 cursor-pointer shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] bg-white text-[#2782FF] rounded-xl">
              Start
            </Button> */}
            <Link to="/quiz/123">
              <PrimaryButtons>Start</PrimaryButtons>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
