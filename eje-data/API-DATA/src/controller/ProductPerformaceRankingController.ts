import type {Request,Response} from "express"
import ProductPerformaceRanking from "../models/ProductPerformaceRanking";
export class ProductPerformaceRankingController{
        static getAll= async (req:Request,res:Response)=>{
        try {
            const data = await ProductPerformaceRanking.findAll()
            res.json(data)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}