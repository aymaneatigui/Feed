import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../hooks/useCategory.jsx";
import DeletingModal from "../../modals/DeletingModal.jsx";
import UpdateCategoryModal from "../../modals/UpdateCategoryModal.jsx";
import Modal from "../../modals/modal.jsx";
import useManager from "../../hooks/useManager.jsx";

const ManageCategory = ({
  itemList,
  indexedItems,
  category,
  addMovedItems,
}) => {
  
  const edit = useRef();
  
  const [dropdown, setDropdown] = useState(false);
  const [deletingModal, setDeletingModal] = useState(false);
  const [categoryModal, setCategoryModal] = useState(false);

  const [deletingModalcat, setDeletingModalcat] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const closeModalcat = () => setDeletingModalcat(false);
  const { deleteAssociation } = useManager(closeModalcat);
  useEffect(() => {
    if (deletingModalcat == false) setActiveModalId(null);
  }, [deletingModalcat]);

  //Handel Postions
  const [newSort, setNewSort] = useState([]);
  // const [catMovedItems, setCatMovedItems] = useState([]);

  useEffect(() => {
    if (itemList && Array.isArray(itemList) && itemList.length > 0) {
      const original = () =>
        [...itemList].sort((a, b) => a.position - b.position);
      setNewSort(original);
    } else {
      setNewSort([]);
    }
  }, [itemList]);

  const moveItemPosition = (positionChange, itemToMove) => {
    setNewSort((prevSort) => {
      const updatedSort = [...prevSort];
      const index = updatedSort.findIndex((item) => item.id === itemToMove.id);

      if (index !== -1) {
        // Ensure the new position is within bounds
        const newPosition = Math.max(
          0,
          Math.min(updatedSort.length - 1, index + positionChange),
        );

        // Remove the item from the current position
        const movedItem = updatedSort.splice(index, 1)[0];

        // Insert the item at the new position
        updatedSort.splice(newPosition, 0, movedItem);

        let newItems = updatedSort.map((item, index) => ({
          ...item,
          newPosition: index,
        }));

        newItems = newItems.filter((item, index) => item.position !== index);
        addMovedItems(newItems);
        return updatedSort;
      } else {
        console.error("Item not found in the original sort");
        return prevSort;
      }
    });
  };

  const { deleteCategory } = useCategory({
    closeModal: () => setDeletingModal(false),
    id: category?.id,
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest("ul")) {
        // Click inside the button, do nothing
        return;
      }
      setDropdown(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const handleClickOutside = (e) => {
    if (edit.current.contains(e.target)) {
      return;
    }
    setDropdown(false);
  };

  return (
    <div className="mx-auto flex h-64 w-full  max-w-72 flex-col overflow-hidden rounded-xl border border-gray-900/50 bg-orange-100/15 shadow-md">
      <div className="z-10 flex h-20 w-full justify-between border-b border-b-zinc-900/50 bg-gray-400/10">
        {/* Label Category */}
        <div className="flex h-full w-full items-center justify-center">
          <span className="px-2">{category?.label}</span>
        </div>
        {/* Edit Btn */}
        <div className="relative flex w-16 items-center justify-center">
          <button
            ref={edit}
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="relative inline-block h-1/2 rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            type="button"
            onClick={() => {
              setDropdown(true);
            }}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`absolute right-2 top-12 z-10 w-20 list-none divide-y divide-gray-300 rounded-lg bg-zinc-100 text-base shadow
          ${dropdown ? "" : "hidden"}
          `}
          >
            <ul className="py-2" aria-labelledby="dropdownButton">
              <li>
                <button
                  onClick={() => {
                    setCategoryModal(true);
                    setDropdown(false);
                  }}
                  className="block w-full cursor-pointer px-4 py-2 text-start text-sm text-gray-700 hover:bg-gray-200/70 "
                >
                  Edit
                </button>
                {/* Add Category Modal */}
                {categoryModal && (
                  <Modal>
                    <UpdateCategoryModal
                      closeModal={() => setCategoryModal(false)}
                      id={category?.id}
                    />
                  </Modal>
                )}
              </li>
              <li>
                <button
                  onClick={() => {
                    setDeletingModal(true);
                    setDropdown(false);
                  }}
                  className="block cursor-pointer px-4 py-2 text-sm text-red-600 hover:bg-gray-200/70 "
                >
                  Delete
                </button>
                {/* Remevie Icon */}
                {deletingModal && (
                  <Modal>
                    <DeletingModal
                      id={category?.id}
                      item={category?.label}
                      closeModal={() => setDeletingModal(false)}
                      deleteFn={deleteCategory}
                    />
                  </Modal>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="myScrollbar h-full w-full overflow-y-auto overflow-x-hidden scrollbar-track-orange-100/15">
        {newSort &&
          newSort.map((catItem) => {
            const item = indexedItems[catItem?.itemId] || [];
            return (
              <div
                key={item.id}
                className="border-b-zinc-900/10text-center mb-1 flex h-14 w-full justify-between border-b border-t bg-black/5"
              >
                <div className="flex h-full w-16 flex-col ">
                  {/* UP */}
                  <div
                    onClick={() => moveItemPosition(-1, catItem)}
                    className=" group flex h-1/2 w-full cursor-pointer items-center justify-center  bg-gray-400/10"
                  >
                    <div className="duration-50 mx-auto w-4  ease-in-out group-hover:w-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96 96"
                        id="up"
                      >
                        <path
                          d="M91.2 67.6a4 4 0 0 1-6.83 2.83L48 34.06 11.63 70.43A4 4 0 0 1 6 64.77l39.2-39.2a4 4 0 0 1 5.66 0L90 64.77a4 4 0 0 1 1.2 2.83Z"
                          data-name="Artboard 7"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Down */}
                  <div
                    onClick={() => moveItemPosition(1, catItem)}
                    className=" group flex h-1/2 w-full cursor-pointer items-center justify-center bg-gray-400/10"
                  >
                    <div className="duration-50 mx-auto w-4 rotate-180 ease-in-out group-hover:w-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 96 96"
                        id="down"
                      >
                        <path
                          d="M91.2 67.6a4 4 0 0 1-6.83 2.83L48 34.06 11.63 70.43A4 4 0 0 1 6 64.77l39.2-39.2a4 4 0 0 1 5.66 0L90 64.77a4 4 0 0 1 1.2 2.83Z"
                          data-name="Artboard 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-full items-center justify-start pl-8">
                  {item?.label}
                </div>
                {/* Remevie */}
                <div className="flex h-full w-14 items-center justify-center">
                  {deletingModalcat && activeModalId === catItem.id && (
                    <Modal>
                      <DeletingModal
                        id={[catItem?.id]}
                        item={` Association ${category?.label} - ${item?.label}`}
                        closeModal={() => setDeletingModalcat(false)}
                        deleteFn={deleteAssociation}
                      />
                    </Modal>
                  )}

                  <div
                    id="itemcatmodal"
                    onClick={() => {
                      setDeletingModalcat(true);
                      setActiveModalId(catItem?.id);
                    }}
                    className="group mx-auto w-fit cursor-pointer rounded-full bg-red-100 p-1 hover:bg-gray-300/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 32 32"
                      id="remove"
                    >
                      <path
                        className="fill-slate-900 group-hover:fill-red-500"
                        d="M27,6H22V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V6H5V8H7V27a3,3,0,0,0,3,3H22a3,3,0,0,0,3-3V8h2ZM12,4h8V6H12ZM23,27a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V8H23ZM13,14h2v8H13Zm4,0h2v8H17Z"
                        data-name="70  trash, bin, delete"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* Detailis */}
                <div className="flex h-full w-14 items-center justify-center">
                  <Link to={`/item/${item?.id}`}>
                    <div className="mx-auto w-fit cursor-pointer rounded-full bg-gray-300/50 p-1 hover:bg-gray-300/70">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>{" "}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ManageCategory;
