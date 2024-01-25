import { useDispatch, useSelector } from "react-redux";
import { getItemsAc } from "../features/items/itemsAction.jsx";
import { getCategoriesAc } from "../features/categories/categoriesAction.jsx";
import { useEffect } from "react";

const useDashboard = () => {

  const { items } = useSelector((state) => state.items);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItemsAc());
    dispatch(getCategoriesAc())
  }, [dispatch]);

  return {items, categories};
};

export default useDashboard;
