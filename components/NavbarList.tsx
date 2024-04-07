import React from "react";

const NavbarList: React.FC = (): JSX.Element => {
  return (
    <>
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
    </>
  );
};

export default NavbarList;
