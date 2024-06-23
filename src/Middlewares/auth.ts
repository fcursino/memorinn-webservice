import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'

function verifyAccessToken (req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });
  if (!process.env.JWT_SECRET) return res.status(500).json({ message: 'Internal server error. No secret key provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
    next();
  });
}
export default verifyAccessToken