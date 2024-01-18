// Get Items 
export const getItems = async (req, res, next) => {
  try {

  } catch (error) {
    console.error(error);
    const err = new Error("error in getItems");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Add Items 
export const addItems = async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    const err = new Error("error in addItems");
    err.name = "BadRequestError";
    return next(err);
  }
}

// Update Items 
export const updateItems = async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    const err = new Error("error in updateItems");
    err.name = "BadRequestError";
    return next(err);
  }
};

// Delete Items
export const deleteItems = async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    const err = new Error("error in deleteItems");
    err.name = "BadRequestError";
    return next(err);
  }
};
