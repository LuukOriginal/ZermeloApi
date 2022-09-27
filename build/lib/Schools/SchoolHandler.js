"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const School_1 = require("./School");
class SchoolHandler extends handler_1.handler {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUrl = `${this.schoolDomain}/schools?access_token=${this.accessToken}`;
            const res = yield (0, node_fetch_1.default)(reqUrl);
            const json = yield res.json();
            return json.response.data.map(school => new School_1.School(school));
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUrl = `${this.schoolDomain}/schools/${id}?access_token=${this.accessToken}`;
            const res = yield (0, node_fetch_1.default)(reqUrl);
            const json = yield res.json();
            return new School_1.School(json.response.data[0]);
        });
    }
}
exports.SchoolHandler = SchoolHandler;