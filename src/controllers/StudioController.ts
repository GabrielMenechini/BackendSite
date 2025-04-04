import { Request, Response } from "express"
import StudioModel from "../models/StudioModel"

// FIND ALL
export const getALL = async (req: Request, res: Response) => {
    const users =  await  StudioModel.findAll()
    res.send(users)
}

// FIND ID
export const getStudioById = async (
    req: Request<{ id: string }>, 
    res: Response) => {
    
    const user = await StudioModel.findByPk(req.params.id)
    
    return res.json(user);
}
// CREATE STUDIO
export const createStudio = async (req: Request, res: Response) => {

    try {  const { name } = req.body
    if (!name || name === '') {
        return res.status(400)
                            .json({error: 'Name is required'})
    }

    } catch (error) {
            res.status(500).json('Erro interno no servidor ' + error)
    }


    const { name } = req.body
    if (!name || name === '') {
        return res.status(400)
                            .json({error: 'Name is required'})
    }
    
    const user = await StudioModel.create({ name })
    res.status(201).json(user)
}

// UPD USER

export const updateStudio = async (
    req: Request<{ id: string }>,
    res: Response) => {

    try {
        const { name } = req.body
        if (!name || name === '') {
            return res.status(400)
                                .json({error: 'Name is required'})
            }
        
        
        const user = await StudioModel.findByPk(req.params.id)
        if (!user) {
            return res.status(404)
                                .json({error: 'User not found'})
        }
    
        user.name = name             
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

export const destroyStudioById = async (
    req: Request<{ id: string }>,
    res: Response) => {
    
        try {
    
            const user = await StudioModel.findByPk(req.params.id)
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