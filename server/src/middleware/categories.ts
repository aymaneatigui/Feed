import prisma from "../database/database";

// Get Categorie
export const getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.categories.findMany({});
    res.status(200).json({ data: categories });
    next();
  } catch (error) {
    const err = new Error("error in getCategories");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Add Category
export const addCategory = async (req, res, next) => {
  try {
    const position = parseInt(req.body?.position);
    const category = await prisma.categories.create({
      data: { ...req.body, position },
    });
    res.status(201).json({ data: category });
    next();
  } catch (error) {
    console.error(error);
    const err = new Error("error in addCategory");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Update Category
export const updateCategory = async (req, res, next) => {
  try {
    const categoryId = req.params?.categoryId;

    //Check if Category exsit
    const exsit = await checkCategoryId(categoryId);
    if (!exsit) {
      const err = new Error("this category dont exsit");
      err.name = "NotFoundError";
      next(err);
    }
    const categoryData = { ...req.body };
    if (req.body?.position) {
      categoryData.position = parseInt(req.body.position);
    }
    const category = await prisma.categories.update({
      where: { id: categoryId },
      data: categoryData,
    });
    res.status(200).json({ data: category });
    next();
  } catch (error) {
    const err = new Error("error in updateCategory");
    err.name = "BadRequestError";
    return next(err);
  }
};
export const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params?.categoryId;
    //Check if Category exsit
    const exsit = await checkCategoryId(categoryId);
    if (!exsit) {
      const err = new Error("this category dont exsit");
      err.name = "NotFoundError";
      next(err);
    }

    await prisma.categoryItem.deleteMany({
      where: { categoryId },
    });

    const category = await prisma.categories.delete({
      where: { id: categoryId },
    });
    res.status(200).json({ data: category });
    next();
  } catch (error) {
    const err = new Error("error in deleteCategory");
    err.name = "BadRequestError";
    return next(err);
  }
};

//Check if Item exsit
export const checkCategoryId = async (id) => {
  return await prisma.categories.findUnique({ where: { id } });
};
