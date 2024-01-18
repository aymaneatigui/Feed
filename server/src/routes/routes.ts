import { Router } from "express";
import { addItem, deleteItem, getItems, updateItem } from "../middleware/items";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../middleware/categories";

const routes = Router()

// Items
routes.get("/items", getItems)
routes.post("/item", addItem)
routes.put("/item/:itemId", updateItem)
routes.delete("/item/:itemId", deleteItem)

// Category
routes.get("/categories", getCategories)
routes.post("/category", addCategory)
routes.put("/category/:categoryId", updateCategory)
routes.delete("/category/:categoryId", deleteCategory)



export default routes;