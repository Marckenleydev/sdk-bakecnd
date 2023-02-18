import express from "express"
import { createVariant, deleteVariant, getallVariant, getVariant, updateVariant } from "../controllers/variant.js";

const router = express.Router();

router.post("/",createVariant)
router.put("/:id",updateVariant)
router.delete("/:id",deleteVariant)
router.get("/find/:id", getVariant)
router.get("/variants",getallVariant)

export default router;