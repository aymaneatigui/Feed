import SideBar from "../SideBar.jsx";
import SelectItem from "./SelectItem.jsx";
import { useSelector } from "react-redux";
import SelectCategory from "./SelectCategory.jsx";
import useManager from "../../hooks/useManager.jsx";
import useCategoryItem from "../../hooks/useCategoryItem.jsx";
import ManageCategory from "./ManageCategory.jsx";

const Manager = () => {
  const { categoryItem } = useCategoryItem();
  const { categories } = useSelector((state) => state.categories);
  const {
    associate,
    movedItems,
    addMovedItems,
    selectedCategory,
    setSelectedCategory,
    indexedItems,
    leftItems,
    selectedItems,
    setSelectedItems,
    resetCounter,
    updatePositions,
  } = useManager();

  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        {/* Associate */}
        <div className="mb-3 flex flex-col justify-start lg:flex-row">
          <div className=" flex w-full flex-col items-center  sm:flex-row sm:items-center sm:justify-between lg:justify-start">
            <div className="mb-2 h-12 w-full sm:mb-0 sm:mr-5 xl:w-80">
              <SelectCategory
                mydata={categories}
                setSelected={setSelectedCategory}
              />
            </div>
            {selectedCategory != null && (
              <div className="mb-2 h-12 w-full sm:mb-0 sm:ml-5 xl:w-80">
                <SelectItem
                  mydata={leftItems}
                  setSelected={setSelectedItems}
                  associate={selectedCategory}
                />
              </div>
            )}
          </div>
          <div className="flex ">
            <div
              onClick={() => {
                if (selectedItems.length != 0 && selectedCategory != null) {
                  associate(
                    selectedItems,
                    selectedCategory,
                    categoryItem[selectedCategory?.id],
                  );
                }
              }}
              className="mr-2 mt-2 flex h-12 w-fit cursor-pointer select-none items-center justify-center self-start  whitespace-nowrap rounded-full border border-dashed border-gray-900 bg-zinc-50 px-7 py-2  hover:bg-zinc-50/50 lg:ml-5 lg:mr-3 lg:mt-0  "
            >
              Associate
            </div>
            {movedItems.length > 0 && (
              <div
                onClick={() => {
                  updatePositions();
                }}
                className="mt-2 flex h-12 w-fit cursor-pointer select-none items-center justify-center self-start  whitespace-nowrap rounded-full border border-dashed border-gray-900 bg-orange-100/25  px-7 py-2  hover:bg-zinc-50/50 lg:ml-5 lg:mr-3 lg:mt-0  "
              >
                Update
              </div>
            )}
          </div>
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar h-full w-full overflow-y-auto overflow-x-hidden p-5">
            <div className=" grid h-full w-full grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3">
              {categories?.map((Category) => {
                return (
                  <ManageCategory
                    key={Category?.id + resetCounter}
                    itemList={categoryItem[Category?.id]}
                    indexedItems={indexedItems}
                    category={Category}
                    addMovedItems={addMovedItems}
                  />
                );
              })}
            </div>
          </div>
        </section>{" "}
      </div>
    </div>
  );
};

export default Manager;
