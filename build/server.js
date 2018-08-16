"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// Routing definitions
app.use("/commissions", controllers_1.CommissionsController);
// for boom http error handling
app.use(function (err, req, res, next) {
    return res.status(err.output.statusCode).json(err.output.payload);
});
app.listen(port, function () {
    console.log("Listening on Port " + port);
});
exports.default = app;
