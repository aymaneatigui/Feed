import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader.jsx";

const MobileSideBar = () => {
  const { sidebar, closeMenu } = useHeader();
  const slideStyle = sidebar ? "translate-x-0" : "-translate-x-full";

  return (
    <div
      className={`transform transition-transform duration-500 ease-in-out ${slideStyle} fixed  left-0 top-0 z-50 h-screen w-[260px] rounded-tr-3xl border border-gray-400 bg-zinc-200 px-4 shadow-2xl duration-500 md:hidden`}
    >
      <div className="flex h-16 w-full items-center justify-between py-2 ">
        {/* Logo */}
        <h1 className="text-3xl select-none font-extrabold">Feed.</h1>
        <div
          className="cursor-pointer select-none rounded-lg border border-slate-900/30 p-[6px] hover:border-slate-900/80 "
          onClick={closeMenu}
        >
          <img
            src="/cancel.svg"
            alt="closeMenu"
            className="w-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-8 flex h-auto w-full flex-col font-medium">
        <Link
          to={"/items"}
          className={` w-full rounded-md px-6 py-4 focus:bg-gray-300/50`}
          onClick={closeMenu}
        >
          Items
        </Link>
        <Link
          to={"/categories"}
          className={` w-full rounded-md px-6 py-4 focus:bg-gray-300/50`}
          onClick={closeMenu}
        >
          Categories
        </Link>
        <Link
          to={"/manager"}
          className={`w-full rounded-md px-6 py-4 focus:bg-gray-300/50`}
          onClick={closeMenu}
        >
          Manager
        </Link>
        <Link
          to={"/dashboard"}
          className={`w-full rounded-md px-6 py-4 focus:bg-gray-300/50`}
          onClick={closeMenu}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default MobileSideBar;
