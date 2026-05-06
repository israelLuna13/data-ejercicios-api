import type {Request,Response} from "express"
import HighPerformersProducts from "../models/HighPerformersProducts"
export class HighPerformersProductsController{
        static getAll= async (req:Request,res:Response)=>{
        try {
            const data = await HighPerformersProducts.findAll()
            res.json(data)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}