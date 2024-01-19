import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryId } = useParams();
  
  return <div>CategoryDetails {categoryId}</div>;
};

export default CategoryDetails;
