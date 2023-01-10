"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zermelo = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const Users_1 = require("./Users");
const Appointments_1 = require("./Appointments");
const Schools_1 = require("./Schools");
const Announcements_1 = require("./Announcements");
class AuthError extends Error {
}
class Zermelo {
    accessToken;
    apiUrl;
    Users;
    Appointments;
    Schools;
    Announcements;
    constructor(schoolDomain, accessToken) {
        this.accessToken = accessToken;
        this.apiUrl = `https://${schoolDomain}.zportal.nl/api/v3`;
        this.Users = new Users_1.UserHandler(this.apiUrl, this.accessToken);
        this.Appointments = new Appointments_1.AppointmentHandler(this.apiUrl, this.accessToken);
        this.Schools = new Schools_1.SchoolHandler(this.apiUrl, this.accessToken);
        this.Announcements = new Announcements_1.AnnouncementsHandler(this.apiUrl, this.accessToken);
    }
    static async getAccessToken(schoolDomain, authCode) {
        const authURL = `https://${schoolDomain}.zportal.nl/api/v3/oauth/token`;
        const res = await (0, node_fetch_1.default)(`${authURL}?grant_type=authorization_code&code=${authCode.replace(/\s/g, "")}`, { method: "POST" });
        if (!res.ok) {
            const message = `Server returned with an error (${res.status})`;
            throw res.status === 401 ? new AuthError(message) : new Error(message);
        }
        const json = await res.json();
        if (json.access_token)
            return json.access_token;
        throw "Please try again later";
    }
}
exports.Zermelo = Zermelo;
//# sourceMappingURL=Zermelo.js.map