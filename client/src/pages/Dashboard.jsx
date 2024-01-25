import SideBar from "./SideBar.jsx";

const Dashboard = () => {
  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar h-full w-full overflow-y-auto overflow-x-hidden p-5"></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
