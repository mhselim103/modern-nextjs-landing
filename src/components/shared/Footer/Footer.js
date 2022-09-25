import Image from "next/image";
import React from "react";
import chat from "../../../assets/widget/chat.svg";
import community from "../../../assets/widget/community.svg";
import github from "../../../assets/widget/github.svg";
import logo from "../../../assets/logo.svg";
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-3 max-w-[80vw] mx-auto gap-6 mb-20">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[20vw]">
          <Image src={chat} alt="chat" width={46} height={46} />
          <h1 className="text-center">Chat Communication</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 max-w-[20vw]">
          <Image src={community} alt="community" width={46} height={46} />
          <h1 className="text-center">Join the community</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 max-w-[20vw]">
          <Image src={github} alt="github" width={46} height={46} />
          <h1 className="text-center">Github Access</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            perspiciatis?
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <Image src={logo} width={150} height={26} alt="logo" />
        <div>
          <ul className="flex gap-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Advertise</li>
            <li className="cursor-pointer">Support</li>
            <li className="cursor-pointer">Marketing</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
        <p className="text-base">
          <AiOutlineCopyright className="inline mr-2 text-xl" />
          Copyright 2022 By Redq.inc
        </p>
      </div>
    </div>
  );
};

export default Footer;
