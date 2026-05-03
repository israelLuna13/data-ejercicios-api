import type {Request,Response} from "express"
import Sales from "../models/Sales";

export class SalesController{
    static getAll= async (req:Request,res:Response)=>{
        try {
            const sales = await Sales.findAll({limit:10})
            res.json(sales)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}