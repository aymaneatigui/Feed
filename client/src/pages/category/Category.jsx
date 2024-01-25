import { useSelector } from "react-redux";

const Category = ({ category, qte, items }) => {
  const { indexedItems } = useSelector((state) => state.items);
  // Label
  const label =
    category.label.charAt(0).toUpperCase() + category.label.slice(1);

  const displayedItems = items.slice(0, 10);
  const itemsString = displayedItems
    .map((item) => indexedItems[item.itemId].label)
    .join(", ");
  const ellipsis = items.length > 10 ? " , ..." : "";

  return (
    <tr key={category.id} className="border-b bg-white">
      <td className="text-righit px-6 py-6">{label}</td>
      <td className="px-6 py-6 text-left">{qte}</td>
      <td className="px-6 py-6 text-left">
        {itemsString}
        {ellipsis}
      </td>
    </tr>
  );
};

export default Category;
