import mongoose, { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["todo", "in-progress", "done"],
      default: "todo",
    },

    priority: {
      type: String,
      enum: ["low", "mid", "high"],
      default: "mid",
    },
    
  },

  {
    timestamps: true,
  },
);

export const TaskModel = model("Task" , taskSchema);
