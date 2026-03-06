import { RequestHandler } from "express";
import { ZodTypeAny } from "zod";

const validateRequest = (schema: ZodTypeAny): RequestHandler => {
  return async (req, _res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query
      });

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
