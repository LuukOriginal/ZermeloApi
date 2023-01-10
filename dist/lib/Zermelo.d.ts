import { UserHandler } from './Users';
import { AppointmentHandler } from './Appointments';
import { SchoolHandler } from './Schools';
import { AnnouncementsHandler } from './Announcements';
export declare class Zermelo {
    accessToken: string;
    apiUrl: string;
    Users: UserHandler;
    Appointments: AppointmentHandler;
    Schools: SchoolHandler;
    Announcements: AnnouncementsHandler;
    constructor(schoolDomain: string, accessToken: string);
    static getAccessToken(schoolDomain: string, authCode: string): Promise<string>;
}
