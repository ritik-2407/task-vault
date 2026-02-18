import { Request, Response } from "express";
import { TaskModel } from "../models/task.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { AppError } from "../utils/AppError.js";

export const createTask = asyncHandler(
    async ( req: Request , res: Response) => {

        const {title, status , priority} = req.body;

        if(!title) {
            throw new AppError("title is required" , 400);
        }

        const task = await TaskModel.create({
            title,
            status,
            priority,

        });


        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task,
        });
    }
)

export const getTasks = asyncHandler(
    async( req: Request , res: Response) => {
        const tasks = await TaskModel.find();

        res.status(201).json({
            success: true,
            message: "Task fetched successfully",
            data: tasks,
        });
    }
);