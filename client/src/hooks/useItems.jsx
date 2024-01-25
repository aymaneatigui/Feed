import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsAc } from "../features/items/itemsAction.jsx";
import { useState } from "react";

const useItems = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  const [sort, setSort] = useState("label");
  const [list, setList] = useState([]);
  const [filtred, setFiltred] = useState(false);
  const [editSort, setEditSort] = useState(false);

  //Get Items :
  useEffect(() => {
    dispatch(getItemsAc());
  }, [dispatch]);

  useEffect(() => {
    let filtredList = [...items];
    if (filtred) {
      filtredList = filtredList.filter((i) => i?.isAvailable == true);
    }
    switch (sort) {
      case "created":
        filtredList = filtredList.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        break;

      case "lowestprice":
        filtredList = filtredList.sort((a, b) => a.price - b.price);
        break;

      case "highestprice":
        filtredList = filtredList.sort((a, b) => b.price - a.price);
        break;

      default:
        filtredList = filtredList.sort((a, b) => b.label - a.label);
        break;
    }
    // if (sort == "created") {
    //   filtredList = filtredList.sort(
    //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    //   );
    // }
    console.log(filtredList);
    setList(filtredList);
  }, [filtred, items, sort]);

  // Function to find an item by id
  const findItemById = (itemId) => {
    const foundItem = items.find((item) => item?.id === itemId);
    return foundItem || false;
  };

  const sortRef = useRef();

  const handleClickOutside = (e) => {
    if (sortRef.current.contains(e.target)) {
      return;
    }
    setEditSort(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    items: list,
    findItemById,
    setFiltred,
    filtred,
    setSort,
    sort,
    setEditSort,
    editSort,
    sortRef,
  };
};

export default useItems;
