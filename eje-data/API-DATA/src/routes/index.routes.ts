import { Router } from "express";
import { ProductsController } from "../controller/ProductsController";
import { SalesController } from "../controller/SalesController";

const router = Router()

router.get('/products-all', ProductsController.getAll)
router.get('/sales-all', SalesController.getAll)

export default router