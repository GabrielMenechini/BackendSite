import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { verifyToken } from '../utils/jwt'
import { JsonWebTokenError } from "jsonwebtoken";
 

export const authMiddleware = (
    
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    console.log('token', token);

    if (!token) {
        return res.status(401)
                            .json({error:'Access denied. No Token'})
    } 
    try {
        const decoded: any = verifyToken(token);
        req.body.user = decoded;
        
    } catch (error) { return res.status(401)
        .json({msg:'Access denied. Invalid Token' + error})
        
    }
  
    next()
}

