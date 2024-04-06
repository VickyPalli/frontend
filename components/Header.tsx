import React from "react";
import Image from "next/image";
const Header: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="flex items-center justify-between py-5 w-3/4 m-auto">
        <div className="flex items-center gap-3">
          <Image src="/logo.jpeg" alt="logo" width={80} height={80} />
          <div className="flex flex-col">
            <h1 className="text-xl text-orange-600">SRI SANGAMESWARA</h1>
            <h1 className="text-xl text-green-600">SCHOOL</h1>
            <h1 className="text-xl "></h1>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <h3 className="text-zinc-700 text-lg cursor-pointer decoration-2 underline-offset-[15px] hover:text-blue-400 hover:underline">
            Home
          </h3>
          <h3 className="text-zinc-700 text-lg cursor-pointer decoration-2 underline-offset-[15px] hover:text-blue-400 hover:underline">
            About
          </h3>
          <h3 className="text-zinc-700 text-lg cursor-pointer decoration-2 underline-offset-[15px] hover:text-blue-400 hover:underline">
            Admission
          </h3>
          <h3 className="text-zinc-700 text-lg cursor-pointer decoration-2 underline-offset-[15px] hover:text-blue-400 hover:underline">
            Gallery
          </h3>
          <h3 className="text-zinc-700 text-lg cursor-pointer decoration-2 underline-offset-[15px] hover:text-blue-400 hover:underline">
            Contact
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
