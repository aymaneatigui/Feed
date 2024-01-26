import { Link } from "react-router-dom";
import useHeader from "../hooks/useHeader.jsx";
import { useEffect, useRef } from "react";

const MobileSideBar = () => {
  const { sidebar, closeMenu } = useHeader();
  const slideStyle = sidebar ? "translate-x-0" : "-translate-x-full";

  const bar = useRef();
  const handleClickOutside = (e) => {
    if (bar.current.contains(e.target)) {
      return;
    }
    closeMenu();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={bar}
      className={`transform transition-transform duration-500 ease-in-out ${slideStyle} fixed  left-0 top-0 z-50 h-screen w-[260px] rounded-tr-3xl border border-gray-400 bg-zinc-200 px-4 shadow-2xl duration-500 md:hidden`}
    >
      <div className="flex h-16 w-full items-center justify-between py-2 ">
        {/* Logo */}
        <h1 className="select-none text-3xl font-extrabold">
          <Link to={"/"}>Feed.</Link>
        </h1>
        <div
          className="cursor-pointer select-none rounded-lg border border-slate-900/30 p-[6px] hover:border-slate-900/80 "
          onClick={closeMenu}
        >
          <div className="w-5 cursor-pointer">
            <svg
              fill="0f172a"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 4.233 4.233"
              id="cross"
            >
              <g transform="translate(73.405 -1.965)">
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g transform="translate(.273)">
                                <g>
                                  <g>
                                    <g>
                                      <g>
                                        <g
                                          strokeWidth=".374"
                                          transform="matrix(.5 .5 -.5 .5 -33.877 37.684)"
                                        >
                                          <g>
                                            <g transform="rotate(45 -71.288 4.081)">
                                              <g transform="translate(.187 -.186)">
                                                <g transform="rotate(45 -71.289 4.082)">
                                                  <g>
                                                    <path
                                                      fill="none"
                                                      stroke="#000"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      d="M-71.290676 1.435854l.0011 5.8204881M-68.379882 4.346648l-5.820488-.0011"
                                                      paintOrder="markers fill stroke"
                                                    ></path>
                                                  </g>
                                                </g>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8 flex h-auto w-full flex-col font-medium">
        <Link
          to={"/"}
          className={`w-full rounded-md px-6 py-4 focus:bg-gray-300/50`}
          onClick={closeMenu}
        >
          Dashboard
        </Link>
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
      </div>
    </div>
  );
};

export default MobileSideBar;
