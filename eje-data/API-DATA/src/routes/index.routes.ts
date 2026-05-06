import { Router } from "express";
import { ProductsController } from "../controller/ProductsController";
import { SalesController } from "../controller/SalesController";
import { DiscountDrivenProductsController } from "../controller/DiscountsDrivenProductsController";
import { HighPerformersProductsController } from "../controller/HighPerformersProductsController";
import { HighVolumeLowRevueneController } from "../controller/HighVolumeLowRevueneController";
import { ProductPerformaceRankingController } from "../controller/ProductPerformaceRankingController";

const router = Router()

router.get('/products-all', ProductsController.getAll)
router.get('/sales-all', SalesController.getAll)
router.get('/discounts-driven-products', DiscountDrivenProductsController.getAll)
router.get('/high-performers-products', HighPerformersProductsController.getAll)
router.get('/high-volume-low-revuene', HighVolumeLowRevueneController.getAll)
router.get('/product-ranking-performace', ProductPerformaceRankingController.getAll)





export default router