"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clientesController_1 = __importDefault(require("../controllers/clientesController"));
var ClientesRoute = /** @class */ (function () {
    function ClientesRoute() {
        this.router = express_1.Router();
        this.config();
    }
    ClientesRoute.prototype.config = function () {
        this.router.get('/', clientesController_1.default.getAll);
        this.router.post('/', clientesController_1.default.add);
        this.router.get('/:id', clientesController_1.default.getOne);
        this.router.put('/:id', clientesController_1.default.edit);
        this.router.delete('/:id', clientesController_1.default.delete);
    };
    return ClientesRoute;
}());
var clientesRoute = new ClientesRoute();
exports.default = clientesRoute.router;
