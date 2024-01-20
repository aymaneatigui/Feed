import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsAc } from "../features/items/itemsAction.jsx";

const useItems = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  //Get Items :
  useEffect(() => {
    dispatch(getItemsAc());
  }, [dispatch]);

  return { items: items || [] };
};

export default useItems;
