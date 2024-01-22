import useItems from "../../hooks/useItems.jsx";
import { Link } from "react-router-dom";
import SideBar from "../SideBar.jsx";
import Item from "./Item.jsx";

const Items = () => {
  const { items } = useItems();
  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 flex w-full items-center justify-between">
          <Link
            to={"/item/create"}
            className="ml-3 w-fit cursor-pointer whitespace-nowrap rounded-full border border-dashed border-gray-900 px-5 py-2 leading-tight hover:bg-gray-300/50 "
          >
            New Item
          </Link>
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar h-full w-full overflow-auto">
            <table className="w-full divide-y divide-gray-200 text-left text-sm text-gray-500">
              <thead className="h-14 bg-zinc-100 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">Label</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3">Created</th>
                  <th scope="col" className="px-6 py-3">Description</th>
                  <th scope="col" className="px-6 py-3 text-center">Availability</th>
                  <th scope="col" className="px-6 py-3 text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
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
