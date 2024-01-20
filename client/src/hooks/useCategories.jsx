import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAc } from "../features/categories/categoriesAction.jsx";

const useCategories = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  // Get Categories
  useEffect(() => {
    dispatch(getCategoriesAc());
  }, [dispatch]);

  return { categories: categories || [] };
};

export default useCategories;
