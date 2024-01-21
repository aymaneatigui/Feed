import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const activePage = location.pathname.replace("/", "");
  const activeStyle =
    "font-semibold rounded-l-sm border-l-zinc-500  bg-gray-300/50 px-4 py-2 border-l-4";

  return (
    <aside className="hidden h-screen w-52 min-w-52  md:block">
      <div className="flex h-auto w-full flex-col px-6 font-medium">
        <Link
          to={"/items"}
          className={`my-2 w-full px-4 py-2 hover:bg-gray-300/50 rounded-r-md
            ${activePage == "items" && activeStyle}`}
        >
          Items
        </Link>
        <Link
          to={"/categories"}
          className={`my-2 w-full px-4 py-2 hover:bg-gray-300/50 rounded-md
            ${activePage == "categories" && activeStyle}`}
        >
          Categories
        </Link>
        <Link
          to={"/manager"}
          className={`my-2 w-full px-4 py-2  hover:bg-gray-300/50 rounded-md
            ${activePage == "manager" && activeStyle}`}
        >
          Manager
        </Link>
        <Link
          to={"/dashboard"}
          className={`my-2 w-full px-4 py-2  hover:bg-gray-300/50 rounded-md
            ${activePage == "dashboard" && activeStyle}`}
        >
          Dashboard
        </Link>
      </div>
    </aside>
  );
};

export default SideBar;
