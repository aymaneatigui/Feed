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
    let updates = Array.isArray(req.body) ? req.body : [req.body];
    await prisma.$transaction(async (prisma) => {
      for (const update of updates) {
        const { id, position, label } = update;
        let p = parseInt(position)
        await prisma.categories.update({
          where: { id },
          data: {
            position: p,
            label: label
          },
        });
      }
    });

    //Check if Category exsit
    // const exsit = await checkCategoryId(categoryId);
    // if (!exsit) {
    //   const err = new Error("this category dont exsit");
    //   err.name = "NotFoundError";
    //   next(err);
    // }

    res.status(200).json({ message: "updated successfully" });
    next();
  } catch (error) {
    console.log(error);
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
