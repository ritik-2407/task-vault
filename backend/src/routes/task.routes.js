"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var task_controller_js_1 = require("../controllers/task.controller.js");
var router = (0, express_1.Router)();
router.post("/", task_controller_js_1.createTask);
router.get("/", task_controller_js_1.getTasks);
exports.default = router;
