"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mongoose_1 = require("mongoose");
var task_routes_js_1 = require("./routes/task.routes.js");
var error_middleware_js_1 = require("./middleware/error.middleware.js");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/tasks", task_routes_js_1.default);
app.use(error_middleware_js_1.errorMiddleware);
var MONGO_URI = "mongodb://127.0.0.1:27017/task-vault";
mongoose_1.default.connect(MONGO_URI).then(function () {
    console.log("Mongo DB connected");
    app.listen(3000, function () {
        console.log("Server running on port 3000");
    });
})
    .catch(function (error) {
    console.error("mongoDB connection failed:", error);
});
