import { Response } from "express";

const handleHTTPError = (res: Response, message: string, error?: any, statusCode?: number) => {
  const status: number = statusCode ? statusCode : 403;
  
  res.status(status);

  if (error) {
    res.send({ error: error.message, message: message });
  } else {
    res.send({ error: message });
  }
}

export { handleHTTPError };