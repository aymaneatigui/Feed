import { Router } from "express";
import { addItems, deleteItems, getItems, updateItems } from "../middleware/items";
import { addCategory, deleteCategory, getCategory, updateCategory } from "../middleware/category";

const routes = Router()

// Items
routes.get("/items", getItems)
routes.post("/items", addItems)
routes.put("/items/:itemsId", updateItems)
routes.delete("/items/:itemsId", deleteItems)

// Category
routes.get("/category", getCategory)
routes.post("/category", addCategory)
routes.put("/category/:categoryId", updateCategory)
routes.delete("/category/:categoryId", deleteCategory)

export default routes;