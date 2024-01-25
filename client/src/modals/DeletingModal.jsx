const DeletingModal = ({ id, item, closeModal, deleteFn }) => {
  return (
    <div className="fixed z-50 flex h-full w-full items-center justify-center bg-black/20 ">
      <div className="relative mx-2 rounded-lg bg-white p-4 text-center shadow xs:p-9">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-2.5 top-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          data-modal-toggle="deleteModal"
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <svg
          className="mx-auto mb-3.5 h-9 w-9 text-gray-400 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          id="remove"
        >
          <path
            className="fill-slate-900 group-hover:fill-red-500"
            d="M27,6H22V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V6H5V8H7V27a3,3,0,0,0,3,3H22a3,3,0,0,0,3-3V8h2ZM12,4h8V6H12ZM23,27a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V8H23ZM13,14h2v8H13Zm4,0h2v8H17Z"
            data-name="70  trash, bin, delete"
          ></path>
        </svg>
        <p className="mb-4 text-gray-500 ">
          Are you sure you want to delete {'"'}
          <span className="font-medium">{item}</span>
          {'"'}?
        </p>
        <div className="flex flex-col items-center justify-center xs:flex-row xs:space-x-4">
          <button
            onClick={closeModal}
            data-modal-toggle="deleteModal"
            type="button"
            className="focus:ring-primary-300 w-full rounded-full border  border-gray-200 bg-white py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 xs:w-fit xs:rounded-lg xs:px-3 "
          >
            No, cancel
          </button>
          <button
            type="submit"
            onClick={() => {
              deleteFn(id);
            }}
            className=" mt-3 w-full rounded-full bg-red-600 px-3 py-2 text-center text-sm  font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 xs:m-0 xs:w-fit xs:rounded-lg "
          >
            {"Yes, I'm sure"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletingModal;
