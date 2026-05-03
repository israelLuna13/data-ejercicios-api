import type {Request,Response} from "express"
import Products_type from "../models/Products"

export class ProductsController{
    static getAll= async (req:Request,res:Response)=>{
        try {
            const products = await Products_type.findAll()
            res.json(products)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}