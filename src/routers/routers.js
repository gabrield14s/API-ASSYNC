import express from 'express'
import StudentController from '../controllers/StudentController.js';
const router = express.Router();

router.get("/all", StudentController.showAll);

router.get("/", StudentController.form);

router.post("/all", StudentController.post);

export default router;