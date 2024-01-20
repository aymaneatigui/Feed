import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItemAc } from "../features/categoryItem/categoryItemAction.jsx";

const useCategoryItem = () => {
  const dispatch = useDispatch();

  const { categoryItem } = useSelector((state) => state.categoryItem);

  useEffect(() => {
    dispatch(getCategoryItemAc());
  }, [dispatch]);

  return { categoryItem: categoryItem || [] };
};

export default useCategoryItem;
