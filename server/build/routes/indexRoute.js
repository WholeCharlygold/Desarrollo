"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexController_1 = require("../controllers/indexController");
var IndexRoute = /** @class */ (function () {
    function IndexRoute() {
        this.route = express_1.Router();
        this.config();
    }
    IndexRoute.prototype.config = function () {
        this.route.get('/', indexController_1.indexController.index);
        this.route.post('/', indexController_1.indexController.login);
    };
    return IndexRoute;
}());
var index = new IndexRoute();
exports.default = index.route;
