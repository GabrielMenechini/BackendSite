import { Request, Response } from "express"
import UserModel from "../models/UserModel"

// FIND ALL
export const getALL = async (req: Request, res: Response) => {
    const users =  await  UserModel.findAll()
    res.send(users)
}

// FIND ID
export const getUserById = async (
    req: Request<{ id: number }>, 
    res: Response) => {
    
    const user = await UserModel.findByPk(req.params.id)
    
    return res.json(user);
}
// CREATE USER
export const createUser = async (req: Request, res: Response) => {

    try {  const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400)
                            .json({error: 'Values required'})
    }
    
    const user = await UserModel.create({ name, email, password })
    res.status(201).json(user)

    } catch (error) {
            res.status(500).json('Erro interno no servidor ' + error)
    }


    const { name } = req.body
    if (!name || name === '') {
        return res.status(400)
                            .json({error: 'Name is required'})
    }
    
    const user = await UserModel.create({ name })
    res.status(201).json(user)
}

// UPD USER

export const updateUser = async (
    req: Request<{ id: string }>,
    res: Response) => {

    
        try {  const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.status(400)
                                .json({error: 'Values required'})
        }
        
        
        const user = await UserModel.findByPk(req.params.id)
        if (!user) {
            return res.status(404)
                                .json({error: 'User not found'})
        }
    
            user.name = name
            user.email = email
            user.password = password
           
        await user.save()


     await user.save()
    res.status(201).json(user)

    } catch (error) {
            res.status(500).json('Erro interno no servidor ' + error)
    }


    const { name } = req.body
    if (!name || name === '') {
        return res.status(400)
                            .json({error: 'Name is required'})
    }
}

// DELETE (destroy)

export const destroyUserById = async (
    req: Request<{ id: string }>,
    res: Response) => {
    
        try {
    
            const user = await UserModel.findByPk(req.params.id)
            if (!user) {
                return res.status(404)
                                    .json({error: 'User not found'})
            }
        
            await user.destroy()            
            
    
    
         
        res.status(204).json(user)
        } catch (error) {
                res.status(500).json('Erro interno no servidor ' + error)
        }
}