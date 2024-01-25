import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryItemAc,
  deleteCategoryItemAc,
  updateCategoryItemAc,
} from "../features/categoryItem/categoryItemAction.jsx";
import { useEffect, useState } from "react";

const useManager = (closeModalcat) => {
  const dispatch = useDispatch();

  const { categoryItem } = useSelector((state) => state.categoryItem);
  const { items, indexedItems } = useSelector((state) => state.items);

  // Moved Items states
  const [movedItems, setMovedItems] = useState([]);

  // Association states
  const [leftItems, setLeftItem] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const [resetCounter, setResetCounter] = useState(0);

  // -----------------------------------------

  // Associate Items with Category Function
  const associate = (items, category, catItem) => {
    console.log(items, category, catItem);
    let data = [];
    let length = catItem == undefined ? 0 : catItem.length;

    items.forEach((item) => {
      data = [
        ...data,
        {
          categoryId: category.id,
          itemId: item.id,
          position: length,
        },
      ];
      length++;
    });

    dispatch(addCategoryItemAc(data)).then(() => window.location.reload());
  };
  // Delete Assosiation Function
  const deleteAssociation = (data) => {
    dispatch(deleteCategoryItemAc(data));
    closeModalcat();
  };
  // Update Assosiation
  const updateCategoryItem = (data) => {
    dispatch(updateCategoryItemAc(data));
  };

  // Add MovedItems Function
  const addMovedItems = (newMovedItems) => {
    console.log("manager", newMovedItems);
    if (newMovedItems.length > 0) {
      setMovedItems((prevItems) => {
        const newItems = [...prevItems];
        newMovedItems.forEach((newItem) => {
          const existingItemIndex = newItems.findIndex(
            (item) => item.id === newItem.id,
          );

          // If the item exists, replace it
          if (existingItemIndex !== -1) {
            newItems[existingItemIndex] = newItem;
          } else {
            // If the item doesn't exist, add it
            newItems.push(newItem);
          }
        });
        return newItems;
      });
    }
  };
  // Clear MovedItems
  const clearMovedItems = () => {
    setMovedItems([]);
  };

  // Let only Items Left
  useEffect(() => {
    if (selectedCategory && categoryItem[selectedCategory?.id]) {
      const association = categoryItem[selectedCategory.id];

      const existingItemIds = association.map((item) => item.itemId);

      const filteredItems = items.filter(
        (item) => !existingItemIds.includes(item.id),
      );

      setLeftItem(filteredItems);
    } else {
      setLeftItem(items);
    }
  }, [categoryItem, items, selectedCategory]);

  // updatePostions
  const updatePositions = () => {
    if (movedItems.length > 0) {
      const data = movedItems.map(({ id, newPosition }) => ({
        id,
        position: newPosition,
      }));
      updateCategoryItem(data);
      clearMovedItems();
      setResetCounter((prevCounter) => prevCounter + 1);
    }
  };

  return {
    associate,
    deleteAssociation,
    updateCategoryItem,
    movedItems,
    addMovedItems,
    clearMovedItems,
    leftItems,
    setSelectedCategory,
    selectedCategory,
    indexedItems,
    selectedItems,
    setSelectedItems,
    resetCounter,
    updatePositions,
  };
};

export default useManager;
