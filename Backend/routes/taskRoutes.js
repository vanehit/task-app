import express from "express";
import * as TaskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", TaskController.getTasks);

router.get("/:id", TaskController.getTask);

router.post("/", TaskController.createTask);

router.put("/:id", TaskController.updateTask);

router.delete("/:id", TaskController.deleteTask);

export default router;
