import useItems from "../../hooks/useItems.jsx";

const Items = () => {
  const {items} = useItems();
  return (
    <>
      <div>Items:</div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.label}</h2>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.isAvailable ? "Available" : "Not Available"}</p>
          <p>{item.createdAt}</p>
        </div>
      ))} 
    </>
  );
};

export default Items;
