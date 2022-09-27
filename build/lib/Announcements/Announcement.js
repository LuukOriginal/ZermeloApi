"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcement = void 0;
class Announcement {
    constructor(announcement) {
        this.id = announcement.id;
        this.start = announcement.start;
        this.end = announcement.end;
        this.title = announcement.title;
        this.text = announcement.text;
    }
}
exports.Announcement = Announcement;
