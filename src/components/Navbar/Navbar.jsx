import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchAndCart from "./SearchAndCart";

const Navbar = ({ onCartClick }) => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Logo />
          <Menu />
          <SearchAndCart onCartClick={onCartClick} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
