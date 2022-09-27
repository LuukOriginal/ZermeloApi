import { ITokenResponse } from './Interfaces';
import fetch from 'node-fetch';

import { UserHandler } from './Users';
import { AppointmentHandler } from './Appointments';
import { SchoolHandler } from './Schools';
import { AnnouncementsHandler } from './Announcements';

class AuthError extends Error {}

export class Zermelo {
    accessToken : string
    apiUrl : string

    Users : UserHandler
    Appointments : AppointmentHandler
    Schools : SchoolHandler
    Announcements : AnnouncementsHandler

    constructor(schoolDomain : string, accessToken : string) {
        this.accessToken = accessToken
        this.apiUrl = `https://${schoolDomain}.zportal.nl/api/v3`

        this.Users = new UserHandler(this.apiUrl, this.accessToken)
        this.Appointments = new AppointmentHandler(this.apiUrl, this.accessToken)
        this.Schools = new SchoolHandler(this.apiUrl, this.accessToken)
        this.Announcements = new AnnouncementsHandler(this.apiUrl, this.accessToken)
    }

    public static async getAccessToken(schoolDomain: string, authCode: string) {
        const authURL = `https://${schoolDomain}.zportal.nl/api/v3/oauth/token`;

        const res = await fetch(`${authURL}?grant_type=authorization_code&code=${authCode.replace(/\s/g, "")}`, { method: "POST" });
        if (!res.ok) {
        const message = `Server returned with an error (${res.status})`;
            throw res.status === 401 ? new AuthError(message) : new Error(message);
        }
        const json : ITokenResponse = await res.json() as ITokenResponse;
        if (json.access_token) return json.access_token;
        throw "Please try again later";
    }
}