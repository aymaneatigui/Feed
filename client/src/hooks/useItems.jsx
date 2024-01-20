import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../features/items/itemsAction.jsx";

const useItems = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return { items: items || [] };
};

export default useItems;
