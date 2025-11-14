import express, { type Request, type Response } from "express";
//Activamos las rutas
const router = express.Router();

//http://localhost:3001/api/personal/ <-------
router.get("/", (_req: Request, _res: Response) => {});
