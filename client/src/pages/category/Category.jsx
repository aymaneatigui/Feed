const Category = ({ category, qte}) => {
  // Label
  const label =
    category.label.charAt(0).toUpperCase() + category.label.slice(1);

  return (
    <tr key={category.id} className="border-b bg-white">
      <td className=" px-3 py-4 text-center">{label}</td>
      <td className=" py-4 pl-6 pr-3 text-left">{qte}</td>
      {/* <td className=" px-3 py-4">
        <Link to={`/category/${category?.id}`}>
          <div className="mx-auto w-fit cursor-pointer rounded-full bg-gray-300/50 p-1">
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
      </td> */}
    </tr>
  );
};

export default Category;
