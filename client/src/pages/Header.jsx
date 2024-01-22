import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader.jsx";

const Header = () => {
  const { sidebar, openMenu, closeMenu } = useHeader();

  return (
    <header className="z-10 mb-2 flex h-16 w-full items-center px-4 py-2 md:px-12">
      <div className="flex h-full w-full items-center justify-start ">
        {/* Side Bar open/close */}
        <div className="mr-8 flex h-12 w-16 items-center justify-center md:hidden">
          {!sidebar ? (
            <div
              className="cursor-pointer select-none rounded-md border border-slate-900/30 p-[7px] hover:border-slate-900/80"
              onClick={openMenu}
            >
              <img src="/menu.svg" alt="openMenu" className="w-5 select-none" />
            </div>
          ) : (
            <div
              className="cursor-pointer rounded-md border border-slate-900/30 p-[7px] hover:border-slate-900/80"
              onClick={closeMenu}
            >
              <img
                src="/cancel.svg"
                alt="closeMenu"
                className="w-5 cursor-pointer"
              />
            </div>
          )}
        </div>
        {/* Logo */}
        <div className="flex h-full w-full items-center justify-start">
          <h1 className="text-3xl select-none font-extrabold sm:text-4xl">
            <Link to={'/'}>Feed.</Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
