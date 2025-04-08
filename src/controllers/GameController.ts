import { Request, Response } from "express"
import GameModel from "../models/GameModel"
import  StudioModel  from "../models/StudioModel"


// FIND ALL
export const getALL = async (req: Request, res: Response) => {
    const users =  await  GameModel.findAll()
    res.send(users)
}

// FIND ID
export const getGameById = async (
    req: Request<{ id: number }>,
    res: Response) => {
    
    const user = await GameModel.findByPk(req.params.id)
    
    return res.json(user);
}

// CREATE GAME
export const createGame = async (req: Request, res: Response) => {

    try {  const { name, studioId } = req.body
    if (!name || !studioId) {
        return res.status(400)
                            .json({error: 'Values required'})
    }
    
    

    } catch (error) {
            res.status(500).json('Erro interno no servidor ' + error)
    }


    const { name, studioId } = req.body
    if (!name || !studioId) {
        return res.status(400)
                            .json({error: 'Name is required'})
    }
    
    const user = await GameModel.create({ name, studioId })
    res.status(201).json(user)
}

// UPD GAME

export const updateGame = async (
    req: Request<{ id: string }>,
    res: Response) => {

    try {
        const { name } = req.body
        if (!name || name === '') {
            return res.status(400)
                                .json({error: 'Name is required'})
            }
        
        
        const user = await GameModel.findByPk(req.params.id)
        if (!user) {
            return res.status(404)
                                .json({error: 'User not found'})
        }
    
        user.name = name  
        const { id } = req.body;
        user.studioId = id;
        user.price = req.body.price;
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

export const destroyGameById = async (
    req: Request<{ id: string }>,
    res: Response) => {
    
        try {
    
            const user = await GameModel.findByPk(req.params.id)
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

