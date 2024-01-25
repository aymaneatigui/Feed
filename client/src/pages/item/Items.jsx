import useItems from "../../hooks/useItems.jsx";
import { Link } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import Item from "./Item.jsx";

const Items = () => {
  const {
    items,
    setFiltred,
    filtred,
    setSort,
    sort,
    setEditSort,
    editSort,
    sortRef,
  } = useItems();


  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 flex w-full items-center justify-between ">
          <Link
            to={"/item/create"}
            className="ml-3 w-fit cursor-pointer whitespace-nowrap rounded-full border border-dashed border-gray-900 px-5 py-2 leading-tight hover:bg-gray-300/50 "
          >
            New Item
          </Link>
          <div className="mr-5 flex">
            {/* Filter Icon */}
            <div
              onClick={() => {
                setFiltred(!filtred);
              }}
              className="group ml-3  flex cursor-pointer select-none items-center justify-center rounded-md border border-slate-900/30 p-2 hover:border-slate-900/80 hover:bg-gray-300/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="15"
                viewBox="0 0 22 20"
                id="filter"
              >
                <g
                  fill={filtred ? "#4b5563" : "none"}
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    stroke="#4b5563"
                    strokeWidth="1"
                    transform="translate(-1614 -1629)"
                  >
                    <g transform="translate(1615 1630)">
                      <path d="M20 0H0l8 9.46V16l4 2V9.46z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* Remevie Icon */}

            <div
              ref={sortRef}
              className="group relative ml-3 flex cursor-pointer select-none justify-center rounded-md border border-slate-900/30 p-1 duration-300 ease-in-out  hover:bg-gray-300/50 "
            >
              <button
                onClick={() => setEditSort(!editSort)}
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="relative flex h-full w-full rotate-90 items-center justify-center  rounded-lg  text-sm text-gray-500  focus:outline-none "
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
              <div
                className={`${!editSort && "hidden"}  z-10 absolute right-0 top-9 flex h-36 w-32 cursor-default flex-col overflow-hidden rounded-md border border-zinc-900/30 bg-zinc-50 pb-3  shadow-md duration-500 ease-in-out`}
              >
                <span className="my-1 h-5 w-full p-1 px-2 text-xs text-zinc-500">
                  Sort by :
                </span>
                <div className="mt-1  flex h-full w-full flex-col text-sm font-medium">
                  <span
                    onClick={() => setSort("label")}
                    className={`flex h-full w-full cursor-pointer items-center justify-start text-xs text-gray-700 hover:bg-gray-300/30
                    ${sort == "label" ? "border-l-4 border-zinc-900/50 bg-gray-300/70 ps-4 font-semibold" : "ps-3"}
                    `}
                  >
                    Label
                  </span>
                  <span
                    onClick={() => setSort("created")}
                    className={`flex h-full w-full cursor-pointer  items-center justify-start text-xs text-gray-700 hover:bg-gray-300/30
                    ${sort == "created" ? "border-l-4 border-zinc-900/50 bg-gray-300/70 ps-5 font-semibold" : "ps-3"}
                    `}
                  >
                    Created
                  </span>
                  <span
                    onClick={() => setSort("lowestprice")}
                    className={`flex h-full w-full cursor-pointer  items-center justify-start text-xs text-gray-700 hover:bg-gray-300/30
                    ${sort == "lowestprice" ? "border-l-4 border-zinc-900/50 bg-gray-300/70 ps-5 font-semibold" : "ps-3"}`}
                  >
                    Lowest price
                  </span>
                  <span
                    onClick={() => setSort("highestprice")}
                    className={`flex h-full w-full cursor-pointer  items-center justify-start text-xs text-gray-700 hover:bg-gray-300/30
                    ${sort == "highestprice" ? "border-l-4 border-zinc-900/50 bg-gray-300/70 ps-5 font-semibold" : "ps-3"}
                    `}
                  >
                    Highest price
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar h-full w-full overflow-auto">
            <table className="w-full divide-y divide-gray-200 border-b-2 text-left text-sm text-gray-500">
              <thead className="h-14 bg-zinc-100 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Label
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Availability
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {items?.map((item) => (
                  <Item key={item.id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Items;
