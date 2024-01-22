import prisma from "../database/database";

// Get Items
export const getItems = async (req, res, next) => {
  try {
    const items = await prisma.items.findMany({});
    res.status(200).json({ data: items });
    next();
  } catch (error) {
    const err = new Error("error in getItems");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Add Items
export const addItem = async (req, res, next) => {
  try {
    const price = parseFloat(req.body.price);
    const isAvailable = req.body?.isAvailable?.toLowerCase() === "true";

    const item = await prisma.items.create({
      data: { ...req.body, price, isAvailable },
    });
    res.status(201).json({ data: item });
    next();
  } catch (error) {
    console.log(error);
    const err = new Error("error in addItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Update Items
export const updateItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;

    //Check if Item exsit
    const exsit = await checkItemId(itemId);
    if (!exsit) {
      const err = new Error("this item dont exsit");
      err.name = "NotFoundError";
      next(err);
    }

    const itemData = { ...req.body };
    if (req.body?.price) {
      itemData.price = parseFloat(req.body.price);
    }
    if (req.body?.isAvailable) {
      itemData.isAvailable =
        req.body.isAvailable.toString().toLowerCase() === "true";
    }

    const item = await prisma.items.update({
      where: { id: itemId },
      data: itemData,
    });
    res.status(200).json({ data: item });
    next();
  } catch (error) {
    const err = new Error("error in updateItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Delete Items
export const deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params?.itemId;

    const exsit = await checkItemId(itemId);
    if (!exsit) {
      const err = new Error("this item dont exsit");
      err.name = "NotFoundError";
      next(err);
    }

    await prisma.categoryItem.deleteMany({
      where: { itemId },
    });

    const item = await prisma.items.delete({ where: { id: itemId } });
    res.status(200).json({ data: item });
    next();
  } catch (error) {
    const err = new Error("error in deleteItem");
    err.name = "BadRequestError";
    return next(err);
  }
};

//Check if Item exsit
export const checkItemId = async (id) => {
  return await prisma.items.findUnique({ where: { id } });
};
