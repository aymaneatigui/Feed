import { useSelector } from "react-redux";

const Category = ({ category, qte, items }) => {
  const { indexedItems } = useSelector((state) => state.items);

  // Label
  const label =
    category.label.charAt(0).toUpperCase() + category.label.slice(1);

  const displayedItems = Array.isArray(items) ? items.slice(0, 10) : [];
  let itemsString = displayedItems
    .map((item) => indexedItems[item.itemId]?.label)
    .join(" / ");
  itemsString =  itemsString.length > 30 ? `${itemsString.slice(0, 40)}...` : itemsString;

  return (
    <tr key={category.id} className="border-b bg-white">
      <td className="text-righit px-6 py-6">{label}</td>
      <td className="px-6 py-6 text-left">{qte}</td>
      <td className="px-6 py-6 text-left">
        {itemsString}
      </td>
    </tr>
  );
};

export default Category;
