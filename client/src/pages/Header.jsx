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
              <div className="w-5 select-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.933 16.933"
                  id="menu"
                >
                  <path
                    fill="0f172a"
                    d="M12.271 1.323H1.984c-1.1-.042-1.1 1.63 0 1.588H12.23c1.08.042 1.122-1.588.042-1.588zM1.984 7.673c-1.058 0-1.058 1.587 0 1.587h5.8c1.08 0 1.08-1.587 0-1.587zm0 6.35c-1.058 0-1.058 1.587 0 1.587h12.997c1.058 0 1.058-1.587 0-1.587z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
            <div
              className="cursor-pointer rounded-md border border-slate-900/30 p-[7px] hover:border-slate-900/80"
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
          )}
        </div>
        {/* Logo */}
        <div className="flex h-full w-full items-center justify-start">
          <h1 className="select-none text-3xl font-extrabold sm:text-4xl">
            <Link className=" hidden sm:inline" to={"/"}>
              Feed.
            </Link>
            <div className="sm:hidden">Feed.</div>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
