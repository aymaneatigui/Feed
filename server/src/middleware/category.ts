export const getCategory = async (req, res, next) => {
    try {
    } catch (error) {
      console.error(error);
      const err = new Error("error in getCategory");
      err.name = "BadRequestError";
      return next(err);
    }
  };
  export const addCategory = async (req, res, next) => {
    try {
    } catch (error) {
      console.error(error);
      const err = new Error("error in addCategory");
      err.name = "BadRequestError";
      return next(err);
    }
  };
  export const updateCategory = async (req, res, next) => {
    try {
    } catch (error) {
      console.error(error);
      const err = new Error("error in updateCategory");
      err.name = "BadRequestError";
      return next(err);
    }
  };
  export const deleteCategory = async (req, res, next) => {
    try {
    } catch (error) {
      console.error(error);
      const err = new Error("error in deleteCategory");
      err.name = "BadRequestError";
      return next(err);
    }
  };
  