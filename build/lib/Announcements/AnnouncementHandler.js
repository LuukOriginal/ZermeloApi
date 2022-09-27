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
exports.AnnouncementsHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const Announcement_1 = require("./Announcement");
class AnnouncementsHandler extends handler_1.handler {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const reqUrl = `${this.schoolDomain}/announcements?user=~me&current=true&access_token=${this.accessToken}`;
            const res = yield (0, node_fetch_1.default)(reqUrl);
            const json = yield res.json();
            return json.response.data.map(announcement => new Announcement_1.Announcement(announcement)).sort((a, b) => {
                if (a.start === b.start)
                    return 0;
                if (a.start < b.start)
                    return -1;
                return 1;
            });
        });
    }
}
exports.AnnouncementsHandler = AnnouncementsHandler;
