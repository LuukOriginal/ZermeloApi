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
exports.Zermelo = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const Users_1 = require("./Users");
const Appointments_1 = require("./Appointments");
const Schools_1 = require("./Schools");
const Announcements_1 = require("./Announcements");
class AuthError extends Error {
}
class Zermelo {
    constructor(schoolDomain, accessToken) {
        this.accessToken = accessToken;
        this.apiUrl = `https://${schoolDomain}.zportal.nl/api/v3`;
        this.Users = new Users_1.UserHandler(this.apiUrl, this.accessToken);
        this.Appointments = new Appointments_1.AppointmentHandler(this.apiUrl, this.accessToken);
        this.Schools = new Schools_1.SchoolHandler(this.apiUrl, this.accessToken);
        this.Announcements = new Announcements_1.AnnouncementsHandler(this.apiUrl, this.accessToken);
    }
    static getAccessToken(schoolDomain, authCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const authURL = `https://${schoolDomain}.zportal.nl/api/v3/oauth/token`;
            const res = yield (0, node_fetch_1.default)(`${authURL}?grant_type=authorization_code&code=${authCode.replace(/\s/g, "")}`, { method: "POST" });
            if (!res.ok) {
                const message = `Server returned with an error (${res.status})`;
                throw res.status === 401 ? new AuthError(message) : new Error(message);
            }
            const json = yield res.json();
            if (json.access_token)
                return json.access_token;
            throw "Please try again later";
        });
    }
}
exports.Zermelo = Zermelo;
