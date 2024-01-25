import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategoryAc,
  deleteCategoryAc,
  getCategoriesAc,
  updateCategoryAc,
} from "../features/categories/categoriesAction.jsx";
import { useEffect } from "react";

const useCategory = ({ closeModal, id }) => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const { categories } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategoriesAc());
  // }, [dispatch]);

  const addCategory = (data) => {
    data.position = categories.length;
    dispatch(addCategoryAc(data));
    reset();
    closeModal();
  };

  const deleteCategory = () => {
    dispatch(deleteCategoryAc({ id }));
    let newcategories = JSON.parse(JSON.stringify(categories));
    let originalId = id;

    // Find the original object and its current position
    let originalPosition;
    for (let i = 0; i < newcategories.length; i++) {
      if (newcategories[i].id === originalId) {
        originalPosition = newcategories[i].position;
        break;
      }
    }

    // Remove the item from the array
    newcategories = newcategories.filter(
      (category) => category.id !== originalId,
    );

    // Decrement positions of items that were after the removed item
    for (let i = 0; i < newcategories.length; i++) {
      if (newcategories[i].position > originalPosition) {
        newcategories[i].position -= 1;
      }
    }

    dispatch(updateCategoryAc(newcategories));

    closeModal();
  };

  // Update Category :
  const updateCategory = (obj) => {
    let newcategories = JSON.parse(JSON.stringify(categories));
    let originalId = id;
    let updatedData = obj;

    let newPosition = parseInt(updatedData.position) - 1;

    // Find the original object and its current position
    let originalPosition;
    for (let i = 0; i < newcategories.length; i++) {
      if (newcategories[i].id === originalId) {
        originalPosition = newcategories[i].position;
        break;
      }
    }

    // Update the position of the item
    for (let i = 0; i < newcategories.length; i++) {
      if (newcategories[i].id === originalId) {
        newcategories[i] = {
          ...newcategories[i],
          ...updatedData,
          position: newPosition,
        };
        break;
      }
    }

    // Shift positions of other items to make room for the updated item
    for (let i = 0; i < newcategories.length; i++) {
      if (newcategories[i].id !== originalId) {
        if (
          newcategories[i].position >= newPosition &&
          newcategories[i].position < originalPosition
        ) {
          newcategories[i].position += 1;
        } else if (
          newcategories[i].position <= newPosition &&
          newcategories[i].position > originalPosition
        ) {
          newcategories[i].position -= 1;
        }
      }
    }

    // Sort the array based on the position property
    newcategories.sort((a, b) => a.position - b.position);

    dispatch(updateCategoryAc(newcategories));
    reset();
    closeModal();
  };

  return {
    register,
    watch,
    setValue,
    deleteCategory,
    updateCategory: handleSubmit(updateCategory),
    addCategory: handleSubmit(addCategory),
  };
};

export default useCategory;
