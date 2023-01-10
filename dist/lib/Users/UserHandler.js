"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const User_1 = require("./User");
class UserHandler extends handler_1.handler {
    async get() {
        const reqUrl = `${this.schoolDomain}/users/~me?access_token=${this.accessToken}`;
        const res = await (0, node_fetch_1.default)(reqUrl);
        const json = await res.json();
        return new User_1.User(json.response.data[0]);
    }
}
exports.UserHandler = UserHandler;
//# sourceMappingURL=UserHandler.js.map