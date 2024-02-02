import { categoryItem } from "@prisma/client";

type CategoryIndex = {
  [categoryId: string]: categoryItem[];
};

// Index the data by categoryId
export const indexByCategory = (
  categoryItems: categoryItem[]
): CategoryIndex => {
  return categoryItems.reduce(
    (acc: CategoryIndex, categoryItem: categoryItem) => {
      const categoryId = categoryItem.categoryId;

      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }

      acc[categoryId].push(categoryItem);

      return acc;
    },
    {}
  );
};
