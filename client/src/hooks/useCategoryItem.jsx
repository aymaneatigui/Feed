import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItemAc } from "../features/categoryItem/categoryItemAction.jsx";
import { getItemsAc } from "../features/items/itemsAction.jsx";
import { getCategoriesAc } from "../features/categories/categoriesAction.jsx";

const useCategoryItem = () => {
  const dispatch = useDispatch();

  const { categoryItem } = useSelector((state) => state.categoryItem);

  useEffect(() => {
    dispatch(getCategoryItemAc());
    dispatch(getItemsAc());
    dispatch(getCategoriesAc());
  }, [dispatch]);

  // const catItemsQte = (id) => {
  //   if (categoryItem[id] && categoryItem[id].length > 0) {
  //     return categoryItem[id].length;
  //   } else {
  //     return 0;
  //   }
  // };

  return { categoryItem };
};

export default useCategoryItem;
