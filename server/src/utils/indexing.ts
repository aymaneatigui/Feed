// Index the data by categoryId
export const indexByCategory = (categoryItems) => {
    return categoryItems.reduce((acc, categoryItem) => {
      const categoryId = categoryItem.categoryId;
  
      if (!acc[categoryId]) {
        acc[categoryId] = [];
      }
  
      acc[categoryId].push(categoryItem);
  
      return acc;
    }, {});
  };
  