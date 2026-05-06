import type {Request,Response} from "express"
import HighVolumeLowRevuene from "../models/HighVolumeLowRevenue";
export class HighVolumeLowRevueneController{
        static getAll= async (req:Request,res:Response)=>{
        try {
            const data = await HighVolumeLowRevuene.findAll()
            res.json(data)
        } catch (error) {
            console.log(error);
            
            res.status(500).json({error:'There is an error'})
        }

    }
}