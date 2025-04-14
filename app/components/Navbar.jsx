import React from "react";
import TopNav from "./navbar/topNav";
import MiddleNav from "./navbar/middleNav";
import BottomNav from "./navbar/bottomNav";

const Navbar = () => {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </div>
  );
};

export default Navbar;
