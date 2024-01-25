import useCategories from "../../hooks/useCategories.jsx";
import SideBar from "../SideBar.jsx";
import Category from "./Category.jsx";
import Modal from "../../modals/modal.jsx";
import AddCategoryModal from "../../modals/AddCategoryModal.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAc } from "../../features/categories/categoriesAction.jsx";
import { getCategoryItemAc } from "../../features/categoryItem/categoryItemAction.jsx";

const Categories = () => {
  const { categories } = useCategories();
  const { categoryItem } = useSelector((state) => state.categoryItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesAc());
    dispatch(getCategoryItemAc());
  }, [dispatch]);

  const catItemsQte = (id) => {
    if (categoryItem[id] && categoryItem[id].length > 0) {
      return categoryItem[id].length;
    } else {
      return 0;
    }
  };

  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <div className="flex h-[calc(100vh-80px)] w-full">
      <SideBar />
      <div className="mx-3 flex h-full w-full flex-col overflow-hidden">
        <div className="mb-3 flex w-full items-center justify-between">
          {/* Add Category Modal */}
          {categoryModal && (
            <Modal>
              <AddCategoryModal closeModal={() => setCategoryModal(false)} />
            </Modal>
          )}
          <button
            onClick={() => setCategoryModal(true)}
            className="ml-3 w-fit cursor-pointer whitespace-nowrap rounded-full border border-dashed border-gray-900 px-5 py-2 leading-tight hover:bg-gray-300/50 "
          >
            New Category
          </button>
        </div>
        <section className="my-3 h-full w-full overflow-hidden rounded-2xl border border-gray-900/10 bg-zinc-100">
          <div className="myScrollbar h-full w-full overflow-auto">
            <table className="w-full  divide-y divide-gray-200 text-left text-sm text-gray-500">
              <thead className="h-14 bg-zinc-100 text-xs uppercase text-gray-700">
                <tr>
                  <th
                    scope="col"
                    className=" px-6 py-6 text-left"
                    style={{ width: "20%" }}
                  >
                    Label
                  </th>
                  <th
                    scope="col"
                    className=" whitespace-nowrap px-6 py-6 text-left"
                    style={{ width: "20%" }}
                  >
                    Number Of Items
                  </th>
                  <th
                    scope="col"
                    className=" px-6 py-6 text-left"
                    style={{ width: "60%" }}
                  >
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((category) => {
                  return (
                    <Category
                      key={category.id}
                      category={category}
                      qte={catItemsQte(category?.id)}
                      items={categoryItem[category.id]}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;
