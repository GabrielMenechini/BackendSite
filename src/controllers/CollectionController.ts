import { Request, Response } from "express"
import CollectionModel from "../models/CollectionModel"

// FIND ALL
export const getALL = async (req: Request, res: Response) => {
    const users =  await  CollectionModel.findAll()
    res.send(users)
}