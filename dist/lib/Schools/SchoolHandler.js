"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const School_1 = require("./School");
class SchoolHandler extends handler_1.handler {
    async getAll() {
        const reqUrl = `${this.schoolDomain}/schools?access_token=${this.accessToken}`;
        const res = await (0, node_fetch_1.default)(reqUrl);
        const json = await res.json();
        return json.response.data.map(school => new School_1.School(school));
    }
    async get(id) {
        const reqUrl = `${this.schoolDomain}/schools/${id}?access_token=${this.accessToken}`;
        const res = await (0, node_fetch_1.default)(reqUrl);
        const json = await res.json();
        return new School_1.School(json.response.data[0]);
    }
}
exports.SchoolHandler = SchoolHandler;
//# sourceMappingURL=SchoolHandler.js.map