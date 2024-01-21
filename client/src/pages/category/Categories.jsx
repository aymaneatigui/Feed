import useCategories from "../../hooks/useCategories.jsx";
import SideBar from "../SideBar.jsx";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <div className="flex ">
      <SideBar />
      <div className="ml-10">
        Categories :
        {categories.map((category) => (
          <div key={category.id}>
            <h1>{category.label}</h1>
            <span>{category.position}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
