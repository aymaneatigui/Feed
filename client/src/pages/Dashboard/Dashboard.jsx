import useDashboard from "../../hooks/useDashboard.jsx";
import SideBar from "../SideBar.jsx";
import CardCategories from "./CardCategories.jsx";
import CardProducts from "./CardProducts.jsx";

const Dashboard = () => {
  const { items, categories } = useDashboard();

  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="2xl:gap-7.5 grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-6 xl:grid-cols-3">
          <CardProducts items={items} />
          <CardCategories categories={categories} />
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar flex h-full w-full items-center justify-center overflow-x-hidden overflow-y-hidden p-5">
            <h1 className="select-none text-8xl font-extrabold xs:text-9xl">
              Feed.
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
