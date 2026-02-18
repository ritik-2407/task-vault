"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
var mongoose_1 = require("mongoose");
var taskSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
exports.TaskModel = (0, mongoose_1.model)("Task", taskSchema);
