import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

const authorize = (req: Request | any, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];
    try {
      const secret: string | undefined = process.env.JWTSECRET;
      let decodedToken;
      if (secret) {
        decodedToken = jwt.verify(token, secret);
      }
      req.user = decodedToken;
      next();
    } catch (err) {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    res.status(401).json({ message: 'Unauthorized, Token not provided' });
  }
};

export default authorize;