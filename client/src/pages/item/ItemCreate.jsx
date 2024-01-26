import useItem from "../../hooks/useItem.jsx";
import SideBar from "../SideBar.jsx";

const ItemCreate = () => {
  const { register, addItem, reset, cancel } = useItem();

  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 flex w-full items-center justify-between px-5">
          <div></div>
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
                    <div className="w-5" alt="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shapeRendering="geometricPrecision"
                        textRendering="geometricPrecision"
                        imageRendering="optimizeQuality"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        viewBox="0 0 510 511.91"
                      >
                        <path
                          fillRule="nonzero"
                          d="M375.81 301.17 167.58 509.4a8.552 8.552 0 0 1-12.11 0L2.51 356.45a8.564 8.564 0 0 1 0-12.12L210.74 136.1a8.51 8.51 0 0 1 6.06-2.52h83.97C329.63 58.8 366.74 20.67 401.25 6.67c32.8-13.31 63.44-5.58 83.86 13.35 20.29 18.81 30.27 48.72 21.95 79.92-10.07 37.78-47.22 77.46-126.25 99.74-1.92.54-3.86.5-5.65.01l3.13 95.16c.08 2.45-.89 4.69-2.5 6.3l.02.02zm-52.48-167.59h41.39c4.74 0 8.57 3.84 8.57 8.57 0 .15 0 .30-.01.44l1.22 37.01.62-.20c70.54-19.89 103.2-53.39 111.58-84.82 6.2-23.24-1.07-45.37-15.94-59.15-14.74-13.66-37.21-19.12-61.6-9.22-28.86 11.71-60.15 44.01-85.83 107.37zm.52 59.45c1.16 1.33 2.00 2.94 2.37 4.76 1.03 2.77 1.60 5.76 1.60 8.88 0 7.02-2.85 13.38-7.45 17.98s-10.96 7.45-17.98 7.45-13.37-2.85-17.97-7.45a25.315 25.315 0 0 1-7.45-17.98c0-5.89 2-11.32 5.37-15.63 3.82-14.39 7.89-27.8 12.19-40.31h-74.18L20.69 350.39l140.83 140.83 199.57-199.57-4.63-140.92h-39.67c-3.46 9.66-6.79 19.96-9.99 30.90 5.26.93 9.96 3.45 13.57 7.06 1.31 1.32 2.48 2.77 3.48 4.34z"
                        />
                      </svg>
                    </div>
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
                  cancel();
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
