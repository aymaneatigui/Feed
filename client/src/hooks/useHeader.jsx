import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../features/config/configSlice.jsx";

const useHeader = () => {
  const { sidebar } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(openSidebar());
  };

  const closeMenu = () => {
    dispatch(closeSidebar());
  };

  return { sidebar, openMenu, closeMenu };
};

export default useHeader;
