import useItem from "../../hooks/useItem.jsx";
import SideBar from "../SideBar.jsx";

const ItemCreate = () => {
  const { register, addItem, reset } = useItem();

  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 flex w-full items-center justify-between px-5">
          <div>{"Items > Coffee"}</div>
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <form
            onSubmit={addItem}
            className="myScrollbar flex h-full w-full flex-col justify-between overflow-auto p-5"
          >
            <div className="ml-2 sm:mt-3">
              {/* Label */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-4 ">
                <div className="col-span-1 whitespace-nowrap px-2 font-medium text-zinc-700 lg:col-span-2">
                  Label :
                </div>
                <div className="relative col-span-3 w-full  sm:max-w-sm lg:col-span-2">
                  <div className="pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
                    <img src="/label.svg" className="w-5" alt="" />
                  </div>
                  <input
                    {...register("label", { required: "label is required" })}
                    type="text"
                    className="block w-full rounded-lg border border-gray-300 bg-zinc-50  p-2.5 ps-11  text-sm text-gray-900 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 sm:max-w-sm lg:col-span-2"
                    placeholder="Item name"
                  />
                </div>
              </div>
              {/* Price */}
              <div className="mb-4 grid  grid-cols-1 gap-3 sm:mb-7 sm:grid-cols-4 ">
                <div className="col-span-1 whitespace-nowrap px-2 font-medium text-zinc-700 lg:col-span-2">
                  Price :
                </div>
                <div className="relative col-span-3 w-full  sm:max-w-sm lg:col-span-2">
                  <div className="pointer-events-none absolute inset-y-0 start-0 top-0 flex items-center ps-3.5">
                    <svg
                      className="h-4 w-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    {...register("price", { required: "price is required" })}
                    className="block w-full rounded-lg border border-gray-300 bg-zinc-50  p-2.5 ps-11 text-sm text-gray-900 focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                    placeholder="Price (in dollars)"
                  />
                </div>
              </div>
              {/* Description */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-7 sm:grid-cols-4 ">
                <div className="col-span-1 whitespace-nowrap px-2 font-medium text-zinc-700 lg:col-span-2">
                  Description :
                </div>
                <div className="relative col-span-3 w-full  sm:max-w-sm lg:col-span-2">
                  <textarea
                    {...register("description", {
                      required: "description is required",
                    })}
                    rows={4}
                    className="block w-full rounded-lg border border-gray-300 bg-zinc-50 p-2.5 ps-3.5  text-sm text-gray-900 focus:border-gray-500 focus:ring-1 focus:ring-gray-500 sm:max-w-sm lg:col-span-2"
                    placeholder="Brief Description..."
                  />
                </div>
              </div>
              {/* Available */}
              <div className="mb-4 grid grid-cols-1 gap-3 sm:mb-7 sm:grid-cols-4 ">
                <div className="col-span-1 whitespace-nowrap px-2 font-medium text-zinc-700 lg:col-span-2">
                  Available :
                </div>
                <label className="relative col-span-3 ml-2 inline-flex  w-full cursor-pointer items-center sm:max-w-sm lg:col-span-2">
                  <input
                    {...register("isAvailable")}
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked={true}
                  />
                  <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
                </label>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <div
                onClick={() => {
                  reset();
                }}
                className="ml-3  w-fit cursor-pointer select-none whitespace-nowrap rounded-full border border-dashed border-gray-900  px-5 py-2 leading-tight hover:bg-gray-300/20 "
              >
                cancel
              </div>
              <div
                onClick={addItem}
                className="ml-3 w-fit cursor-pointer select-none whitespace-nowrap rounded-full border border-dashed border-gray-900 bg-green-300/80 px-5 py-2 leading-tight hover:bg-green-300/50 "
              >
                save
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ItemCreate;
