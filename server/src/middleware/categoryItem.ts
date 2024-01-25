import prisma from "../database/database";
import { indexByCategory } from "../utils/indexing";

// Get CategoryItem
export const getCategoryItem = async (req, res, next) => {
  try {
    const categoryItem = await prisma.categoryItem.findMany({});

    // Index the data by categoryId
    const indexedCategoryItems = indexByCategory(categoryItem);
    res.status(200).json({ data: indexedCategoryItems });
    next();
  } catch (error) {
    const err = new Error("error in getCategoryItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Add CategoryItem
export const addCategoryItem = async (req, res, next) => {
  try {
    //Check if Category exsit
    // const categorieExsit = await checkCategoryId(req.body.categoryId);
    // if (!categorieExsit) {
    //   const err = new Error("this category dont exsit");
    //   err.name = "NotFoundError";
    //   next(err);
    // }

    //Check if Item exsit
    // const ItemExsit = await checkItemId(req.body.itemId);
    // if (!ItemExsit) {
    //   const err = new Error("this item dont exsit");
    //   err.name = "NotFoundError";
    //   next(err);
    // }

    let datalist = req.body;
    // Check if datalist is not an array
    if (!Array.isArray(datalist)) {
      datalist = [datalist];
    }
    await prisma.$transaction(async (prisma) => {
      for (const data of datalist) {
        // Check if user provide Category and Item ID
        if (!data?.itemId || !data?.categoryId) {
          const err = new Error("category or item ID is missing");
          err.name = "BadRequestError";
          next(err);
        }

        const { itemId, categoryId, position } = data;
        // Check if position is a string and parse it
        const parsedPosition =
          typeof position === "string" ? parseInt(position) : position;

        await prisma.categoryItem.create({
          data: { itemId, categoryId, position: parsedPosition },
        });
      }
    });

    res.status(201).json({ message: "created successfully" });
    next();
  } catch (error) {
    console.log(error)
    console.error(error);
    const err = new Error("error in addCategoryItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Update CategoryItem
export const updateCategoryItem = async (req, res, next) => {
  try {
    let updates = req.body;
    // Check if updates is not an array
    if (!Array.isArray(updates)) {
      updates = [updates];
    }
    await prisma.$transaction(async (prisma) => {
      for (const update of updates) {
        const { id, position } = update;
        // Check if position is a string and parse it
        const parsedPosition =
          typeof position === "string" ? parseInt(position) : position;

        await prisma.categoryItem.update({
          where: { id },
          data: { position: parsedPosition },
        });
      }
    });

    res.status(200).json({ message: "updated successfully" });
    next();
  } catch (error) {
    const err = new Error("error in updateCategoryItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Delete CategoryItem
export const deleteCategoryItem = async (req, res, next) => {
  try {
    let CategoryItemIds = req.body;

    // Start a transaction
    await prisma.$transaction(async (prisma) => {
      for (const id of CategoryItemIds) {
        await prisma.categoryItem.delete({
          where: { id },
        });
      }
    });

    res.status(204).send();
    next();
  } catch (error) {
    console.error(error);
    const err = new Error("error in deleteCategoryItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

//Check if Item exsit
export const checkCategoryId = async (id) => {
  return await prisma.categories.findUnique({ where: { id } });
};

//Check if Item exsit
export const checkItemId = async (id) => {
  return await prisma.items.findUnique({ where: { id } });
};
