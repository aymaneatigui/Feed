import { Router } from "express";
import { addItem, deleteItem, getItems, updateItem } from "../middleware/items";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../middleware/categories";
import { addCategoryItem, deleteCategoryItem, getCategoryItem, updateCategoryItem } from "../middleware/categoryItem";

const routes = Router()

// Items
routes.get("/item", getItems)
routes.post("/item", addItem)
routes.put("/item/:itemId", updateItem)
routes.delete("/item/:itemId", deleteItem)

// Category
routes.get("/category", getCategories)
routes.post("/category", addCategory)
routes.put("/category/:categoryId", updateCategory)
routes.delete("/category/:categoryId", deleteCategory)

// CategoryItem
routes.get("/categoryItem", getCategoryItem)
routes.post("/categoryItem", addCategoryItem)
routes.put("/categoryItem", updateCategoryItem)
routes.delete("/categoryItem", deleteCategoryItem)

export default routes;