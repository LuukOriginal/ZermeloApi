"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsHandler = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const handler_1 = require("../handler");
const Announcement_1 = require("./Announcement");
class AnnouncementsHandler extends handler_1.handler {
    async get() {
        const reqUrl = `${this.schoolDomain}/announcements?user=~me&current=true&access_token=${this.accessToken}`;
        const res = await (0, node_fetch_1.default)(reqUrl);
        const json = await res.json();
        return json.response.data.map(announcement => new Announcement_1.Announcement(announcement)).sort((a, b) => {
            if (a.start === b.start)
                return 0;
            if (a.start < b.start)
                return -1;
            return 1;
        });
    }
}
exports.AnnouncementsHandler = AnnouncementsHandler;
//# sourceMappingURL=AnnouncementHandler.js.map