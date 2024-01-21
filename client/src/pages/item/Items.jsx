import useItems from "../../hooks/useItems.jsx";
import SideBar from "../SideBar.jsx";

const Items = () => {
  const { items } = useItems();
  return (
    <div className="flex">
      <SideBar />
      <div className="mx-3 h-full w-full">
        <div className="pb-3">Items :</div>
        <div className="w-full overflow-hidden rounded-t-3xl border border-gray-900/10 bg-zinc-100">
          <div className="">
            {items.map((item) => (
              <div key={item.id}>
                <h2>{item.label}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.isAvailable ? "Available" : "Not Available"}</p>
                <p>{item.createdAt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
