import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addItemAc,
  deleteItemAc,
  updateItemAc,
} from "../features/items/itemsAction.jsx";
import { useNavigate } from "react-router-dom";

const useItem = (id) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Create
  const addOnSubmit = (data) => {
    if (data?.isAvailable) {
      data.isAvailable = data.isAvailable.toString();
    }
    data.label = data.label.charAt(0).toUpperCase() + data.label.slice(1);
    data.description =
      data.description.charAt(0).toUpperCase() + data.description.slice(1);
    dispatch(addItemAc(data));
    reset();
    navigate("/items");
  };

  // Update
  const updateOnSubmit = (obj) => {
    const data = Object.fromEntries(
      Object.entries(obj).filter(([, value]) => value != undefined),
    );
    dispatch(updateItemAc({ id, data }));
    reset();
  };

  // Delete
  const deleteOnSubmit = () => {
    dispatch(deleteItemAc({ id }));
    reset();
    navigate("/items");
  };

  const cancel = () => {
    navigate("/items");
  };

  return {
    register,
    reset,
    addItem: handleSubmit(addOnSubmit),
    updateItem: handleSubmit(updateOnSubmit),
    deleteItem: handleSubmit(deleteOnSubmit),
    cancel
  };
};

export default useItem;
