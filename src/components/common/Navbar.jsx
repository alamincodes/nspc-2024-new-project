import React from "react";
import Logo from "@/assets/images/Logo.svg";
import { Container } from "./Container";
export default function Navbar() {
  return (
    <div className="bg-[#1f4980] w-full sticky top-0">
      <Container className="flex items-center justify-between py-2">
        <div>
          <img src={Logo} alt="" className="h-12" />
        </div>
        <div>
          <ul className="flex items-center space-x-4 text-white">
            <li>Home</li>
            <li>Maxbox</li>
            <li>Quiz</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
