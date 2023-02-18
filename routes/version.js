import express from "express"
import { createVersion,addVariantToVersion, deleteVersion, getallVersion, getVersion, updateVersion } from "../controllers/version.js";

const router = express.Router();

router.post("/",createVersion)
router.post("/version/:id",addVariantToVersion)
router.put("/:id",updateVersion)
router.delete("/:id",deleteVersion)
router.get("/find/:id", getVersion)
router.get("/versions",getallVersion)

export default router;