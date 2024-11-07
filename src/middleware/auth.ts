import formatResponse from "@/utils/formatResponse";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
    user?: string | jwt.JwtPayload;
}

export const authMiddleware = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            throw new Error("Access denied. No token provided...");
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        if (!decoded) {
            throw new Error("Invalid token...");
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(401).json(formatResponse("failed", error.message, null));
        }
        res.status(500).json(formatResponse("error", "An unknown error occurred.", null));
    }
};
