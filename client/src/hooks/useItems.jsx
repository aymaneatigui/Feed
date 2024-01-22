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
  
  // Function to find an item by id
  const findItemById = (itemId) => {
    const foundItem = items.find((item) => item?.id === itemId);
    return foundItem || false;
  };

  return { items: items || [], findItemById };
};

export default useItems;
