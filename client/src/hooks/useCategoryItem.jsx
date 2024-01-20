import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryItem } from "../features/categoryItem/categoryItemAction.jsx";

const useCategoryItem = () => {
  const dispatch = useDispatch();

  const { categoryItem } = useSelector((state) => state.categoryItem);

  useEffect(() => {
    dispatch(getCategoryItem());
  }, [dispatch]);

  return { categoryItem: categoryItem || [] };
};

export default useCategoryItem;
