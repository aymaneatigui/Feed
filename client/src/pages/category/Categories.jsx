import useCategories from "../../hooks/useCategories.jsx";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <>
      <div>Categories :</div>
      {categories.map((category) => (
        <div key={category.id}>
          <h1>{category.label}</h1>
          <span>{category.position}</span>
        </div>
      ))}
    </>
  );
};

export default Categories;
