import { Router } from "express";
import { getItems } from "../controllers/users";

const router: Router = Router();

router.get("/", getItems)


export { router };