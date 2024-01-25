import { useEffect, useRef, useState } from "react";

const SelectItem = ({ mydata, setSelected }) => {
  const node = useRef();
  const sortedData = mydata.slice().sort((a, b) => a.label.localeCompare(b.label));

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
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setSelected(selectedItems);
  }, [selectedItems, setSelected]);

  const clearData = () => {
    setSelectedItems([]);
    setDropdown(false);
  };

  const selectItem = (item) => {
    // Check if the item's id already exists in selectedItems
    if (!selectedItems.some((selectedItem) => selectedItem.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const removeItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
  };

  return (
    <div ref={node} className="h-full md:max-w-sm">
      <div className="relative h-full ">
        <div className="flex h-full items-center justify-between">
          <div
            onClick={() => setDropdown(!dropdown)}
            className="  flex h-full w-full cursor-pointer select-none items-center justify-start overflow-hidden  rounded-l-3xl border border-r-0 border-gray-300 bg-zinc-50  text-sm text-gray-900 hover:bg-zinc-100 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 "
          >
            {selectedItems.length > 0 ? (
              <div className=" myScrollbar flex h-full w-full items-center justify-start overflow-x-auto overflow-y-hidden ">
                {selectedItems?.map((item) => {
                  return (
                    <div
                      key={item?.id}
                      className="relative  mx-[6px] flex h-6 items-center justify-center rounded-full bg-gray-200 pl-3 pr-5"
                    >
                      <span className="whitespace-nowrap">{item?.label}</span>
                      <div className="absolute -right-1">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            removeItem(item);
                          }}
                          className="flex h-full w-full items-center justify-center rounded-full bg-red-400 p-1 hover:bg-red-500"
                        >
                          <img src="/cancelw.svg" className="w-3" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <span className="ml-4">Choose Items</span>
            )}
          </div>
          <div
            onClick={() => clearData(false)}
            className="h-full w-12 cursor-pointer select-none rounded-r-3xl border  border-gray-300 bg-zinc-50 hover:bg-zinc-100"
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

        <div className="myScrollbar z-20 absolute mt-1 hidden max-h-52 w-full flex-col overflow-hidden overflow-y-auto rounded-xl border border-gray-200 bg-white shadow peer-checked:flex">
          {mydata.length > 0 ? (
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
            <span className="p-3">No Items left</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectItem;
