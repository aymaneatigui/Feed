import { useEffect, useRef, useState } from "react";

const SelectCategory = ({ mydata, setSelected }) => {
  const node = useRef();

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
              <img src="/cancel.svg" className="w-4" />
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

        <div className="myScrollbar z-20 absolute mt-[70px] hidden max-h-52 w-full flex-col overflow-hidden overflow-y-auto rounded-xl border border-gray-200 bg-white shadow peer-checked:flex sm:mt-1">
          {mydata?.length > 0 ? (
            mydata?.map((item) => {
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
