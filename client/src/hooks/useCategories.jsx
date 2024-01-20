import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../features/categories/categoriesAction.jsx";

const useCategories = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return { categories: categories || [] };
};

export default useCategories;
