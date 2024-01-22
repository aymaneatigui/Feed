import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItemAc, deleteItemAc, updateItemAc } from "../features/items/itemsAction.jsx";
import { useNavigate } from "react-router-dom";

const useItem = (id) => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const updateOnSubmit = (obj) => {
    const data = Object.fromEntries(
      Object.entries(obj).filter(([, value]) => value != undefined),
    );
    dispatch(updateItemAc({ id, data }));
    reset();
  };
  const addOnSubmit = (data) => {
    if (data?.isAvailable) {
      data.isAvailable = data.isAvailable.toString();
    }
    dispatch(addItemAc(data));
    reset()
    navigate("/items")
  };

  const deleteOnSubmit = () => {
    dispatch(deleteItemAc({id}));
    reset()
    navigate("/items")
  };

  return {
    register,
    reset,
    addItem: handleSubmit(addOnSubmit),
    updateItem: handleSubmit(updateOnSubmit),
    deleteItem: handleSubmit(deleteOnSubmit),
  };
};

export default useItem;
