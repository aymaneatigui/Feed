import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCategories = () => {
  const { categories } = useSelector((state) => state.categories);

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    setCategoriesList(categories);
  }, [categories]);

  return { categories: categoriesList };
};

export default useCategories;
