import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
const Item = ({ item }) => {
  //Date
  const createdAtDate = new Date(item.createdAt);
  const relativeTime = formatDistanceToNow(createdAtDate);
  // Label
  const label = item.label.charAt(0).toUpperCase() + item.label.slice(1);
  // Description
  let description = item.description.toLowerCase();
  description = description.charAt(0).toUpperCase() + description.slice(1);
  description =
    description.length > 30 ? `${description.slice(0, 30)}...` : description;
  //Price
  const price = `$ ${Number(item.price).toFixed(2)}`;

  return (
    <tr key={item.id} className="border-b bg-white">
      <td className="px-6 py-4">{label}</td>
      <td className="whitespace-nowrap pr-10 pl-6 py-4 text-right">{price}</td>
      <td className="whitespace-nowrap px-6 py-4 text-xs">{`${relativeTime} ago`}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4 text-center">
        <label className="relative m-auto inline-flex items-center ">
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            defaultChecked={item?.isAvailable}
          />
          <div className="peer h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </td>
      <td className="px-6 py-4">
        <Link to={`/item/${item?.id}`}>
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
      </td>
    </tr>
  );
};

export default Item;
