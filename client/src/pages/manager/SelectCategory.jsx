import { useEffect, useRef, useState } from "react";

const SelectCategory = ({ mydata, setSelected }) => {
  const node = useRef();

  const sortedData = mydata
    .slice()
    .sort((a, b) => a.label.localeCompare(b.label));

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setDropdown(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [dropdown, setDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setSelected(selectedItem);
  }, [selectedItem, setSelected]);

  const clearData = () => {
    setSelectedItem(null);
    setDropdown(false);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setDropdown(false);
  };

  return (
    <div ref={node} className="h-full md:max-w-sm">
      <div className="relative h-full ">
        <div className="flex h-full items-center justify-between">
          <div
            onClick={() => setDropdown(!dropdown)}
            className=" flex h-full w-full  cursor-pointer select-none items-center justify-start overflow-hidden rounded-l-3xl border border-r-0 border-gray-300  bg-zinc-50 text-sm text-gray-900  hover:bg-zinc-100 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 "
          >
            {selectedItem ? (
              <div className=" myScrollbar flex h-full w-full items-center justify-start overflow-x-auto overflow-y-hidden ps-6 text-base font-normal ">
                <span className="whitespace-nowrap">{selectedItem?.label}</span>
              </div>
            ) : (
              <span className="ml-4 ">Choose Category</span>
            )}
          </div>
          <div
            onClick={() => clearData(false)}
            className="h-full w-12 cursor-pointer  select-none rounded-r-3xl border  border-gray-300 bg-zinc-50 hover:bg-zinc-100"
          >
            <div className="flex h-full w-full items-center justify-center">
              <div className="w-4">
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
        </div>

        <input
          type="checkbox"
          name="show_more"
          id="show_more"
          className="peer hidden"
          checked={dropdown}
          onChange={() => setDropdown(!dropdown)}
        />

        <div className="myScrollbar absolute z-20 mt-[70px] hidden max-h-52 w-full flex-col overflow-hidden overflow-y-auto rounded-xl border border-gray-200 bg-white shadow peer-checked:flex sm:mt-1">
          {mydata?.length > 0 ? (
            sortedData?.map((item) => {
              return (
                <div
                  onClick={() => selectItem(item)}
                  key={item?.id}
                  className="group cursor-pointer"
                >
                  <div className="block border-l-4 border-transparent p-2 group-hover:border-zinc-500 group-hover:bg-gray-100 ">
                    {item?.label}
                  </div>
                </div>
              );
            })
          ) : (
            <span>No Category Exsist</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
