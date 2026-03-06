import { Response } from "express";

type TSendResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data?: T;
};

const sendResponse = <T>(res: Response, payload: TSendResponse<T>) => {
  const { statusCode, ...responseBody } = payload;
  return res.status(statusCode).json(responseBody);
};

export default sendResponse;
