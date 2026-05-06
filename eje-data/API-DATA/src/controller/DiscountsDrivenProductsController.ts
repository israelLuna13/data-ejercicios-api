import type {Request,Response} from "express"
import DiscountDrivenProducts from '../models/DiscountsDrivenProducts'
export class DiscountDrivenProductsController{
        static getAll= async (req:Request,res:Response)=>{
        try {
            const data = await DiscountDrivenProducts.findAll()
            res.json(data)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}