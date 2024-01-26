import { useSelector } from "react-redux";
import useCategory from "../hooks/useCategory.jsx";
import { useEffect, useState } from "react";

const UpdateCategoryModal = ({ closeModal, id }) => {
  const { updateCategory, register, setValue } = useCategory({
    closeModal,
    id,
  });
  const { categories } = useSelector((state) => state.categories);
  const [position, setPosition] = useState(1);

  const incrementPosition = () => {
    setPosition(position + 1);
    setValue("position", position + 1);
  };

  const decrementPosition = () => {
    setPosition(position - 1);
    setValue("position", position - 1);
  };

  useEffect(() => {
    if (position > categories.length) {
      setPosition(categories.length);
      setValue("position", categories.length);
    } else if (position <= 0) {
      setPosition(1);
      setValue("position", 1);
    }
  }, [categories, position, setValue]);

  useEffect(() => {
    const category = categories.find((i) => i.id == id);
    setValue("position", category.position + 1);
    setValue("label", category.label)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <>
      <div className="fixed z-20 flex h-full w-full items-center justify-center bg-black/20 ">
        <div className="relative max-h-full w-full max-w-md p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Update Cateogory
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <form onSubmit={updateCategory} className="p-4 md:p-5">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Label
              </label>

              <input
                {...register("label")}
                type="text"
                className=" block  w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-0 focus:border-zinc-600 "
                placeholder="Type category label"
                required=""
              />

              <div className="flex flex-col items-center justify-between xs:flex-row xs:items-end">
                <div className="w-full self-start">
                  <label
                    htmlFor="quantity-input"
                    className="mb-2 mt-3 block text-sm font-medium text-gray-900 "
                  >
                    Choose Position:
                  </label>
                  <div className="relative mb-3 flex max-w-[8rem] items-center xs:mb-0">
                    {/* Subtract */}
                    <button
                      type="button"
                      onClick={decrementPosition}
                      data-input-counter-decrement="quantity-input"
                      className="h-11 rounded-s-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200  "
                    >
                      <svg
                        className="h-3 w-3 text-gray-900 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <input
                      type="text"
                      {...register("position", {
                        valueAsNumber: true,
                        validate: (value) => !isNaN(value),
                      })}
                      value={position}
                      data-input-counter
                      aria-describedby="helper-text-explanation"
                      className="border-y-1 block h-11 w-full border border-x-0 border-gray-300 bg-gray-50 py-2.5 text-center text-sm text-gray-900 focus-within:ring-0 focus:border-gray-300"
                    />
                    {/* Add */}
                    <button
                      onClick={incrementPosition}
                      type="button"
                      id="increment-button"
                      data-input-counter-increment="quantity-input"
                      className="h-11 rounded-e-lg border border-gray-300 bg-gray-100 p-3 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                    >
                      <svg
                        className="h-3 w-3 text-gray-900"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-4 "
                >
                  Update Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCategoryModal;
