"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
var errorMiddleware = function (err, req, res, next) {
    console.error("ERROR:", err);
    var statusCode = err.statusCode || 500;
    var message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        message: message,
    });
};
exports.errorMiddleware = errorMiddleware;
