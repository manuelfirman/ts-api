import { Request, Response } from "express";
import { handleHTTPError } from "../utils/handleErrors";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getUsers();
    res.send({ response });
  } catch (e) {
    handleHTTPError(res, "ERROR_GET_ITEMS", e)
  }
}

export { 
  getItems,
}