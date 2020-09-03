"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var indexRoute_1 = __importDefault(require("./routes/indexRoute"));
var clientesRoute_1 = __importDefault(require("./routes/clientesRoute"));
var body_parser_1 = __importDefault(require("body-parser"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    Server.prototype.config = function () {
        this.app.set('port', process.env.PORT || 3200);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({
            extended: true
        }));
    };
    Server.prototype.routes = function () {
        this.app.use('/', indexRoute_1.default);
        this.app.use('/api/desarrollo', clientesRoute_1.default);
    };
    Server.prototype.start = function () {
        var _this = this;
        this.app.listen(this.app.get('port'), function () {
            return console.log("Server on port " + _this.app.get('port'));
        });
    };
    return Server;
}());
var server = new Server();
server.start();
