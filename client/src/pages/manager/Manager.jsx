import useCategoryItem from "../../hooks/useCategoryItem.jsx";

const Manager = () => {
  const { categoryItem } = useCategoryItem();
  return (
    <>
      <div> Manager : </div>
      {Object.entries(categoryItem).map(([key, value]) => (
        <div key={key}>
          <h3>---Category ID: {key} ----</h3>
          {value.map((item) => (
            <div key={item.id}>
              <p>Id : {item.id}</p>
              <p>Item ID: {item.itemId}</p>
              <p>Position: {item.position}</p>
            </div>
          ))}
        </div>
      ))}

    </>
  );
};

export default Manager;
