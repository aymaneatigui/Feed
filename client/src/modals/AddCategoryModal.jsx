import useCategory from "../hooks/useCategory.jsx";

const AddCategoryModal = ({ closeModal }) => {
  const { addCategory, register } = useCategory({
    closeModal,
  });

  return (
    <>
      <div className="fixed z-20 flex h-full w-full items-center justify-center bg-black/20 ">
        <div className="relative max-h-full w-full max-w-md p-4">
          {/* <!-- Modal content --> */}
          <div className="relative rounded-lg bg-white shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Create cateogory
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
            <form onSubmit={addCategory} className="p-4 md:p-5">
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

              <div className="mt-4 flex flex-col items-center justify-between xs:flex-row xs:items-end">
                <div className="w-full self-start"></div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-zinc-900  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-4 "
                >
                  <svg
                    className="-ms-1 me-1 h-5 w-5"
                    fill="#fff"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Create category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategoryModal;
